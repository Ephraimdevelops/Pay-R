"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        { name: "Product", href: "/#modules" },
        { name: "Company", href: "/company" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-white/20 dark:border-white/10 py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
                        P
                    </div>
                    <span className={cn("text-xl font-medium tracking-tight transition-colors",
                        isScrolled ? "text-foreground" : "text-foreground"
                    )}>
                        Pay-R
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" className="rounded-full px-6 h-10 bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium">
                                Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Book a Live Demo</DialogTitle>
                                <div className="text-sm text-muted-foreground">
                                    See how Pay-R can transform your HR operations.
                                </div>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="header-name">Name</Label>
                                    <Input id="header-name" placeholder="John Doe" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="header-email">Work Email</Label>
                                    <Input id="header-email" placeholder="john@company.com" />
                                </div>
                            </div>
                            <Button type="submit" className="w-full">Schedule Demo</Button>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
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
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground py-3 border-b border-border/50 flex items-center justify-between"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                            ))}
                            <div className="mt-4">
                                <Button className="w-full justify-center h-12 text-lg rounded-xl bg-foreground text-background hover:bg-foreground/90">
                                    Book a Demo
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
