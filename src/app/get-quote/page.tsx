"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, ChevronRight, Calculator, Users, ShieldCheck, Briefcase, Zap, ArrowLeft, Loader2 } from "lucide-react";

export default function GetQuotePage() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [employees, setEmployees] = useState([45]); // Slider uses array
    const [selectedModules, setSelectedModules] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        companyName: "",
        phone: ""
    });

    const submitQuote = useMutation(api.leads.submitQuote);

    const handleNext = () => {
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const tier = employees[0] > 100 ? "Enterprise" : "Standard";
            await submitQuote({
                ...formData,
                employeeCount: employees[0].toString(),
                selectedModules,
                estimatedTier: tier,
            });
            setIsSuccess(true);
        } catch (error) {
            console.error("Failed to submit quote", error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleModule = (id: string) => {
        setSelectedModules(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        );
    };

    // Tier Logic
    const isEnterprise = employees[0] > 100;

    if (isSuccess) {
        return <SuccessView />;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="mb-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Get Your Custom Quote
                        </h1>
                        <p className="text-xl text-muted-foreground font-light">
                            Build the perfect plan for your business in 3 simple steps.
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex gap-2 mb-12">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-primary' : 'bg-muted'}`} />
                        ))}
                    </div>

                    <div className="bg-card/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl min-h-[500px] flex flex-col justify-between relative overflow-hidden">
                        {/* Background Splashes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] -z-10" />

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-10"
                                >
                                    <div className="space-y-4 text-center">
                                        <h2 className="text-2xl font-semibold">How big is your team?</h2>
                                        <p className="text-muted-foreground">Pricing scales with your workforce size.</p>
                                    </div>

                                    <div className="py-10 px-4">
                                        <div className="flex justify-between items-end mb-8">
                                            <div className="text-6xl font-bold text-foreground tabular-nums tracking-tighter">
                                                {employees[0]}
                                                <span className="text-xl text-muted-foreground font-normal ml-2">employees</span>
                                            </div>
                                            <div className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors duration-300 ${isEnterprise ? 'bg-purple-500/10 border-purple-500/20 text-purple-500' : 'bg-blue-500/10 border-blue-500/20 text-blue-500'}`}>
                                                {isEnterprise ? "Enterprise Plan" : "Standard Plan"}
                                            </div>
                                        </div>

                                        <Slider
                                            value={employees}
                                            onValueChange={setEmployees}
                                            max={500}
                                            step={1}
                                            className="cursor-pointer py-4"
                                        />
                                        <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                                            <span>1</span>
                                            <span>250</span>
                                            <span>500+</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <Button onClick={handleNext} className="h-14 px-8 text-lg rounded-full w-full md:w-auto">
                                            Next Step <ChevronRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center space-y-2">
                                        <h2 className="text-2xl font-semibold">What do you need?</h2>
                                        <p className="text-muted-foreground">Select the modules that fit your workflow.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { id: "payroll", title: "Payroll Automation", icon: Calculator, desc: "Tax handling, payslips, & direct deposit." },
                                            { id: "hr", title: "Core HR", icon: Users, desc: "Employee profiles, docs, & onboarding." },
                                            { id: "time", title: "Time & Attendance", icon: Zap, desc: "Biometric clock-in & shift scheduling." },
                                            { id: "compliance", title: "Compliance Guard", icon: ShieldCheck, desc: "Automatic regulatory updates & filing." },
                                        ].map((module) => (
                                            <button
                                                key={module.id}
                                                onClick={() => toggleModule(module.id)}
                                                className={`text-left p-6 rounded-2xl border transition-all duration-200 relative group ${selectedModules.includes(module.id)
                                                    ? "border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 ring-offset-background"
                                                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                                                    }`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${selectedModules.includes(module.id) ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                                                    }`}>
                                                    <module.icon className="w-6 h-6" />
                                                </div>
                                                <h3 className="font-semibold text-lg mb-1">{module.title}</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{module.desc}</p>

                                                {selectedModules.includes(module.id) && (
                                                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-1">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex justify-between pt-4">
                                        <Button variant="ghost" onClick={handleBack} className="h-14 px-6 text-lg rounded-full">
                                            <ArrowLeft className="mr-2 w-5 h-5" /> Back
                                        </Button>
                                        <Button onClick={handleNext} disabled={selectedModules.length === 0} className="h-14 px-8 text-lg rounded-full">
                                            Next Step <ChevronRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center space-y-2">
                                        <h2 className="text-2xl font-semibold">Where should we send it?</h2>
                                        <p className="text-muted-foreground">We&apos;ll email you a detailed breakdown immediately.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                                        <div className="space-y-2">
                                            <Label>Full Name</Label>
                                            <Input
                                                required
                                                placeholder="John Doe"
                                                className="h-12"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Work Email</Label>
                                            <Input
                                                required
                                                type="email"
                                                placeholder="john@company.com"
                                                className="h-12"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Company Name</Label>
                                            <Input
                                                required
                                                placeholder="Acme Inc."
                                                className="h-12"
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Phone (Optional)</Label>
                                            <Input
                                                type="tel"
                                                placeholder="+1 (555)..."
                                                className="h-12"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full h-14 text-lg font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-[1.02] bg-gradient-to-r from-primary to-blue-600"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        Unlock My Quote <Briefcase className="ml-2 w-5 h-5" />
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </form>

                                    <div className="flex justify-start">
                                        <Button variant="ghost" onClick={handleBack} className="h-10 px-4 text-sm rounded-full text-muted-foreground">
                                            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Modules
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function SuccessView() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center font-sans p-4 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg w-full bg-card/50 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl shadow-2xl text-center"
            >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                    <Check className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Quote Unlocked!</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We&apos;ve sent a detailed breakdown of your custom plan to your inbox. A specialist will be in touch shortly to answer any questions.
                </p>

                <div className="space-y-4">
                    <Button asChild variant="outline" className="w-full h-12 rounded-full border-border/50">
                        <Link href="/">Return Home</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
