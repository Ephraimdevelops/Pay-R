"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, MoreHorizontal, Loader2 } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";

export default function BlogPage() {
    const posts = useQuery(api.blog.getPosts);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Blog Posts</h1>
                    <p className="text-muted-foreground">Manage your blog content and publications.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Post
                </Button>
            </div>

            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>All Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {!posts ? (
                            <div className="flex justify-center py-8">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                            </div>
                        ) : posts.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                No blog posts found. Create one to get started.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {posts.map((post: any) => (
                                    <div key={post._id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                                                <FileText className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium">{post.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <span className={`capitalize ${post.status === 'published' ? 'text-green-600' :
                                                        post.status === 'draft' ? 'text-yellow-600' : 'text-gray-600'
                                                        }`}>
                                                        {post.status}
                                                    </span>
                                                    <span>•</span>
                                                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Unpublished'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
