import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                P
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Pay-R
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The complete HR operating system for modern businesses.
                            Simplify payroll, benefits, and compliance.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Product</h3>
                        <ul className="space-y-4">
                            {["Features", "Pricing", "Integrations", "Changelog", "Docs"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            {["About Us", "Careers", "Blog", "Contact", "Partners"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Legal</h3>
                        <ul className="space-y-4">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Status"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        © 2024 Pay-R Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
