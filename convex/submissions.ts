import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getSubmissions = query({
    handler: async (ctx) => {
        return await ctx.db.query("submissions").order("desc").take(10);
    },
});

export const submitContactForm = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        message: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("submissions", {
            type: "contact",
            name: args.name,
            email: args.email,
            company: args.company,
            message: args.message,
            status: "new",
            createdAt: Date.now(),
        });
        return { success: true };
    },
});

export const submitDemoRequest = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        company: v.string(),
        position: v.string(),
        phone: v.string(),
        employees: v.string(),
        preferredDate: v.string(),
        preferredTime: v.string(),
        modules: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("submissions", {
            type: "demo",
            name: args.name,
            email: args.email,
            company: args.company,
            position: args.position,
            phone: args.phone,
            employees: args.employees,
            preferredDate: args.preferredDate,
            preferredTime: args.preferredTime,
            modules: args.modules,
            status: "new",
            createdAt: Date.now(),
        });
        return { success: true };
    },
});
