import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getPosts = query({
    handler: async (ctx) => {
        return await ctx.db.query("blogPosts").order("desc").collect();
    },
});

export const getPostBySlug = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        const post = await ctx.db
            .query("blogPosts")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();
        return post;
    },
});

export const createPost = mutation({
    args: {
        title: v.string(),
        slug: v.string(),
        content: v.string(),
        excerpt: v.string(),
        authorId: v.id("users"),
        status: v.union(v.literal("draft"), v.literal("published"), v.literal("archived")),
        tags: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const postId = await ctx.db.insert("blogPosts", {
            ...args,
            publishedAt: args.status === "published" ? Date.now() : undefined,
        });
        return postId;
    },
});

export const updatePost = mutation({
    args: {
        id: v.id("blogPosts"),
        title: v.optional(v.string()),
        slug: v.optional(v.string()),
        content: v.optional(v.string()),
        excerpt: v.optional(v.string()),
        status: v.optional(v.union(v.literal("draft"), v.literal("published"), v.literal("archived"))),
        tags: v.optional(v.array(v.string())),
    },
    handler: async (ctx, args) => {
        const { id, ...fields } = args;
        await ctx.db.patch(id, {
            ...fields,
            publishedAt: fields.status === "published" ? Date.now() : undefined,
        });
    },
});

export const deletePost = mutation({
    args: { id: v.id("blogPosts") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});
