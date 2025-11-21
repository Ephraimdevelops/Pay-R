"use client";

import { ModuleSection } from "./ModuleSection";
import { Users, DollarSign, Briefcase, TrendingUp } from "lucide-react";

export function Modules() {
    return (
        <div className="bg-background space-y-10 py-10" id="modules">
            {/* Module 1: Employee Management */}
            <ModuleSection
                title="Employee Management"
                description="Manage your entire team from a single dashboard. Add, edit, search, and access employee information effortlessly. Employees can also access self-service features such as payslips and leave requests directly through the system."
                features={[
                    "Personal Information",
                    "Allowances & Deductions",
                    "Attendance",
                    "Contracts",
                    "Disciplinary Records",
                    "Promotions & Demotions",
                    "Direct Communication with Employees"
                ]}
                theme="blue"
                imagePosition="right"
            >
                <div className="w-full max-w-md bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mb-32 pointer-events-none" />

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-medium text-foreground">Total Employees</div>
                            <div className="text-2xl font-bold text-foreground">1,248</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                <div className="flex-1">
                                    <div className="h-2 w-24 bg-foreground/10 rounded-full mb-2" />
                                    <div className="h-2 w-16 bg-foreground/5 rounded-full" />
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </ModuleSection>

            {/* Module 2: Payroll Management */}
            <ModuleSection
                title="Payroll Management"
                description="Generate payrolls in a few clicks. The system automatically calculates salaries, allowances, deductions, and applicable taxes for each pay period."
                features={[
                    "Access all employee payslips",
                    "Send payslips via email",
                    "Export payroll data to Excel",
                    "Multi-currency support"
                ]}
                theme="green"
                imagePosition="left"
            >
                <div className="w-full max-w-md bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

                    <div className="flex justify-between items-center mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-muted-foreground">Next Payout</div>
                            <div className="font-medium text-foreground">Oct 25, 2024</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Gross Pay</span>
                            <span className="font-medium text-foreground">$142,500.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Taxes</span>
                            <span className="font-medium text-foreground">$42,100.00</span>
                        </div>
                        <div className="h-px bg-border/50 my-2" />
                        <div className="flex justify-between text-lg font-bold">
                            <span className="text-foreground">Net Pay</span>
                            <span className="text-emerald-500">$100,400.00</span>
                        </div>
                    </div>
                </div>
            </ModuleSection>

            {/* Module 3: Recruitment */}
            <ModuleSection
                title="Recruitment"
                description="Receive job applications directly through your company website and manage them with powerful tools for screening, filtering, and shortlisting — without filling your email inbox."
                features={[
                    "Create job posts",
                    "Optional screening questions",
                    "Receive applications through company website",
                    "Filter candidates based on criteria",
                    "Schedule interviews",
                    "Auto-reject unqualified applicants",
                    "Access thousands of CVs from Ajiriwa.net"
                ]}
                theme="purple"
                imagePosition="right"
            >
                <div className="w-full max-w-md bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <div className="font-medium text-foreground">Senior Product Designer</div>
                            <div className="text-sm text-muted-foreground">Remote • Full-time</div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium">
                            Active
                        </div>
                    </div>

                    <div className="flex gap-2 mb-6">
                        <div className="flex-1 bg-card/50 rounded-xl p-3 text-center border border-border/50">
                            <div className="text-xl font-bold text-foreground">48</div>
                            <div className="text-xs text-muted-foreground">Applied</div>
                        </div>
                        <div className="flex-1 bg-card/50 rounded-xl p-3 text-center border border-border/50">
                            <div className="text-xl font-bold text-foreground">12</div>
                            <div className="text-xs text-muted-foreground">Screened</div>
                        </div>
                        <div className="flex-1 bg-card/50 rounded-xl p-3 text-center border border-border/50">
                            <div className="text-xl font-bold text-foreground">4</div>
                            <div className="text-xs text-muted-foreground">Interview</div>
                        </div>
                    </div>
                </div>
            </ModuleSection>

            {/* Module 4: Performance Management */}
            <ModuleSection
                title="Performance Management"
                description="Set goals, track progress, and evaluate performance consistently across your organization. Empower managers to build high-performing teams."
                features={[
                    "Managers set clear objectives",
                    "Objectives become evaluation criteria",
                    "Full performance appraisal workflow",
                    "Employees & managers rate objectives",
                    "Create PIPs for underperforming staff"
                ]}
                theme="orange"
                imagePosition="left"
            >
                <div className="w-full max-w-md bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-medium text-foreground">Performance Review</div>
                            <div className="text-sm text-muted-foreground">Q3 2024 Cycle</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Goal Achievement</span>
                                <span className="font-medium text-foreground">85%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-orange-500 rounded-full" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Core Competencies</span>
                                <span className="font-medium text-foreground">92%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full w-[92%] bg-orange-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </ModuleSection>
        </div>
    );
}
