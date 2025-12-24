"use client";

import { motion } from "framer-motion";
import {
    Users,
    CreditCard,
    Briefcase,
    BarChart3,
    ShieldCheck,
    Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
    {
        title: "Employee Management",
        description: "Manage all your employees in one place. Add, edit, search and view any information easily with self-service access.",
        icon: Users,
        color: "text-[#41A1E1]",
        bg: "bg-[#41A1E1]/10",
    },
    {
        title: "Payroll Management",
        description: "Automated payroll calculation for any pay-period. Handles allowances, deductions, taxes, and multi-currency support.",
        icon: CreditCard,
        color: "text-green-500",
        bg: "bg-green-50",
    },
    {
        title: "Smart Recruitment",
        description: "Receive job applications directly through your company website. Filter, shortlist, and schedule interviews effortlessly.",
        icon: Briefcase,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
    {
        title: "Performance Reviews",
        description: "Set objectives, perform periodic appraisals, and track employee growth with data-driven performance management.",
        icon: BarChart3,
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade security with role-based access control, audit logs, and secure data encryption for peace of mind.",
        icon: ShieldCheck,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
    },
    {
        title: "Instant Analytics",
        description: "Real-time insights into your workforce. Visualize trends, track costs, and make informed HR decisions.",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-50",
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Everything you need to manage your team
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Powerful tools designed to help you build, manage, and grow your workforce without the headache.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
