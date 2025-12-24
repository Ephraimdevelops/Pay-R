import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitQuote = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        companyName: v.string(),
        phone: v.optional(v.string()),
        employeeCount: v.string(), // e.g. "45"
        selectedModules: v.array(v.string()), // e.g. ["Payroll", "HR"]
        estimatedTier: v.string(), // "Standard" or "Enterprise"
    },
    handler: async (ctx, args) => {
        // 1. Create the lead record
        await ctx.db.insert("leads", {
            name: args.name,
            email: args.email,
            companyName: args.companyName,
            status: "new",
            source: "quote_engine",
            employeeCount: args.employeeCount,
            selectedModules: args.selectedModules,
            estimatedTier: args.estimatedTier,
            notes: `Phone: ${args.phone || "N/A"}`,
        });

        // 2. Also create a submission record for redundancy/analytics if needed
        // (Optional, but good for keeping all form entries in one place)
        await ctx.db.insert("submissions", {
            type: "quote",
            name: args.name,
            email: args.email,
            company: args.companyName,
            phone: args.phone,
            employees: args.employeeCount,
            modules: args.selectedModules,
            status: "new",
            createdAt: Date.now(),
        });
    },
});
