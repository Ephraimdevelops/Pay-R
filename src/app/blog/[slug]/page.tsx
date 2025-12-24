"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, Share2, MessageCircle, ChevronRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Fetch Data
    const post = useQuery(api.cms.getPostBySlug, { slug: slug || "" });

    // Loading State
    if (post === undefined) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    // 404 State
    if (post === null) {
        return (
            <div className="min-h-screen bg-background flex flex-col font-sans">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center py-20 text-center container px-4">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <p className="text-muted-foreground mb-8">The article you are looking for does not exist or has been removed.</p>
                    <Button asChild>
                        <Link href="/blog">Return to Blog</Link>
                    </Button>
                </main>
                <Footer />
            </div>
        );
    }

    // Share Handler
    const handleShare = () => {
        const url = window.location.href;
        const text = `Check out this article on Pay-R: ${post.title}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />

            <main className="flex-1 pt-32 pb-20">
                {/* Hero / Header */}
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">
                                {post.category || "Insight"}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(post._creationTime).toLocaleDateString()}
                            </span>
                            {/* <span className="text-sm text-muted-foreground flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                5 min read
                            </span> */}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                            {post.title}
                        </h1>

                        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-border shadow-2xl">
                            <Image
                                src={post.coverImageUrl || "/images/blog-placeholder.jpg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Content Layout */}
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <article className={cn(
                                "prose prose-lg dark:prose-invert max-w-none",
                                "prose-headings:font-display prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
                                "prose-p:text-muted-foreground prose-p:leading-relaxed",
                                "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
                                "prose-img:rounded-xl prose-img:shadow-lg",
                                "prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
                            )}>
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </article>

                            {/* Post-Article Share */}
                            <div className="mt-16 pt-8 border-t border-border">
                                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                                <div className="flex gap-4">
                                    <Button onClick={handleShare} className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-none">
                                        <MessageCircle className="w-4 h-4 mr-2" /> Share on WhatsApp
                                    </Button>
                                    <Button variant="outline" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                                        <Share2 className="w-4 h-4 mr-2" /> Copy Link
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="sticky top-32 space-y-8">
                                {/* CTA Card */}
                                <div className="bg-card glass-card p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px] -z-10 transition-all duration-500 group-hover:bg-primary/20" />

                                    <h3 className="text-2xl font-bold mb-4">Ready to modernize your workforce?</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Join thousands of companies using Pay-R to automate payroll and compliance.
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-center text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Instant Tax Filing
                                        </li>
                                        <li className="flex items-center text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 1-Click Payroll
                                        </li>
                                        <li className="flex items-center text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Mobile Self-Service
                                        </li>
                                    </ul>

                                    <Button asChild size="lg" className="w-full text-base rounded-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg transition-all">
                                        <Link href="/get-quote">
                                            Get Your Quote <ChevronRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </Button>
                                </div>

                                {/* Newsletter (Mockup) */}
                                <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
                                    <h4 className="font-semibold mb-2">Weekly Insights</h4>
                                    <p className="text-sm text-muted-foreground mb-4">Get the best HR tips delivered to your inbox.</p>
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="flex-1 min-w-0 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                                        />
                                        <Button size="sm">Join</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
