import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ROI Calculator | Pay-R Savings Estimator",
    description: "Calculate how much time and money your business can save by switching to Pay-R. Localized for Tanzania (TZS) and global markets.",
    openGraph: {
        title: "Calculate Your ROI with Pay-R",
        description: "See exactly how many man-hours and millions of shillings you can save with automated payroll.",
        images: ["/images/social-share.png"]
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
