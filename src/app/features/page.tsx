"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, CreditCard, Briefcase, BarChart3, ShieldCheck, Zap, Globe, Smartphone, Clock, FileText, Bell, Lock } from "lucide-react";

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
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-32 pb-20">
                {/* Hero */}
                <div className="container mx-auto px-4 md:px-6 text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        Powerful features for <br />
                        <span className="text-blue-600">modern HR teams.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        From hiring to retiring, Pay-R provides the tools you need to build a world-class organization.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allFeatures.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="container mx-auto px-4 md:px-6 mt-32">
                    <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your HR?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                                Join thousands of companies that trust Pay-R to manage their most valuable asset — their people.
                            </p>
                            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
