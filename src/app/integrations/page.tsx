"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function IntegrationsPage() {
    const categories = [
        {
            title: "Banks & Payments",
            partners: [
                { name: "NMB Bank", color: "hover:text-amber-500", bg: "bg-amber-500", letter: "N" },
                { name: "CRDB Bank", color: "hover:text-green-600", bg: "bg-green-600", letter: "C" },
                { name: "M-Pesa", color: "hover:text-red-500", bg: "bg-red-500", letter: "M" },
                { name: "Tigo Pesa", color: "hover:text-blue-500", bg: "bg-blue-500", letter: "T" },
                { name: "Airtel Money", color: "hover:text-red-600", bg: "bg-red-600", letter: "A" },
            ]
        },
        {
            title: "Compliance & Government",
            partners: [
                { name: "TRA", color: "hover:text-red-700", bg: "bg-red-700", letter: "TRA" },
                { name: "NSSF", color: "hover:text-blue-700", bg: "bg-blue-700", letter: "NSSF" },
                { name: "PSSSF", color: "hover:text-purple-600", bg: "bg-purple-600", letter: "PSSSF" },
                { name: "WCF", color: "hover:text-green-700", bg: "bg-green-700", letter: "WCF" },
            ]
        },
        {
            title: "Accounting Software",
            partners: [
                { name: "QuickBooks", color: "hover:text-green-500", bg: "bg-green-500", letter: "QB" },
                { name: "Xero", color: "hover:text-blue-400", bg: "bg-blue-400", letter: "X" },
                { name: "Sage", color: "hover:text-green-400", bg: "bg-green-400", letter: "S" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1 pt-44 md:pt-48 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Hero */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Connected with the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tanzanian Ecosystem</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Pay-R integrates seamlessly with your favorite banks, mobile money providers, and compliance bodies.
                        </p>
                    </div>

                    {/* Trust Grid */}
                    <div className="max-w-6xl mx-auto space-y-20">
                        {categories.map((cat, i) => (
                            <div key={i} className="space-y-8">
                                <h2 className="text-2xl font-semibold text-center md:text-left border-b border-border pb-4">{cat.title}</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                    {cat.partners.map((p, j) => (
                                        <div
                                            key={j}
                                            className={`
                                                group flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border 
                                                transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/20
                                            `}
                                        >
                                            {/* Logo Placeholder */}
                                            <div className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4
                                                bg-muted text-muted-foreground grayscale group-hover:grayscale-0 
                                                transition-all duration-300 ${p.color} group-hover:bg-opacity-10 group-hover:bg-white dark:group-hover:bg-white/10
                                            `}>
                                                {/* In a real scenario, use <Image> here. For now, text representation */}
                                                <span className={`${p.color} transition-colors`}>{p.letter}</span>
                                            </div>
                                            <span className="font-medium text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                                                {p.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-24 text-center bg-card glass-card p-12 rounded-3xl border border-border shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                        <h2 className="text-3xl font-bold mb-4">Don&apos;t see your provider?</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            We are constantly adding new integrations. Contact us to request a specific connection.
                        </p>

                        <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                            <Link href="/get-quote">
                                Get Complete Access <ChevronRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
