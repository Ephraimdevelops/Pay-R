"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles, ChevronDown, Calculator, FileText, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";

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

    const resources = [
        { name: "Blog", href: "/blog", icon: FileText, desc: "News & Articles" },
        { name: "ROI Calculator", href: "/roi-calculator", icon: Calculator, desc: "Estimate Savings" },
        { name: "Integrations", href: "/integrations", icon: Blocks, desc: "Connect Tools" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            {/* Top Notification Ticker */}
            <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs md:text-sm font-medium relative z-50 shadow-sm border-b border-white/10">
                <div className="container mx-auto flex items-center justify-center gap-2">
                    <span className="flex items-center gap-1.5 bg-white/20 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                        <Sparkles className="w-3 h-3" /> New
                    </span>
                    <span className="opacity-95">Discover our new AI-powered payroll features</span>
                    <Link href="/features" className="inline-flex items-center gap-0.5 hover:underline decoration-white/50 underline-offset-4 ml-1 group">
                        Learn more <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>

            {/* Main Navigation */}
            <header
                className={cn(
                    "w-full transition-all duration-200 border-b",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-border/50 py-3 shadow-sm"
                        : "bg-background/0 border-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-20 w-64 lg:h-24 lg:w-80 transition-transform duration-300 hover:scale-105 shrink-0 block">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/logo-color.png"
                                alt="Pay-R Logo"
                                fill
                                className="object-contain dark:hidden object-left"
                                priority
                            />
                            <Image
                                src="/images/logo-white.png"
                                alt="Pay-R Logo"
                                fill
                                className="object-contain hidden dark:block object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-2">
                        <Link
                            href="/features"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-lg"
                        >
                            Features
                        </Link>
                        <Link
                            href="/mobile"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-lg"
                        >
                            Mobile App
                        </Link>

                        {/* Resources Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-lg outline-none">
                                Resources <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Content */}
                            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out">
                                <div className="bg-popover border border-border rounded-xl shadow-xl overflow-hidden p-1.5 ring-1 ring-black/5">
                                    {resources.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group/item"
                                        >
                                            <div className="mt-0.5 p-1.5 bg-primary/10 rounded-md text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium leading-none mb-1 text-foreground">{item.name}</div>
                                                <div className="text-xs text-muted-foreground">{item.desc}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/company"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-lg"
                        >
                            Company
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-lg"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="h-10 px-6 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors">
                                    Book a Demo
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>Book a Live Demo</DialogTitle>
                                    <div className="text-sm text-muted-foreground">
                                        tell us a bit about yourself and we&apos;ll show you how Pay-R works.
                                    </div>
                                </DialogHeader>
                                <DemoRequestForm />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-background border-b shadow-xl p-4 flex flex-col space-y-2 lg:hidden animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
                        <Link
                            href="/features"
                            className="text-sm font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="/mobile"
                            className="text-sm font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Mobile App
                        </Link>

                        {/* Mobile Resources Section */}
                        <div className="py-2 space-y-1">
                            <div className="text-xs font-semibold text-muted-foreground px-3 uppercase tracking-wider">Resources</div>
                            {resources.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-sm font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <item.icon className="w-4 h-4 text-primary" />
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/company"
                            className="text-sm font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Company
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <div className="p-2 pt-4 border-t border-border/50">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="w-full justify-center h-12 text-lg rounded-xl bg-foreground text-background hover:bg-foreground/90">
                                        Book a Demo
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle>Book a Live Demo</DialogTitle>
                                        <div className="text-sm text-muted-foreground">
                                            tell us a bit about yourself and we&apos;ll show you how Pay-R works.
                                        </div>
                                    </DialogHeader>
                                    <DemoRequestForm />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
