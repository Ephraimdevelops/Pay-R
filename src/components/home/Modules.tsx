"use client";

import { ModuleSection } from "./ModuleSection";
import { User, CreditCard, Briefcase, TrendingUp, Building2 } from "lucide-react";

export function Modules() {
    return (
        <div className="bg-slate-950" style={{ "--foreground": "255 255 255", "--muted-foreground": "148 163 184" } as React.CSSProperties}>
            {/* Module 1: Employee Management */}
            <ModuleSection
                title="Everything in One Place."
                description="Manage all your employees effortlessly — personal info, contracts, attendance, promotions, communication, self-service, and more."
                features={[
                    "Personal Information & Contracts",
                    "Allowances & Deductions",
                    "Attendance Tracking",
                    "Self-Service Portal"
                ]}
                theme="blue"
                imagePosition="right"
            >
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                            <div className="h-3 w-24 bg-gray-100 rounded" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-10 w-full bg-gray-50 rounded border border-gray-100" />
                        <div className="h-10 w-full bg-gray-50 rounded border border-gray-100" />
                        <div className="h-10 w-full bg-gray-50 rounded border border-gray-100" />
                    </div>
                </div>
            </ModuleSection>

            {/* Module 2: Payroll Management */}
            <ModuleSection
                title="Payroll That Runs Itself."
                description="Accurate, automated payroll processing with taxes, allowances, deductions and multi-currency support."
                features={[
                    "Auto-calculated Taxes",
                    "Multi-currency Support",
                    "Instant Salary Slips",
                    "One-click Export"
                ]}
                theme="green"
                imagePosition="left"
            >
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-sm text-gray-500">Net Pay</div>
                        <CreditCard className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="text-4xl font-bold text-emerald-600 mb-2">$12,450.00</div>
                    <div className="text-sm text-emerald-600/80 bg-emerald-50 inline-block px-2 py-1 rounded">
                        +2.5% from last month
                    </div>
                    <div className="mt-8 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Gross Pay</span>
                            <span>$15,000.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-red-500">
                            <span>Taxes</span>
                            <span>-$2,550.00</span>
                        </div>
                    </div>
                </div>
            </ModuleSection>

            {/* Module 3: Recruitment */}
            <ModuleSection
                title="Hire Faster, Hire Smarter."
                description="Receive applications directly from your website, evaluate candidates, shortlist instantly, and schedule interviews effortlessly."
                features={[
                    "Automated Job Posting",
                    "Candidate Filtering",
                    "Interview Scheduling",
                    "Resume Parsing"
                ]}
                theme="orange"
                imagePosition="right"
            >
                <div className="w-full max-w-sm space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 border-l-4 border-orange-500">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="flex-1">
                                <div className="h-3 w-24 bg-gray-200 rounded mb-1" />
                                <div className="h-2 w-16 bg-gray-100 rounded" />
                            </div>
                            <div className="px-3 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
                                Review
                            </div>
                        </div>
                    ))}
                </div>
            </ModuleSection>

            {/* Module 4: Performance */}
            <ModuleSection
                title="Grow People, Grow the Company."
                description="A modern, structured way to set goals, track progress, and evaluate performance fairly."
                features={[
                    "360° Feedback",
                    "Goal Tracking",
                    "Performance Reviews",
                    "Development Plans"
                ]}
                theme="purple"
                imagePosition="left"
            >
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold">Performance Score</h3>
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex items-end gap-2 mb-6">
                        <span className="text-5xl font-bold text-purple-600">4.8</span>
                        <span className="text-gray-400 mb-1">/ 5.0</span>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Goals Met</span>
                                <span>92%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[92%]" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Peer Review</span>
                                <span>4.9</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-400 w-[95%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </ModuleSection>

            {/* Module 5: Company */}
            <ModuleSection
                title="Your Company, Fully Organized."
                description="Everything you need to run your company smoothly — from policies to org structure."
                features={[
                    "Org Chart Visualization",
                    "Document Management",
                    "Company Policies",
                    "Asset Tracking"
                ]}
                theme="gold"
                imagePosition="right"
            >
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400" />
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 rounded-full border-2 border-yellow-400 p-1">
                            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                                <Building2 className="w-8 h-8 text-gray-400" />
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="h-4 w-32 bg-gray-200 rounded mx-auto mb-2" />
                            <div className="h-3 w-24 bg-gray-100 rounded mx-auto" />
                        </div>
                        <div className="flex gap-2 mt-4">
                            <div className="w-20 h-24 bg-gray-50 rounded border border-gray-100" />
                            <div className="w-20 h-24 bg-gray-50 rounded border border-gray-100" />
                            <div className="w-20 h-24 bg-gray-50 rounded border border-gray-100" />
                        </div>
                    </div>
                </div>
            </ModuleSection>
        </div>
    );
}
