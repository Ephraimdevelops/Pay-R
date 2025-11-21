"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        quote: "Pay-R has completely transformed how we handle payroll. It used to take days, now it takes minutes.",
        author: "Sarah Chen",
        role: "VP of People",
        company: "TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
        quote: "The best HR software we've used. The interface is beautiful and the employees actually love using it.",
        author: "Michael Ross",
        role: "Founder",
        company: "StartScale",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        quote: "Compliance was a nightmare for us before. Pay-R handles it all automatically. A lifesaver.",
        author: "Jessica Wu",
        role: "HR Director",
        company: "GlobalCorp",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    },
    {
        quote: "The recruitment module streamlined our hiring process significantly. We're hiring faster than ever.",
        author: "David Miller",
        role: "Head of Talent",
        company: "GrowthCo",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    },
];

export function Testimonials() {
    return (
        <section className="py-24 overflow-hidden bg-slate-900 relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 md:px-6 mb-12 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by the world's most innovative teams
                </h2>
                <p className="text-blue-200/80">
                    Join thousands of companies building better workplaces with Pay-R.
                </p>
            </div>

            {/* Infinite Marquee */}
            <div className="relative flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[400px] shrink-0 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors whitespace-normal"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-blue-200/60">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                            <p className="text-lg text-blue-100/90 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap gap-6 py-4">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={`clone-${index}`}
                            className="w-[350px] md:w-[400px] shrink-0 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors whitespace-normal"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-blue-200/60">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                            <p className="text-lg text-blue-100/90 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
