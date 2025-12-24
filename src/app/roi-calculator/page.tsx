"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ChevronRight, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ROICalculatorPage() {
    const [employees, setEmployees] = useState([50]);
    const [avgSalary, setAvgSalary] = useState(1500000); // TZS
    const [processingHours, setProcessingHours] = useState([10]); // Hours spent manually per month

    // Calculation Logic
    const savings = useMemo(() => {
        const hourlyRate = avgSalary / 160; // Assuming 160 working hours/month
        const manualCost = hourlyRate * processingHours[0] * 12; // Annual manual cost
        const errorCost = (avgSalary * employees[0] * 12) * 0.02; // Assuming 2% error rate without automation
        const softwareCost = employees[0] * 5000 * 12; // Estimated cost (e.g. 5000 TZS per employee/month)

        // Total stats
        const totalSavings = (manualCost + errorCost) - softwareCost;
        return {
            total: Math.max(0, totalSavings),
            manualCost,
            errorCost,
            softwareCost
        };
    }, [employees, avgSalary, processingHours]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-TZ', { style: 'currency', currency: 'TZS', maximumFractionDigits: 0 }).format(amount);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1 pt-44 md:pt-48 pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Hero */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">ROI</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            See exactly how much man-hours and money Pay-R can save your Tanzanian business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Calculator Inputs */}
                        <div className="bg-card glass-card p-8 rounded-3xl border border-border shadow-lg space-y-8">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <Label className="text-lg font-medium">Number of Employees</Label>
                                    <span className="text-2xl font-bold text-primary">{employees[0]}</span>
                                </div>
                                <Slider
                                    value={employees}
                                    onValueChange={setEmployees}
                                    max={1000}
                                    step={10}
                                    className="py-4"
                                />
                                <p className="text-sm text-muted-foreground mt-2">Scale from 10 to 1,000+ staff</p>
                            </div>

                            <div>
                                <Label className="text-lg font-medium mb-4 block">Average Monthly Salary (TZS)</Label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">TZS</span>
                                    <Input
                                        type="number"
                                        value={avgSalary}
                                        onChange={(e) => setAvgSalary(Number(e.target.value))}
                                        className="pl-14 h-14 text-lg font-mono bg-background/50"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <Label className="text-lg font-medium">Hours Spent on Payroll / Month</Label>
                                    <span className="text-2xl font-bold text-primary">{processingHours[0]} hrs</span>
                                </div>
                                <Slider
                                    value={processingHours}
                                    onValueChange={setProcessingHours}
                                    max={40}
                                    step={1}
                                    className="py-4"
                                />
                                <p className="text-sm text-muted-foreground mt-2">Manual data entry, bank uploads, tax filing</p>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10" />

                                <h3 className="text-xl font-medium text-muted-foreground mb-4">Potential Annual Savings</h3>
                                <motion.div
                                    key={savings.total}
                                    initial={{ scale: 0.9, opacity: 0.5 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-5xl md:text-6xl font-bold text-green-600 dark:text-green-400 tracking-tight"
                                >
                                    {formatCurrency(savings.total)}
                                </motion.div>
                                <p className="text-sm text-green-700/70 dark:text-green-300/70 mt-4">
                                    *Based on reduced manual labor and error prevention.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-card rounded-2xl border border-border">
                                    <TrendingUp className="w-6 h-6 text-blue-500 mb-2" />
                                    <p className="text-sm text-muted-foreground">Error Cost Avoidance</p>
                                    <p className="text-xl font-semibold">{formatCurrency(savings.errorCost)}</p>
                                </div>
                                <div className="p-6 bg-card rounded-2xl border border-border">
                                    <Clock className="w-6 h-6 text-orange-500 mb-2" />
                                    <p className="text-sm text-muted-foreground">Productivity Gained</p>
                                    <p className="text-xl font-semibold">{formatCurrency(savings.manualCost)}</p>
                                </div>
                            </div>

                            <Button asChild size="lg" className="w-full h-14 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                                <Link href="/get-quote">
                                    Start Saving Today <ChevronRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
