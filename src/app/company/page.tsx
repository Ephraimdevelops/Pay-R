"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Heart, Globe, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
    {
        icon: Target,
        title: "Mission Driven",
        description: "We're obsessed with simplifying HR so companies can focus on their people, not paperwork."
    },
    {
        icon: Heart,
        title: "People First",
        description: "We believe that behind every employee record is a human being who deserves a great experience."
    },
    {
        icon: Shield,
        title: "Trust & Security",
        description: "We treat your data with the same level of security and privacy as a bank would."
    },
    {
        icon: Globe,
        title: "Global Mindset",
        description: "Workforce management shouldn't be limited by borders. We build for the global economy."
    },
];

const team = [
    {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        image: "bg-blue-100",
        bio: "Ex-Stripe Product Lead. Passionate about fintech and future of work."
    },
    {
        name: "Marcus Rodriguez",
        role: "CTO & Co-Founder",
        image: "bg-purple-100",
        bio: "Previously Engineering Manager at Gusto. 15+ years in HR tech."
    },
    {
        name: "Emily Taylor",
        role: "Head of Design",
        image: "bg-green-100",
        bio: "Award-winning designer focused on creating human-centric enterprise software."
    },
    {
        name: "David Kim",
        role: "VP of Sales",
        image: "bg-orange-100",
        bio: "Scaled sales teams from 0 to $100M ARR at two previous unicorns."
    },
];

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#020617]">
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#020617] -z-20" />
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8"
                        >
                            Building the operating system <br />
                            <span className="text-blue-600 dark:text-blue-400">for the modern workforce.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            Pay-R was founded on a simple premise: HR software shouldn't be painful.
                            We're re-imagining how companies manage their most valuable asset — their people.
                        </motion.p>
                    </div>
                </section>

                {/* Stats / Social Proof */}
                <section className="py-12 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">10k+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Companies</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">$5B+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Payroll Processed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">100+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Countries Supported</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Uptime SLA</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1">
                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-white/5">
                                    {/* Placeholder for office image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
                                        Office Image Placeholder
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Journey</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    It started in 2023 when our founders realized that despite all the technological advancements,
                                    running payroll and managing HR was still a nightmare of spreadsheets, emails, and clunky legacy software.
                                </p>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    We set out to build something different. A platform that is not just a database, but an intelligent
                                    system that automates the busy work and gives leaders the insights they need to build better cultures.
                                </p>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Today, Pay-R is trusted by thousands of forward-thinking companies around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-24 bg-slate-50 dark:bg-white/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                The principles that guide every decision we make.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-6">
                                        <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Meet the Team</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                A diverse group of experts from HR, engineering, and design.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="group">
                                    <div className={`aspect-[4/5] rounded-2xl ${member.image} mb-6 overflow-hidden relative`}>
                                        {/* Placeholder for headshot */}
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400/50 font-bold text-6xl opacity-20">
                                            {member.name.charAt(0)}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Careers CTA */}
                <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Join us in shaping the future of work.
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our remote-first team.
                        </p>
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-blue-900 hover:bg-blue-50">
                            View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
