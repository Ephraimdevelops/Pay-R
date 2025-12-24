"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ModuleSectionProps {
    title: string;
    description: string;
    features: string[];
    theme: "blue" | "green" | "orange" | "purple" | "gold";
    imagePosition?: "left" | "right";
    label: string;
    children?: React.ReactNode; // For custom UI preview
}

const themeColors = {
    blue: {
        bg: "bg-[#41A1E1]/10",
        text: "text-[#41A1E1]",
        gradient: "from-[#41A1E1] to-cyan-400",
        border: "border-[#41A1E1]/20",
        shadow: "shadow-[#41A1E1]/10",
    },
    green: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        gradient: "from-emerald-500 to-teal-400",
        border: "border-emerald-200",
        shadow: "shadow-emerald-500/10",
    },
    orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        gradient: "from-orange-500 to-amber-400",
        border: "border-orange-200",
        shadow: "shadow-orange-500/10",
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        gradient: "from-purple-500 to-pink-400",
        border: "border-purple-200",
        shadow: "shadow-purple-500/10",
    },
    gold: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        gradient: "from-yellow-500 to-amber-400",
        border: "border-yellow-200",
        shadow: "shadow-yellow-500/10",
    },
};

export function ModuleSection({
    title,
    description,
    features,
    theme,
    imagePosition = "right",
    label,
    children,
}: ModuleSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    const colors = themeColors[theme];

    return (
        <section ref={ref} className="py-10 overflow-hidden relative">
            {/* Background Blob */}
            <div
                className={cn(
                    "absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 -z-10",
                    colors.bg,
                    imagePosition === "right" ? "right-0 top-1/2 -translate-y-1/2" : "left-0 top-1/2 -translate-y-1/2"
                )}
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-16",
                    imagePosition === "left" ? "lg:flex-row-reverse" : ""
                )}>

                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: imagePosition === "right" ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <span className={cn("inline-block px-3 py-1 rounded-full text-sm font-medium mb-4", colors.bg, colors.text)}>
                                {label}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                                {title}
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </motion.div>

                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-lg"
                                >
                                    <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0", colors.bg)}>
                                        <Check className={cn("w-4 h-4", colors.text)} />
                                    </div>
                                    {feature}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Visual Preview */}
                    <div className="flex-1 w-full">
                        <motion.div
                            style={{ y, opacity }}
                            className="relative"
                        >
                            {/* Content Container - Clean, no padding/border fluff */}
                            <div className="relative w-full">
                                {children ? children : (
                                    <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
                                        UI Preview Placeholder
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
