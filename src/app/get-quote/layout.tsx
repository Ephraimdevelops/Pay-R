import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get A Quote | Pay-R Pricing",
    description: "Build your custom Pay-R plan. Select modules for Payroll, Core HR, Time & Attendance, and Compliance to get an instant tailored quote.",
    openGraph: {
        title: "Pay-R Pricing Calculator | Custom Quote",
        description: "Transparent pricing that scales with your team. Get a custom quote in under 30 seconds.",
        images: ["/images/social-share.png"]
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
