"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, BarChart3, Globe, Lock } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Centralized Employee Data",
        description: "One secure source of truth for all your people data, accessible from anywhere.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        icon: Zap,
        title: "Automated Payroll",
        description: "Run payroll in minutes, not days. Automatic tax calculations and slip generation.",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
    },
    {
        icon: BarChart3,
        title: "Better HR Decisions",
        description: "Real-time analytics and insights to help you make data-driven workforce decisions.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        icon: Lock,
        title: "Bank-Grade Security",
        description: "Enterprise-level encryption and compliance to keep your sensitive data safe.",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
    },
    {
        icon: Globe,
        title: "Global Compliance",
        description: "Stay compliant with local labor laws and tax regulations automatically.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
    },
    {
        icon: Shield,
        title: "Role-Based Access",
        description: "Granular permission controls to ensure the right people see the right data.",
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
    },
];

export function ValueProps() {
    return (
        <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white"
                    >
                        Built for modern companies that want <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            efficiency, accuracy, and speed.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-400"
                    >
                        Everything you need to manage your workforce, without the complexity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl bg-white/5 border ${feature.border} backdrop-blur-sm hover:bg-white/10 transition-all duration-300`}
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 to-transparent`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
