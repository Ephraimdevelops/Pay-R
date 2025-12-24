import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Pay-R Company Profile",
    description: "Learn about Pay-R's mission to simplify HR for the global workforce. Meet our team, explore our values, and join our journey.",
    openGraph: {
        title: "About Pay-R | Building the Future of Work",
        description: "We believe that behind every employee record is a human being who deserves a great experience.",
        images: ["/images/office-environment.png"]
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
