"use client";

import Image from "next/image";

const clients = [
    { name: "Grumeti Expeditions", logo: "/images/clients/grumeti.png" },
    { name: "University of Arusha", logo: "/images/clients/uoa.png" },
    { name: "Bumaco Insurance", logo: "/images/clients/bumaco.png" },
    { name: "Epyvate & Fortune", logo: "/images/clients/epyvate.png" },
    { name: "Maendeleo Bank", logo: "/images/clients/maendeleo.jpg" },
];

export function SocialProof() {
    return (
        <section className="py-16 md:py-20 border-b border-border/30 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">
                    Trusted by leading companies across Tanzania
                </p>

                {/* Static Logo Grid */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center w-32 h-16 md:w-40 md:h-20 transition-all duration-300"
                        >
                            <div className="relative w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
