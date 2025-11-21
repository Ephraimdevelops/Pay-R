"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Mock Data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Remote Work in 2025",
        excerpt: "How AI and VR are reshaping the way we collaborate across borders.",
        category: "Trends",
        readTime: "5 min read",
        date: "Nov 15, 2024",
        author: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1593642632823-8f7856677741?w=800&h=400&fit=crop",
        slug: "future-of-remote-work"
    },
    {
        id: 2,
        title: "Mastering Payroll Compliance",
        excerpt: "A comprehensive guide to navigating global tax regulations without the headache.",
        category: "Compliance",
        readTime: "8 min read",
        date: "Nov 12, 2024",
        author: "Michael Ross",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
        slug: "mastering-payroll-compliance"
    },
    {
        id: 3,
        title: "Building a High-Performance Culture",
        excerpt: "Strategies from top HR leaders on motivating teams and driving results.",
        category: "Culture",
        readTime: "6 min read",
        date: "Nov 10, 2024",
        author: "Jessica Wu",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
        slug: "building-culture"
    },
    {
        id: 4,
        title: "AI in Recruitment: Friend or Foe?",
        excerpt: "Exploring the ethical implications and efficiency gains of automated hiring.",
        category: "Technology",
        readTime: "7 min read",
        date: "Nov 08, 2024",
        author: "David Miller",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
        slug: "ai-in-recruitment"
    },
];

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Insights & Resources
                    </h1>
                    <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-10">
                        Expert advice, industry trends, and practical guides for modern HR teams.
                    </p>

                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <Input
                            className="pl-10 h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20 transition-all"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Featured Post (First one) */}
            {filteredPosts.length > 0 && !searchQuery && (
                <section className="py-16 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden">
                            <Image
                                src={filteredPosts[0].image}
                                alt={filteredPosts[0].title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{filteredPosts[0].category}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {filteredPosts[0].date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {filteredPosts[0].readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                <Link href={`/blog/${filteredPosts[0].slug}`} className="hover:text-blue-600 transition-colors">
                                    {filteredPosts[0].title}
                                </Link>
                            </h2>
                            <p className="text-lg text-slate-600">
                                {filteredPosts[0].excerpt}
                            </p>
                            <div className="flex items-center gap-3 pt-4">
                                <div className="w-10 h-10 rounded-full bg-slate-200" />
                                <div>
                                    <p className="font-semibold text-slate-900">{filteredPosts[0].author}</p>
                                    <p className="text-sm text-slate-500">Editor in Chief</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Post Grid */}
            <section className="py-12 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(searchQuery ? filteredPosts : filteredPosts.slice(1)).map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <span className="text-sm font-medium text-slate-900">{post.author}</span>
                                        <ArrowRight className="w-4 h-4 text-blue-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
