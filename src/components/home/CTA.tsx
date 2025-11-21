"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CTA() {
    return (
        <section className="py-20 relative overflow-hidden bg-slate-900">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 z-0" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-0" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 -z-10" />

            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight">
                    Ready to transform your HR?
                </h2>
                <p className="text-xl md:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                    Join thousands of modern companies that trust Pay-R to manage their most valuable asset — their people.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-2xl shadow-black/20 transition-all hover:scale-105 hover:shadow-black/30">
                                Book a Live Demo <ArrowRight className="ml-2 h-5 w-5" />
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
                                    <Label htmlFor="cta-name">Name</Label>
                                    <Input id="cta-name" placeholder="John Doe" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="cta-email">Work Email</Label>
                                    <Input id="cta-email" placeholder="john@company.com" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="cta-company">Company Size</Label>
                                    <Input id="cta-company" placeholder="e.g. 50-100 employees" />
                                </div>
                            </div>
                            <Button type="submit" className="w-full">Schedule Demo</Button>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all">
                                Talk to Sales
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Contact Sales</DialogTitle>
                                <div className="text-sm text-muted-foreground">
                                    Get a custom quote for your organization.
                                </div>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="sales-email">Work Email</Label>
                                    <Input id="sales-email" placeholder="john@company.com" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="sales-message">Message</Label>
                                    <Input id="sales-message" placeholder="Tell us about your needs..." />
                                </div>
                            </div>
                            <Button type="submit" className="w-full">Send Request</Button>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
}
