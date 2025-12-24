"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Target, Heart, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const values = [
    {
        icon: Target,
        title: "Mission Driven",
        description: "We're obsessed with simplifying HR so companies can focus on their people, not paperwork.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: Heart,
        title: "People First",
        description: "We believe that behind every employee record is a human being who deserves a great experience.",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
    },
    {
        icon: Shield,
        title: "Trust & Security",
        description: "We treat your data with the same level of security and privacy as a bank would.",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        icon: Globe,
        title: "Global Mindset",
        description: "Workforce management shouldn't be limited by borders. We build for the global economy.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
];

const team = [
    {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        image: "/images/team/sarah-chen.png",
        bio: "Ex-Stripe Product Lead. Passionate about fintech and future of work."
    },
    {
        name: "Marcus Rodriguez",
        role: "CTO & Co-Founder",
        image: "/images/team/marcus-rodriguez.png",
        bio: "Previously Engineering Manager at Gusto. 15+ years in HR tech."
    },
    {
        name: "Emily Taylor",
        role: "Head of Design",
        image: "/images/team/emily-taylor.png",
        bio: "Award-winning designer focused on creating human-centric enterprise software."
    },
    {
        name: "David Kim",
        role: "VP of Sales",
        image: "/images/team/david-kim.png",
        bio: "Scaled sales teams from 0 to $100M ARR at two previous unicorns."
    },
];

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-44 md:pt-48">
                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.05] -z-10" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-medium tracking-tight mb-8"
                        >
                            Building the operating system <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">for the modern workforce.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        >
                            Pay-R was founded on a simple premise: HR software shouldn&apos;t be painful.
                            We&apos;re re-imagining how companies manage their most valuable asset — their people.
                        </motion.p>
                    </div>
                </section>

                {/* Stats / Social Proof */}
                <section className="py-12 border-y border-border/50 bg-card/30 backdrop-blur-sm">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: "Companies", value: "10k+" },
                                { label: "Payroll Processed", value: "$5B+" },
                                { label: "Countries Supported", value: "100+" },
                                { label: "Uptime SLA", value: "99.9%" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-4xl font-medium text-foreground mb-2 tracking-tight">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1">
                                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card/50 backdrop-blur-xl group">
                                    <Image
                                        src="/images/office-environment.png"
                                        alt="Pay-R Office"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-4xl font-medium text-foreground">Our Journey</h2>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        It started in 2023 when our founders realized that despite all the technological advancements,
                                        running payroll and managing HR was still a nightmare of spreadsheets, emails, and clunky legacy software.
                                    </p>
                                    <p>
                                        We set out to build something different. A platform that is not just a database, but an intelligent
                                        system that automates the busy work and gives leaders the insights they need to build better cultures.
                                    </p>
                                    <p>
                                        Today, Pay-R is trusted by thousands of forward-thinking companies around the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Our Core Values</h2>
                            <p className="text-lg text-muted-foreground">
                                The principles that guide every decision we make.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-border hover:bg-card/80 transition-all duration-300 group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${value.bg} flex items-center justify-center mb-6 border ${value.border} group-hover:scale-110 transition-transform`}>
                                        <value.icon className={`w-6 h-6 ${value.color}`} />
                                    </div>
                                    <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Meet the Team</h2>
                            <p className="text-lg text-muted-foreground">
                                A diverse group of experts from HR, engineering, and design.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="group relative">
                                    <div className="aspect-[4/5] rounded-3xl mb-6 overflow-hidden relative bg-card/50 border border-border/50">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                                            <p className="text-white/90 text-sm font-light">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-medium text-foreground">{member.name}</h3>
                                    <div className="text-blue-500 font-medium text-sm mb-2">{member.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Careers CTA */}
                <section className="py-32 relative overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black z-0" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-0" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                            Join us in shaping the future of work.
                        </h2>
                        <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
                            We&apos;re always looking for talented individuals to join our remote-first team.
                        </p>
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                            View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
