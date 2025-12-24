import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";



import { ThemeProvider } from "@/components/theme-provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pay-r.net'),
  title: "Pay-R | Global Payroll & HR Platform",
  icons: {
    icon: [
      { url: '/images/favicon-light.png', media: '(prefers-color-scheme: light)' },
      { url: '/images/favicon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/images/favicon-light.png',
  },
  description: "Revolutionize your Payroll & HR. Streamlined Employee Overview, Allowances, Deductions, and Reporting.",
  openGraph: {
    title: "Pay-R | Global Payroll & HR Platform",
    description: "Revolutionize your Payroll & HR. Streamlined Employee Overview, Allowances, Deductions, and Reporting.",
    url: "https://pay-r.net",
    siteName: "Pay-R",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "Pay-R Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay-R | Global Payroll & HR Platform",
    description: "Revolutionize your Payroll & HR. Streamlined Employee Overview, Allowances, Deductions, and Reporting.",
    images: ["/images/social-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
