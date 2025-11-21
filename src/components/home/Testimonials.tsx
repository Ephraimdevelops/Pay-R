"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Pay-R has completely transformed how we handle payroll. It used to take days, now it takes minutes.",
        author: "Sarah Chen",
        role: "VP of People",
        company: "TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    },
    {
        quote: "The best HR software we've used. The interface is beautiful and the employees actually love using it.",
        author: "Michael Ross",
        role: "Founder",
        company: "StartScale",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces"
    },
    {
        quote: "Compliance was a nightmare for us before. Pay-R handles it all automatically. A lifesaver.",
        author: "Jessica Wu",
        role: "HR Director",
        company: "GlobalCorp",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
    },
    {
        quote: "The recruitment module streamlined our hiring process significantly. We're hiring faster than ever.",
        author: "David Miller",
        role: "Head of Talent",
        company: "GrowthCo",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
    },
    {
        quote: "Finally, an HR platform that doesn't feel like it was built in the 90s. Intuitive and powerful.",
        author: "Alex Rivera",
        role: "COO",
        company: "Novus",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    }
];

export function Testimonials() {
    return (
        <section className="py-20 overflow-hidden bg-background relative">
            <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-6 tracking-tight">
                    Trusted by innovative teams
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                    Join thousands of companies building better workplaces with Pay-R.
                </p>
            </div>

            {/* Infinite Marquee */}
            <div className="relative flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-8 py-8 px-4">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap gap-8 py-8 px-4">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <TestimonialCard key={`clone-${index}`} testimonial={testimonial} />
                    ))}
                </div>

                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div
            className={cn(
                "w-[450px] shrink-0 p-10 rounded-3xl",
                "bg-card border border-border/50",
                "shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
                "transition-all duration-500 hover:-translate-y-1",
                "whitespace-normal flex flex-col justify-between h-[320px]"
            )}
        >
            <p className="text-2xl text-foreground/80 font-light leading-relaxed tracking-tight">
                &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex items-center gap-5 mt-8">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-muted">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <div className="font-medium text-foreground text-lg">{testimonial.author}</div>
                    <div className="text-muted-foreground font-light">{testimonial.role}, {testimonial.company}</div>
                </div>
            </div>
        </div>
    );
}
