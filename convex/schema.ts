import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role: v.union(
            v.literal("super_admin"),
            v.literal("admin"),
            v.literal("editor"),
            v.literal("marketing"),
            v.literal("sales"),
            v.literal("viewer")
        ),
        companyId: v.optional(v.id("companies")),
    }).index("by_email", ["email"]),

    companies: defineTable({
        name: v.string(),
        domain: v.optional(v.string()),
        subscriptionStatus: v.string(),
    }),

    leads: defineTable({
        name: v.string(),
        email: v.string(),
        companyName: v.optional(v.string()),
        status: v.union(
            v.literal("new"),
            v.literal("contacted"),
            v.literal("qualified"),
            v.literal("proposal"),
            v.literal("closed"),
            v.literal("lost")
        ),
        source: v.string(),
        notes: v.optional(v.string()),
        assignedTo: v.optional(v.id("users")),
    }).index("by_status", ["status"]),

    blogPosts: defineTable({
        title: v.string(),
        slug: v.string(),
        content: v.string(), // Markdown content
        excerpt: v.string(),
        coverImage: v.optional(v.string()),
        authorId: v.id("users"),
        publishedAt: v.optional(v.number()),
        status: v.union(v.literal("draft"), v.literal("published"), v.literal("archived")),
        tags: v.array(v.string()),
        seoTitle: v.optional(v.string()),
        seoDescription: v.optional(v.string()),
    })
        .index("by_slug", ["slug"])
        .index("by_status", ["status"]),

    // Media files for blog posts
    mediaFiles: defineTable({
        storageId: v.string(),
        type: v.string(), // 'image', 'video', 'document'
        fileName: v.string(),
        size: v.number(),
        uploadedBy: v.id("users"),
    }),

    // Form Submissions
    submissions: defineTable({
        type: v.string(), // 'contact', 'demo'
        name: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        message: v.optional(v.string()),
        status: v.string(), // 'new', 'contacted', 'closed'
        createdAt: v.number(),
    }).index("by_type", ["type"]),
});
