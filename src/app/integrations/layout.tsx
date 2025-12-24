import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integrations | Pay-R Ecosystem",
    description: "Connect Pay-R with your compatible apps. NMB, CRDB, M-Pesa, TRA, NSSF, QuickBooks, and more.",
    openGraph: {
        title: "Pay-R Integrations | Connected Ecosystem",
        description: "Seamlessly integrate with Banks, Mobile Money, and Government authorities in Tanzania.",
        images: ["/images/social-share.png"]
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
