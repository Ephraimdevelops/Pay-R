"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Loader2, CheckCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const submitDemo = useMutation(api.submissions.submitDemoRequest);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const company = formData.get("company") as string;

        try {
            await submitDemo({ name, email, company });
            setIsSuccess(true);
        } catch (error) {
            console.error("Failed to submit demo request:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section ref={ref} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-background -z-20" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.05] -z-10" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-md border border-border/50 text-muted-foreground text-sm mb-10 shadow-sm hover:bg-secondary/80 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        New: AI-Powered Payroll Automation
                    </div>

                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground mb-8 leading-[1.1]">
                        The HR platform to manage <br />
                        your entire workforce — <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-300%">
                            all in one system.
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        A complete, modern HR solution built to simplify every part of workforce management.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                                    Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Book a Live Demo</DialogTitle>
                                    <div className="text-sm text-muted-foreground">
                                        See how Pay-R can transform your HR operations.
                                    </div>
                                </DialogHeader>
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                                        <div className="w-12 h-12 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold">Request Sent!</h3>
                                        <p className="text-muted-foreground text-sm">
                                            We'll be in touch shortly to schedule your demo.
                                        </p>
                                        <Button onClick={() => setIsSuccess(false)} variant="outline" size="sm">
                                            Close
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleDemoSubmit} className="grid gap-4 py-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" name="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Work Email</Label>
                                            <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="company">Company Size</Label>
                                            <Input id="company" name="company" placeholder="e.g. 50-100 employees" required />
                                        </div>
                                        <Button type="submit" disabled={isSubmitting} className="w-full">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scheduling...
                                                </>
                                            ) : (
                                                "Schedule Demo"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-border/50 text-foreground hover:bg-secondary/50 backdrop-blur-sm transition-all group">
                                    <Play className="mr-2 h-5 w-5 fill-current group-hover:scale-110 transition-transform" /> Watch Video
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black border-none">
                                <div className="aspect-video w-full bg-slate-900 flex items-center justify-center">
                                    <p className="text-white/50">Video Player Placeholder</p>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </motion.div>

                {/* Dashboard Preview - Glassmorphism */}
                <motion.div
                    style={{ y, opacity }}
                    className="relative w-full max-w-7xl mx-auto perspective-1000"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl shadow-blue-500/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out group">
                        {/* Mock UI Header */}
                        <div className="h-14 bg-white/50 dark:bg-white/5 border-b border-white/20 dark:border-white/10 flex items-center px-6 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="h-6 w-64 bg-black/5 dark:bg-white/5 rounded-full ml-4" />
                        </div>

                        {/* Mock UI Body */}
                        <div className="p-8 grid grid-cols-12 gap-8 h-[600px] bg-gradient-to-b from-white/40 to-white/10 dark:from-white/5 dark:to-transparent">
                            {/* Sidebar */}
                            <div className="col-span-3 space-y-4 hidden md:block">
                                <div className="h-10 w-full bg-black/5 dark:bg-white/5 rounded-lg" />
                                <div className="h-10 w-full bg-black/5 dark:bg-white/5 rounded-lg" />
                                <div className="h-10 w-full bg-blue-500/10 dark:bg-blue-500/20 rounded-lg border border-blue-500/20" />
                                <div className="h-10 w-full bg-black/5 dark:bg-white/5 rounded-lg" />
                            </div>

                            {/* Main Content */}
                            <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-6">
                                <div className="col-span-2 h-32 bg-white/60 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10 p-6 flex items-center justify-between">
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-black/10 dark:bg-white/10 rounded" />
                                        <div className="h-8 w-48 bg-black/20 dark:bg-white/20 rounded" />
                                    </div>
                                    <div className="h-16 w-16 rounded-full bg-blue-500/20" />
                                </div>

                                <div className="h-64 bg-white/60 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10" />
                                <div className="h-64 bg-white/60 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10" />
                            </div>
                        </div>

                        {/* Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
