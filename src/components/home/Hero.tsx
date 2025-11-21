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
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Cinematic Background - Theme Aware */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-[#2E1065] dark:via-[#3B82F6] dark:to-[#0f0c29] -z-20 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 dark:opacity-20 -z-10" />

            {/* Animated Blobs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-200/50 dark:bg-purple-500/30 rounded-full blur-[120px] -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, -60, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200/50 dark:bg-blue-500/20 rounded-full blur-[100px] -z-10"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-blue-100 dark:border-white/20 text-blue-600 dark:text-blue-100 text-sm mb-8 animate-fade-in shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        New: AI-Powered Payroll Automation
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                        The HR platform to manage <br />
                        your entire workforce — <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-200 dark:to-purple-200">
                            all in one system.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Manage payroll, benefits, and compliance in one unified system.
                        Built for modern teams who demand speed and accuracy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all hover:scale-105">
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
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-slate-200 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 backdrop-blur-sm transition-all group">
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

                    {/* Social Proof */}
                    <div className="flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="h-8 w-24 bg-slate-300 dark:bg-white/20 rounded animate-pulse" />
                        <div className="h-8 w-24 bg-slate-300 dark:bg-white/20 rounded animate-pulse delay-75" />
                        <div className="h-8 w-24 bg-slate-300 dark:bg-white/20 rounded animate-pulse delay-150" />
                        <div className="h-8 w-24 bg-slate-300 dark:bg-white/20 rounded animate-pulse delay-200" />
                    </div>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    style={{ y }}
                    className="mt-20 relative w-full max-w-6xl mx-auto perspective-1000"
                >
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out">
                        {/* Mock UI Header */}
                        <div className="h-12 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 flex items-center px-4 gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                        </div>
                        {/* Mock UI Body */}
                        <div className="p-8 grid grid-cols-3 gap-6 h-[500px]">
                            <div className="col-span-1 bg-slate-50 dark:bg-white/5 rounded-lg p-4 border border-slate-100 dark:border-white/5 animate-pulse-slow">
                                <div className="h-4 w-24 bg-slate-200 dark:bg-white/10 rounded mb-4" />
                                <div className="space-y-3">
                                    <div className="h-10 w-full bg-white dark:bg-white/5 rounded border border-slate-100 dark:border-transparent" />
                                    <div className="h-10 w-full bg-white dark:bg-white/5 rounded border border-slate-100 dark:border-transparent" />
                                    <div className="h-10 w-full bg-white dark:bg-white/5 rounded border border-slate-100 dark:border-transparent" />
                                </div>
                            </div>
                            <div className="col-span-2 bg-slate-50 dark:bg-white/5 rounded-lg p-4 border border-slate-100 dark:border-white/5">
                                <div className="flex justify-between mb-6">
                                    <div className="h-8 w-32 bg-slate-200 dark:bg-white/10 rounded" />
                                    <div className="h-8 w-24 bg-blue-100 dark:bg-blue-500/20 rounded" />
                                </div>
                                <div className="h-64 w-full bg-gradient-to-t from-blue-500/5 to-transparent rounded-lg border border-slate-100 dark:border-white/5" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
