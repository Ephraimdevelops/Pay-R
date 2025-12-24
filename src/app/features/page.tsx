"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, CreditCard, Briefcase, BarChart3, ShieldCheck, Zap, Globe, Smartphone, Clock, FileText, Bell, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const allFeatures = [
    {
        icon: Users,
        title: "Employee Database",
        description: "A central repository for all employee data. Track history, documents, and personal details securely."
    },
    {
        icon: CreditCard,
        title: "Global Payroll",
        description: "Run payroll in 100+ currencies. We handle the exchange rates and local tax compliance automatically."
    },
    {
        icon: Briefcase,
        title: "Recruitment Pipeline",
        description: "Visual kanban boards for your hiring process. Drag and drop candidates from application to offer."
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Customizable dashboards to track headcount, turnover, payroll costs, and diversity metrics."
    },
    {
        icon: ShieldCheck,
        title: "Compliance Guard",
        description: "Real-time alerts for compliance risks. Never miss a filing deadline or regulatory change."
    },
    {
        icon: Zap,
        title: "Automated Workflows",
        description: "Create custom triggers for onboarding, offboarding, and approval processes."
    },
    {
        icon: Globe,
        title: "Remote Management",
        description: "Tools specifically designed for distributed teams, including time zone coordination and async check-ins."
    },
    {
        icon: Smartphone,
        title: "Mobile App",
        description: "Full-featured mobile app for employees to request leave, view payslips, and update info on the go."
    },
    {
        icon: Clock,
        title: "Time & Attendance",
        description: "Geofenced clock-ins, timesheet approvals, and overtime calculations integrated with payroll."
    },
    {
        icon: FileText,
        title: "Document Signing",
        description: "Built-in e-signature for contracts, policies, and tax forms. No third-party tools needed."
    },
    {
        icon: Bell,
        title: "Smart Notifications",
        description: "Intelligent alerts for birthdays, work anniversaries, and pending approvals via Slack or Email."
    },
    {
        icon: Lock,
        title: "SSO & Security",
        description: "Enterprise-grade security with SAML SSO, 2FA, and detailed audit logs for all actions."
    },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Header />

            <main className="pt-32">
                {/* Hero Layout: Image Left, Copy Right */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2" />
                        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2" />
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.05]" />
                    </div>

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Left: Image (Group Photo) */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 w-full max-w-xl lg:max-w-none relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl -z-10 transform scale-90" />
                                <div className="relative">
                                    <div className="relative [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                                        <Image
                                            src="/images/features-team.png"
                                            alt="Pay-R Team Collaboration"
                                            width={800}
                                            height={800}
                                            className="w-full h-auto object-cover"
                                            priority
                                        />
                                    </div>

                                    {/* Glass Overlay Card */}
                                    <div className="absolute bottom-12 left-6 right-6 lg:left-12 lg:right-12 bg-white/90 dark:bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                                <CheckCircle className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg text-foreground">All Systems Operational</div>
                                                <div className="text-sm text-muted-foreground">99.99% Uptime Guaranteed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Copy */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex-1 space-y-8 text-center lg:text-left"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    Feature-Rich Platform
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                    Powerful tools for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                                        modern teams.
                                    </span>
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                                    From automated payroll to performance reviews, Pay-R gives you the superpowers to build a world-class organization.
                                    Join the future of work today.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-current/20 transition-all hover:scale-105">
                                        <Link href="/get-quote">
                                            Start Free Trial
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-border/50 bg-background/50 hover:bg-background/80 backdrop-blur-sm">
                                        <Link href="/contact">
                                            Schedule Demo
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="py-24 bg-secondary/30 dark:bg-secondary/10 relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {allFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="relative rounded-[3rem] bg-slate-900 dark:bg-black overflow-hidden px-8 py-24 text-center">
                            {/* Background Effects */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 opacity-50" />
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20" />
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-20" />

                            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                                    Ready to transform your HR?
                                </h2>
                                <p className="text-xl text-blue-100/80 font-light">
                                    Join thousands of companies that trust Pay-R to manage their most valuable asset — their people.
                                </p>
                                <Button asChild size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-blue-900 hover:bg-blue-50 shadow-2xl transition-all hover:scale-105 font-bold">
                                    <Link href="/contact">
                                        Get Started Today
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
