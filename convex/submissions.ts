import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const submitContactForm = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        company: v.string(),
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
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("submissions", {
            type: "demo",
            name: args.name,
            email: args.email,
            company: args.company,
            status: "new",
            createdAt: Date.now(),
        });
        return { success: true };
    },
});
