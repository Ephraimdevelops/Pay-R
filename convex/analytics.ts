import { query } from "./_generated/server";

export const getDashboardStats = query({
    handler: async (ctx) => {
        const leads = await ctx.db.query("submissions").collect();
        const blogPosts = await ctx.db.query("blogPosts").collect();

        // In a real app, we might want to optimize this with specific counters or indexes
        // but for now, counting the collection is fine for small datasets.

        const totalLeads = leads.length;
        const newLeads = leads.filter(l => l.status === "new").length;
        const totalPosts = blogPosts.length;
        const publishedPosts = blogPosts.filter(p => p.status === "published").length;
        const draftPosts = blogPosts.filter(p => p.status === "draft").length;

        return {
            totalLeads,
            newLeads,
            totalPosts,
            publishedPosts,
            draftPosts,
            recentActivity: [
                // Mock activity for now, could be real events later
                { id: 1, text: "System update completed", time: "2 hours ago" },
                { id: 2, text: "New user registration", time: "5 hours ago" },
                { id: 3, text: "Database backup successful", time: "1 day ago" },
            ]
        };
    },
});
