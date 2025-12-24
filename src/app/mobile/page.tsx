import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { Check, Smartphone, Clock, FileText, Bell, Shield } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Pay-R Mobile App | Supercharge Your Workforce",
    description: "Empower your team with the Pay-R mobile app. Self-service attendance, payslips, leaves, and more.",
};

export default function MobileAppPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1 pt-32 md:pt-36">
                {/* Hero Section */}
                <section className="relative py-6 lg:py-10 overflow-hidden">
                    {/* Ambient Background */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                            <div className="flex-1 space-y-8 text-center lg:text-left z-10">
                                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                    Now Available on iOS & Android
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                    HR Management, <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-600 animate-gradient bg-300%">
                                        pocket-sized.
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                                    Give your team the freedom they deserve. Clock in, check payslips, and request leave—all in one tap.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                                    <Link href="#" className="transform hover:scale-105 transition-transform duration-300">
                                        <div className="bg-black text-white h-16 rounded-xl flex items-center px-6 gap-3 shadow-xl shadow-black/20 border border-white/10 hover:bg-zinc-900">
                                            <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={32} height={32} className="w-8 h-auto" />
                                            <div className="text-left">
                                                <div className="text-[10px] font-medium opacity-70 uppercase tracking-wide">Get it on</div>
                                                <div className="text-lg font-bold leading-none">Google Play</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="#" className="transform hover:scale-105 transition-transform duration-300">
                                        <div className="bg-gradient-to-br from-zinc-800 to-black text-white h-16 rounded-xl flex items-center px-6 gap-3 shadow-xl shadow-black/20 border border-white/10 hover:to-zinc-900">
                                            <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 52.4 167.5 20.3 32.2 47.7 75.3 78.5 76.5 25.1 1 36.7-16.3 74.5-16.3 36.5 0 46.1 16.3 75.3 16.3 26 0 52.7-44.6 71.8-73.4 17.5-26.6 42.1-66.2 45.4-86.8-59.5-25.5-98.1-85.3-99.2-148.4zM315.6 114c19.3-24.6 30.6-57.8 28.5-95.3-27.1 1.7-56.9 21.6-77.5 45.3-17.7 20-33 54.8-31 92 30.3 3.6 57-21.4 80-42z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-[10px] font-medium opacity-70 uppercase tracking-wide">Download on the</div>
                                                <div className="text-lg font-bold leading-none">App Store</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex-1 relative flex justify-center lg:justify-end">
                                <div className="relative w-[320px] md:w-[450px] aspect-[1/2] z-10 transition-transform duration-700 hover:rotate-[-2deg] hover:scale-[1.02]">
                                    <Image
                                        src="/images/mobile-app-mockup.png"
                                        alt="Pay-R App Dashboard Mockup"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 450px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-12 relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for Humans</h2>
                            <p className="text-muted-foreground text-xl font-light">
                                We built Pay-R Mobile to be intuitive, fast, and beautiful. It&apos;s the HR experience your team actually wants to use.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    icon: Smartphone,
                                    title: "Mobile Attendance",
                                    desc: "Clock in and out directly from the app with geo-fencing validation.",
                                    color: "text-blue-500",
                                    bg: "bg-blue-500/10"
                                },
                                {
                                    icon: FileText,
                                    title: "Instant Payslips",
                                    desc: "View and download monthly payslips instantly. No more paper trails.",
                                    color: "text-purple-500",
                                    bg: "bg-purple-500/10"
                                },
                                {
                                    icon: Clock,
                                    title: "Leave Management",
                                    desc: "Request leave, see remaining balance, and get approval notifications.",
                                    color: "text-orange-500",
                                    bg: "bg-orange-500/10"
                                },
                                {
                                    icon: Bell,
                                    title: "Real-time Alerts",
                                    desc: "Stay updated with company news and HR announcements as they happen.",
                                    color: "text-pink-500",
                                    bg: "bg-pink-500/10"
                                },
                                {
                                    icon: Shield,
                                    title: "Secure & Private",
                                    desc: "Enterprise-grade security ensures your personal data is always protected.",
                                    color: "text-emerald-500",
                                    bg: "bg-emerald-500/10"
                                },
                                {
                                    icon: Check,
                                    title: "Bilingual Interface",
                                    desc: "Fully accessible in both English and Swahili for all staff members.",
                                    color: "text-cyan-500",
                                    bg: "bg-cyan-500/10"
                                }
                            ].map((feature, i) => (
                                <div key={i} className="group relative bg-background/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                    <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center ${feature.color} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
