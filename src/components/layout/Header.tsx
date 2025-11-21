"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "/features" },
        { name: "Solutions", href: "/solutions" },
        { name: "Resources", href: "/blog" },
        { name: "Company", href: "/company" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-blue-500/25 transition-all">
                        P
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
                    )}>
                        Pay-R
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                                isScrolled ? "text-slate-600 dark:text-slate-300" : "text-slate-600 dark:text-slate-300"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className={cn("hover:bg-slate-100 dark:hover:bg-white/10",
                            isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
                        )}>
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="sm" className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-current"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={cn("w-6 h-6", isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-900 dark:text-white py-2 border-b border-slate-100 dark:border-white/5 flex items-center justify-between"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    <ChevronRight className="w-4 h-4 text-slate-400" />
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button variant="outline" className="w-full justify-center dark:bg-white/5 dark:border-white/10 dark:text-white">Sign In</Button>
                                </Link>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full justify-center bg-blue-600">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
