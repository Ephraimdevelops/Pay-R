import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <article className="pt-32 pb-16">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-8">
                        <span className="text-sm font-medium px-3 py-1 bg-secondary rounded-full text-secondary-foreground">
                            Trends
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-foreground">
                            The Future of Remote Work in 2025
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Nov 15, 2024</span>
                            <span>•</span>
                            <span>5 min read</span>
                            <span>•</span>
                            <span>By Sarah Johnson</span>
                        </div>
                    </div>

                    <div className="w-full h-[400px] bg-blue-100 rounded-xl mb-12" />

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            As we approach 2025, the landscape of work continues to evolve rapidly.
                            The hybrid model, once a temporary solution, has become the standard for forward-thinking companies.
                        </p>
                        <h2>The Shift to Asynchronous Communication</h2>
                        <p>
                            One of the biggest changes we&apos;re seeing is the move away from real-time dependency.
                            Teams are learning to collaborate effectively without being online at the exact same time.
                        </p>
                        <blockquote>
                            &quot;The future belongs to companies that can build culture across time zones.&quot;
                        </blockquote>
                        <h2>Technology&apos;s Role</h2>
                        <p>
                            Tools like Pay-R are essential in this new era, providing a centralized hub for
                            distributed teams to manage everything from payroll to performance reviews.
                        </p>
                        <ul>
                            <li>Centralized data management</li>
                            <li>Automated compliance across borders</li>
                            <li>Self-service portals for employees</li>
                        </ul>
                        <p>
                            Conclusion...
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border">
                        <h3 className="text-2xl font-bold mb-6">Subscribe to our newsletter</h3>
                        <div className="flex gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
