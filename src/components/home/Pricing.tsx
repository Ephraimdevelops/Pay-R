"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [employees, setEmployees] = useState([50]);

    const calculatePrice = (basePrice: number) => {
        const employeeMultiplier = Math.ceil(employees[0] / 50);
        const price = basePrice * employeeMultiplier;
        return isAnnual ? price * 0.8 : price; // 20% discount for annual
    };

    return (
        <section className="py-24 relative overflow-hidden" id="pricing">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Choose the plan that&apos;s right for your growing team.
                    </p>

                    {/* Controls */}
                    <div className="bg-white/50 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-xl mx-auto shadow-lg">
                        <div className="mb-8">
                            <div className="flex justify-between mb-4">
                                <Label className="text-base font-medium">Number of Employees</Label>
                                <span className="text-primary font-bold text-lg">{employees[0]}</span>
                            </div>
                            <Slider
                                value={employees}
                                onValueChange={setEmployees}
                                max={500}
                                step={10}
                                min={10}
                                className="py-4"
                            />
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <Label htmlFor="billing-mode" className={cn("cursor-pointer", !isAnnual && "font-bold")}>Monthly</Label>
                            <Switch
                                id="billing-mode"
                                checked={isAnnual}
                                onCheckedChange={setIsAnnual}
                            />
                            <Label htmlFor="billing-mode" className={cn("cursor-pointer", isAnnual && "font-bold")}>
                                Yearly <span className="text-green-600 text-xs ml-1 font-normal">(Save 20%)</span>
                            </Label>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative p-8 rounded-2xl bg-white border border-border shadow-sm flex flex-col"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">Starter</h3>
                            <p className="text-muted-foreground text-sm mb-4">For small teams getting started.</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">${calculatePrice(49).toFixed(0)}</span>
                                <span className="text-muted-foreground ml-1">/ {isAnnual ? 'yr' : 'mo'}</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {["Core HR", "Employee Portal", "Leave Management", "Basic Reporting"].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm">
                                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full">Get Started</Button>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative p-8 rounded-2xl bg-gray-900 text-white shadow-2xl flex flex-col ring-2 ring-primary"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">Pro</h3>
                            <p className="text-gray-400 text-sm mb-4">For growing companies.</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">${calculatePrice(99).toFixed(0)}</span>
                                <span className="text-gray-400">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {["Everything in Starter", "Payroll Automation", "Recruitment Module", "Performance Reviews", "Priority Support"].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm">
                                    <Check className="w-4 h-4 text-primary shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">Start Free Trial</Button>
                    </motion.div>

                    {/* Enterprise Plan */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative p-8 rounded-2xl bg-white border border-border shadow-sm flex flex-col"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                            <p className="text-muted-foreground text-sm mb-4">For large organizations.</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">Custom</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {["Everything in Pro", "Dedicated Success Manager", "Custom Integrations", "SLA Guarantee", "On-premise Deployment"].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm">
                                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full">Contact Sales</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
