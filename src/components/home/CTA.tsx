"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 -z-20" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 -z-10" />

            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to transform your HR?
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Join thousands of modern companies that trust Pay-R to manage their most valuable asset — their people.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-xl transition-all hover:scale-105">
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
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all">
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
