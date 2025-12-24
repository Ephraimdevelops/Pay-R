import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features | Pay-R HR System",
    description: "Explore our comprehensive suite of HR tools including Global Payroll, Recruitment Pipeline, Attendance Tracking, and Employee Self-Service.",
    openGraph: {
        title: "Pay-R Features | The Operating System for Modern HR",
        description: "From hiring to retiring, Pay-R provides the tools you need to build a world-class organization.",
        images: ["/images/social-share.png"]
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
