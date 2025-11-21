"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function ContactPage() {
    const submitForm = useMutation(api.submissions.submitContactForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = `${formData.get("first-name")} ${formData.get("last-name")}`;
        const email = formData.get("email") as string;
        const company = formData.get("company") as string;
        const message = formData.get("message") as string;

        try {
            await submitForm({ name, email, company, message });
            setIsSuccess(true);
        } catch (error) {
            console.error("Failed to submit form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617]">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                Get in touch
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                                Have questions about Pay-R? We&apos;re here to help. Fill out the form or reach out to us directly.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email Us</h3>
                                        <p className="text-slate-600 dark:text-slate-400">sales@pay-r.com</p>
                                        <p className="text-slate-600 dark:text-slate-400">support@pay-r.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Call Us</h3>
                                        <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                                        <p className="text-slate-500 dark:text-slate-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Visit Us</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            123 Innovation Drive<br />
                                            Tech Valley, CA 94043
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <Card className="border-slate-200 dark:border-white/10 shadow-xl bg-white dark:bg-white/5">
                            <CardHeader>
                                <CardTitle className="text-slate-900 dark:text-white">Book a Demo or Send a Message</CardTitle>
                                <CardDescription className="text-slate-500 dark:text-slate-400">
                                    Tell us about your needs and we&apos;ll get back to you shortly.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Thank you for reaching out. Our team will get back to you within 24 hours.
                                        </p>
                                        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="first-name" className="text-slate-900 dark:text-white">First name</Label>
                                                <Input id="first-name" name="first-name" placeholder="John" required className="bg-white dark:bg-black/20 border-slate-200 dark:border-white/10" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="last-name" className="text-slate-900 dark:text-white">Last name</Label>
                                                <Input id="last-name" name="last-name" placeholder="Doe" required className="bg-white dark:bg-black/20 border-slate-200 dark:border-white/10" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-slate-900 dark:text-white">Work Email</Label>
                                            <Input id="email" name="email" type="email" placeholder="john@company.com" required className="bg-white dark:bg-black/20 border-slate-200 dark:border-white/10" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-slate-900 dark:text-white">Company Name</Label>
                                            <Input id="company" name="company" placeholder="Acme Inc." required className="bg-white dark:bg-black/20 border-slate-200 dark:border-white/10" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-slate-900 dark:text-white">Message</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Tell us about your team size and requirements..."
                                                className="min-h-[120px] bg-white dark:bg-black/20 border-slate-200 dark:border-white/10"
                                                required
                                            />
                                        </div>

                                        <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12 text-white">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
