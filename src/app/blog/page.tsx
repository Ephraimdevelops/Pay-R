"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function BlogIndexPage() {
    const posts = useQuery(api.cms.getPublishedPosts);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["All", "Product Updates", "Compliance", "HR Tips", "Company News"];

    // Filter Logic
    const filteredPosts = posts?.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    }) || [];

    const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const gridPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                {/* Header Section */}
                <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Pay-R <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                        Expert advice on payroll, compliance, and building better workplaces.
                    </p>
                </div>

                {/* Controls */}
                <div className="container mx-auto px-4 md:px-6 mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-4 rounded-2xl bg-card border shadow-sm">
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === cat
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 h-10 rounded-full bg-background"
                            />
                        </div>
                    </div>
                </div>

                {!posts ? (
                    <div className="container mx-auto px-4 text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        <p className="mt-4 text-muted-foreground">Loading articles...</p>
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="container mx-auto px-4 text-center py-20">
                        <p className="text-xl text-muted-foreground">No articles found.</p>
                        <Button variant="link" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
                            Clear filters
                        </Button>
                    </div>
                ) : (
                    <div className="container mx-auto px-4 md:px-6 space-y-16">
                        {/* Featured Post (Only show if on first page/no search filter active generally, but distinct logic is fine) */}
                        {featuredPost && (
                            <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-3xl overflow-hidden border border-border shadow-2xl transition-transform hover:scale-[1.01] duration-500">
                                <div className="grid md:grid-cols-2 h-full">
                                    <div className="relative min-h-[300px] md:min-h-[400px]">
                                        <Image
                                            src={featuredPost.coverImageUrl || "/images/blog-placeholder.jpg"}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-none" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center bg-card relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                                                Featured
                                            </Badge>
                                            <span className="text-sm text-muted-foreground flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {new Date(featuredPost._creationTime).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        {/* Assuming excerpt exists, otherwise truncate content (cleaned) */}
                                        <p className="text-muted-foreground text-lg mb-8 line-clamp-3">
                                            {featuredPost.excerpt || "Read the latest insights from our team..."}
                                        </p>
                                        <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {gridPosts.map(post => (
                                <Link key={post._id} href={`/blog/${post.slug}`} className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={post.coverImageUrl || "/images/blog-placeholder.jpg"}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="secondary" className="backdrop-blur-md bg-white/90 dark:bg-black/50 text-foreground">
                                                {post.category || "General"}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="text-sm text-muted-foreground mb-3 flex items-center gap-4">
                                            <span className="flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {new Date(post._creationTime).toLocaleDateString()}
                                            </span>
                                            {/* <span className="flex items-center">
                                                <Clock className="w-3 h-3 mr-1" />
                                                5 min read
                                            </span> */}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                            {post.excerpt || "Click to read more..."}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-primary mt-auto">
                                            Read More <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
