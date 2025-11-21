import Link from "next/link";
import { Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    {/* Brand & Vision */}
                    <div className="max-w-md space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                                P
                            </div>
                            <span className="text-2xl font-medium tracking-tight text-foreground">
                                Pay-R
                            </span>
                        </Link>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            Building the operating system for the modern workforce.
                            Simple, intelligent, and human-centric.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full bg-card/50 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Minimal Navigation */}
                    <div className="grid grid-cols-2 gap-16">
                        <div>
                            <h3 className="font-medium text-foreground mb-6">Platform</h3>
                            <ul className="space-y-4">
                                {["Features", "Security", "Pricing", "Changelog"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center group">
                                            {item}
                                            <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-foreground mb-6">Company</h3>
                            <ul className="space-y-4">
                                {["About", "Careers", "Contact", "Legal"].map((item) => (
                                    <li key={item}>
                                        <Link href={item === "About" ? "/company" : item === "Contact" ? "/contact" : "#"} className="text-muted-foreground hover:text-foreground transition-colors flex items-center group">
                                            {item}
                                            <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground/60 text-sm font-light">
                        © 2024 Pay-R Inc. Crafted with care.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
