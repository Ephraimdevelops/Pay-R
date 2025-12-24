import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// --- Announcements ---
export const getActiveAnnouncement = query({
    handler: async (ctx) => {
        const announcement = await ctx.db
            .query("announcements")
            .filter((q) => q.eq(q.field("isActive"), true))
            .first();
        return announcement;
    },
});

export const createAnnouncement = mutation({
    args: {
        text: v.string(),
        type: v.union(v.literal("info"), v.literal("alert"), v.literal("new_feature")),
        isActive: v.boolean(),
    },
    handler: async (ctx, args) => {
        // If setting to active, deactivate others (optional logic, but good for tickers)
        if (args.isActive) {
            const active = await ctx.db
                .query("announcements")
                .filter((q) => q.eq(q.field("isActive"), true))
                .collect();
            for (const a of active) {
                await ctx.db.patch(a._id, { isActive: false });
            }
        }
        await ctx.db.insert("announcements", args);
    },
});

export const updateAnnouncement = mutation({
    args: {
        id: v.id("announcements"),
        text: v.optional(v.string()),
        type: v.optional(v.union(v.literal("info"), v.literal("alert"), v.literal("new_feature"))),
        isActive: v.optional(v.boolean()),
    },
    handler: async (ctx, args) => {
        const { id, ...fields } = args;
        if (fields.isActive) {
            const active = await ctx.db
                .query("announcements")
                .filter((q) => q.eq(q.field("isActive"), true))
                .collect();
            for (const a of active) {
                if (a._id !== id) await ctx.db.patch(a._id, { isActive: false });
            }
        }
        await ctx.db.patch(id, fields);
    },
});

// --- Testimonials ---
export const getAllTestimonials = query({
    handler: async (ctx) => {
        return await ctx.db.query("testimonials").collect();
    },
});

export const getActiveTestimonials = query({
    handler: async (ctx) => {
        return await ctx.db
            .query("testimonials")
            .filter((q) => q.eq(q.field("isActive"), true))
            .collect();
    },
});

export const createTestimonial = mutation({
    args: {
        clientName: v.string(),
        companyLogo: v.string(), // Storage ID
        quote: v.string(),
        role: v.string(),
        isActive: v.boolean(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("testimonials", args);
    },
});

export const updateTestimonial = mutation({
    args: {
        id: v.id("testimonials"),
        clientName: v.optional(v.string()),
        companyLogo: v.optional(v.string()),
        quote: v.optional(v.string()),
        role: v.optional(v.string()),
        isActive: v.optional(v.boolean()),
    },
    handler: async (ctx, args) => {
        const { id, ...fields } = args;
        await ctx.db.patch(id, fields);
    },
});

export const deleteTestimonial = mutation({
    args: { id: v.id("testimonials") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});

// --- Global Stats ---
export const getGlobalStats = query({
    handler: async (ctx) => {
        return await ctx.db.query("globalStats").collect();
    },
});

export const updateGlobalStat = mutation({
    args: {
        key: v.string(),
        label: v.string(),
        value: v.string(),
    },
    handler: async (ctx, args) => {
        const existing = await ctx.db
            .query("globalStats")
            .withIndex("by_key", (q) => q.eq("key", args.key))
            .first();

        if (existing) {
            await ctx.db.patch(existing._id, {
                label: args.label,
                value: args.value,
            });
        } else {
            await ctx.db.insert("globalStats", args);
        }
    },
});

// --- Storage Utilities ---
export const generateUploadUrl = mutation({
    args: {},
    handler: async (ctx) => {
        return await ctx.storage.generateUploadUrl();
    },
});

export const getImageUrl = query({
    args: { storageId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.storage.getUrl(args.storageId);
    },
});

// --- Blog ---
export const getPublishedPosts = query({
    handler: async (ctx) => {
        const posts = await ctx.db
            .query("blogPosts")
            .filter((q) => q.eq(q.field("status"), "published"))
            .order("desc")
            .collect();

        // Get Image URLs for cover images
        const postsWithImages = await Promise.all(
            posts.map(async (post) => {
                let coverImageUrl = null;
                if (post.coverImage) {
                    coverImageUrl = await ctx.storage.getUrl(post.coverImage);
                }
                return { ...post, coverImageUrl };
            })
        );

        return postsWithImages;
    },
});

export const getPostBySlug = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        const post = await ctx.db
            .query("blogPosts")
            .filter((q) => q.eq(q.field("slug"), args.slug))
            .first();

        if (!post) return null;

        let coverImageUrl = null;
        if (post.coverImage) {
            coverImageUrl = await ctx.storage.getUrl(post.coverImage);
        }

        return { ...post, coverImageUrl };
    },
});

export const createBlogPost = mutation({
    args: {
        title: v.string(),
        slug: v.string(),
        content: v.string(),
        coverImage: v.optional(v.string()),
        category: v.optional(v.string()),
        status: v.union(v.literal("draft"), v.literal("published")),
    },
    handler: async (ctx, args) => {
        // For now, assign to the first found admin user or create a temporary one if none exist (for dev)
        // In a real app, this would come from ctx.auth
        let user = await ctx.db
            .query("users")
            .filter(q => q.eq(q.field("role"), "admin"))
            .first();

        // Fallback for dev environment if no admin exists
        if (!user) {
            user = await ctx.db.query("users").first();
        }

        if (!user) {
            // Auto-create a default admin user for development
            const newUserId = await ctx.db.insert("users", {
                name: "System Admin",
                email: "admin@pay-r.com",
                role: "admin",
            });
            user = await ctx.db.get(newUserId);

            // Should theoretically exist now, but safety check
            if (!user) throw new Error("Failed to create default admin user.");
        }

        const excerpt = args.content.replace(/<[^>]+>/g, '').substring(0, 200) + "..."; // Simple text extraction

        const postId = await ctx.db.insert("blogPosts", {
            title: args.title,
            slug: args.slug,
            content: args.content,
            coverImage: args.coverImage,
            authorId: user._id,
            status: args.status,
            category: args.category,
            excerpt: excerpt,
            publishedAt: args.status === "published" ? Date.now() : undefined,
            tags: [], // Todo: Add tags support
        });

        return postId;
    },
});
