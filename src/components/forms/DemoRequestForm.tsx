"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const EMPLOYEES_OPTIONS = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "500+"
];

const MODULES_OPTIONS = [
    "Employee Management",
    "Payroll",
    "Recruitment",
    "Performance Management"
];

export function DemoRequestForm({ onSuccess }: { onSuccess?: () => void }) {
    const submitDemo = useMutation(api.submissions.submitDemoRequest);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form state
    const [selectedModules, setSelectedModules] = useState<string[]>([]);

    const toggleModule = (module: string) => {
        setSelectedModules(prev =>
            prev.includes(module)
                ? prev.filter(m => m !== module)
                : [...prev, module]
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            await submitDemo({
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                company: formData.get("company") as string,
                position: formData.get("position") as string,
                phone: formData.get("phone") as string,
                employees: formData.get("employees") as string,
                preferredDate: formData.get("date") as string,
                preferredTime: formData.get("time") as string,
                modules: selectedModules,
            });
            setIsSuccess(true);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Failed to submit demo request:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Request Received!</h3>
                <p className="text-muted-foreground text-base max-w-xs">
                    We&apos;ll be in touch shortly to confirm your demo time.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                    Submit Another
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" placeholder="Acme Inc." required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" name="position" placeholder="HR Manager" required />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Select name="employees" required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                            {EMPLOYEES_OPTIONS.map(opt => (
                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" name="date" type="date" required className="block" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input id="time" name="time" type="time" required className="block" />
                </div>
            </div>

            <div className="space-y-3">
                <Label>Interested Modules</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MODULES_OPTIONS.map((module) => (
                        <div key={module} className="flex items-center space-x-2 border border-input p-3 rounded-lg hover:bg-accent/50 transition-colors">
                            <Checkbox
                                id={`module-${module}`}
                                checked={selectedModules.includes(module)}
                                onCheckedChange={() => toggleModule(module)}
                            />
                            <label
                                htmlFor={`module-${module}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                            >
                                {module}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "w-full h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all",
                    "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground"
                )}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                    </>
                ) : (
                    "Submit Request"
                )}
            </Button>
        </form>
    );
}
