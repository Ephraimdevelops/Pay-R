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

    // CMS: Announcements Ticker
    announcements: defineTable({
        text: v.string(),
        isActive: v.boolean(),
        type: v.union(v.literal("info"), v.literal("alert"), v.literal("new_feature")),
    }),

    // CMS: Testimonials
    testimonials: defineTable({
        clientName: v.string(),
        companyLogo: v.string(), // Storage ID
        quote: v.string(),
        role: v.string(),
        isActive: v.boolean(),
    }),

    // CMS: Global Stats
    globalStats: defineTable({
        label: v.string(),
        value: v.string(),
        key: v.string(), // Unique identifier e.g., 'total_companies'
    }).index("by_key", ["key"]),

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
        // Phase 2: Quote Engine fields
        employeeCount: v.optional(v.string()), // Range or exact number
        selectedModules: v.optional(v.array(v.string())),
        estimatedTier: v.optional(v.string()),
    }).index("by_status", ["status"]),

    blogPosts: defineTable({
        title: v.string(),
        slug: v.string(),
        content: v.string(), // HTML content from Rich Text Editor
        excerpt: v.string(),
        coverImage: v.optional(v.string()), // Storage ID
        authorId: v.id("users"),
        publishedAt: v.optional(v.number()),
        status: v.union(v.literal("draft"), v.literal("published"), v.literal("archived")),
        tags: v.array(v.string()),
        category: v.optional(v.string()), // e.g. "Compliance", "Product"
        seoTitle: v.optional(v.string()),
        seoDescription: v.optional(v.string()),
    })
        .index("by_slug", ["slug"])
        .index("by_status", ["status"]),

    // Media files tracking (optional metadata for uploaded files)
    mediaFiles: defineTable({
        storageId: v.string(),
        type: v.string(), // 'image', 'video', 'document'
        fileName: v.string(),
        size: v.number(),
        uploadedBy: v.optional(v.id("users")),
    }),

    // Form Submissions
    submissions: defineTable({
        type: v.string(), // 'contact', 'demo', 'quote'
        name: v.string(),
        email: v.string(),
        company: v.optional(v.string()),
        position: v.optional(v.string()),
        phone: v.optional(v.string()),
        employees: v.optional(v.string()),
        preferredDate: v.optional(v.string()),
        preferredTime: v.optional(v.string()),
        modules: v.optional(v.array(v.string())),
        message: v.optional(v.string()),
        status: v.string(),
        createdAt: v.number(),
    }).index("by_type", ["type"]),
});
