"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Doc } from "../../../convex/_generated/dataModel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { ImageUpload } from "@/components/admin/ImageUpload";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { Users, FileText, TrendingUp, DollarSign, Loader2, Plus, Trash2, Megaphone, Quote } from "lucide-react";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Command Center</h1>
                    <p className="text-muted-foreground">Manage your content, leads, and system settings.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Settings</Button>
                    <Button>View Live Site</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-[800px]">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="ticker">Ticker</TabsTrigger>
                    <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                    <TabsTrigger value="blog">Blog</TabsTrigger>
                    <TabsTrigger value="leads">Leads</TabsTrigger>
                </TabsList>

                {/* OVERVIEW TAB */}
                <TabsContent value="overview" className="space-y-6">
                    <OverviewTab />
                </TabsContent>

                {/* ANNOUNCEMENTS TICKER TAB */}
                <TabsContent value="ticker" className="space-y-6">
                    <TickerManager />
                </TabsContent>

                {/* TESTIMONIALS TAB */}
                <TabsContent value="testimonials" className="space-y-6">
                    <TestimonialManager />
                </TabsContent>

                {/* BLOG MANAGER TAB */}
                <TabsContent value="blog" className="space-y-6">
                    <BlogManager />
                </TabsContent>

                {/* LEADS TAB */}
                <TabsContent value="leads" className="space-y-6">
                    <LeadsManager />
                </TabsContent>
            </Tabs>
        </div>
    );
}

function OverviewTab() {
    const stats = useQuery(api.analytics.getDashboardStats);
    const recentLeads = useQuery(api.submissions.getSubmissions);

    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats ? stats.totalLeads : "-"}</div>
                        <p className="text-xs text-muted-foreground">
                            {stats ? `+${stats.newLeads} new` : "Loading..."}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">573</div>
                        <p className="text-xs text-muted-foreground">+201 since last week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats ? stats.totalPosts : "-"}</div>
                        <p className="text-xs text-muted-foreground">
                            {stats ? `${stats.draftPosts} drafts pending` : "Loading..."}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenue (Est)</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45k</div>
                        <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Leads</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {!recentLeads ? (
                                <div className="flex justify-center py-4">
                                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                                </div>
                            ) : recentLeads.length === 0 ? (
                                <p className="text-sm text-muted-foreground">No recent leads.</p>
                            ) : (
                                recentLeads.map((lead: Doc<"submissions">) => (
                                    <div key={lead._id} className="flex items-center">
                                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium uppercase">
                                            {lead.name.substring(0, 2)}
                                        </div>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">{lead.name}</p>
                                            <p className="text-sm text-muted-foreground">{lead.email}</p>
                                        </div>
                                        <div className="ml-auto font-medium text-sm text-green-600 capitalize">
                                            {lead.status}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>System Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {!stats ? (
                                <div className="flex justify-center py-4">
                                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                                </div>
                            ) : (
                                stats.recentActivity.map((activity: { id: number; text: string; time: string }) => (
                                    <div key={activity.id} className="flex items-start gap-4 text-sm">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                                        <div>
                                            <p className="font-medium">{activity.text}</p>
                                            <p className="text-muted-foreground text-xs">{activity.time}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function TickerManager() {
    const activeTicker = useQuery(api.cms.getActiveAnnouncement);
    const updateTicker = useMutation(api.cms.createAnnouncement); // Using create to "update" by replacing active
    const [text, setText] = useState("");
    const [type, setType] = useState<"info" | "alert" | "new_feature">("new_feature");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSave = async (isActive: boolean) => {
        setIsSubmitting(true);
        try {
            await updateTicker({ text: text || activeTicker?.text || "New Feature", type, isActive });
            setText("");
        } catch (error) {
            console.error("Failed to update ticker", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Announcement Ticker</CardTitle>
                <CardDescription>Manage the top notification bar on the website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-sm font-medium mb-2">Current Active Ticker:</h3>
                    {activeTicker ? (
                        <div className="flex items-center gap-2 text-sm">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold ${activeTicker.type === 'alert' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                {activeTicker.type.replace('_', ' ')}
                            </span>
                            <span>{activeTicker.text}</span>
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground italic">No active announcement.</p>
                    )}
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Announcement Text</Label>
                        <Input
                            placeholder="e.g. New AI Payroll Features Available!"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Type</Label>
                        <Select value={type} onValueChange={(v) => setType(v as "info" | "alert" | "new_feature")}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="new_feature">New Feature (Blue)</SelectItem>
                                <SelectItem value="info">Info (Gray)</SelectItem>
                                <SelectItem value="alert">Alert (Red)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button onClick={() => handleSave(true)} disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Megaphone className="w-4 h-4 mr-2" />}
                        Update Ticker
                    </Button>
                    <Button variant="outline" className="ml-2" onClick={() => handleSave(false)} disabled={isSubmitting}>
                        Disable Ticker
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

function TestimonialManager() {
    const testimonials = useQuery(api.cms.getAllTestimonials);
    const createTestimonial = useMutation(api.cms.createTestimonial);
    const deleteTestimonial = useMutation(api.cms.deleteTestimonial);

    const [isCreating, setIsCreating] = useState(false);
    const [form, setForm] = useState({
        clientName: "",
        companyLogo: "",
        quote: "",
        role: "",
        isActive: true,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        try {
            await createTestimonial(form);
            setForm({ clientName: "", companyLogo: "", quote: "", role: "", isActive: true });
        } catch (error) {
            console.error("Failed to create testimonial", error);
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Testimonial</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Client Name</Label>
                                <Input
                                    value={form.clientName}
                                    onChange={e => setForm({ ...form, clientName: e.target.value })}
                                    required
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Role</Label>
                                <Input
                                    value={form.role}
                                    onChange={e => setForm({ ...form, role: e.target.value })}
                                    required
                                    placeholder="CEO @ Acne Inc"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Quote</Label>
                            <Input
                                value={form.quote}
                                onChange={e => setForm({ ...form, quote: e.target.value })}
                                required
                                placeholder="Pay-R changed our lives..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Company Logo</Label>
                            <ImageUpload
                                value={form.companyLogo}
                                onChange={(storageId) => setForm({ ...form, companyLogo: storageId })}
                                onRemove={() => setForm({ ...form, companyLogo: "" })}
                            />
                        </div>
                        <Button type="submit" disabled={isCreating} className="w-full">
                            {isCreating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4 mr-2" />}
                            Add Testimonial
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Existing Testimonials</h3>
                {!testimonials ? (
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
                ) : testimonials.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No testimonials added yet.</p>
                ) : (
                    testimonials.map((t) => (
                        <Card key={t._id} className="relative group">
                            <Button
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                                onClick={() => deleteTestimonial({ id: t._id })}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                                        {/* Ideally we'd load the image from storage ID here */}
                                        <Quote className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-sm italic mb-2">&quot;{t.quote}&quot;</p>
                                        <p className="text-sm font-bold">{t.clientName}</p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}

function BlogManager() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [category, setCategory] = useState("Product");

    const createPost = useMutation(api.cms.createBlogPost);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePublish = async (status: "draft" | "published") => {
        if (!title || !slug || !content) {
            alert("Please fill in all required fields (Title, Slug, Content)");
            return;
        }

        setIsSubmitting(true);
        try {
            await createPost({
                title,
                slug,
                content,
                category,
                coverImage: coverImage || undefined,
                status
            });
            alert(`Post ${status === "published" ? "published" : "saved as draft"} successfully!`);
            // Reset form
            setTitle("");
            setSlug("");
            setContent("");
            setCoverImage("");
        } catch (error) {
            console.error("Failed to save post:", error);
            alert("Failed to save post. See console for details.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create New Blog Post</CardTitle>
                <CardDescription>Write articles to boost SEO and Authority.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Post Title</Label>
                            <Input
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''));
                                }}
                                placeholder="e.g. 5 Ways to Automate Payroll"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Slug</Label>
                            <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="5-ways-to-automate-payroll" />
                        </div>
                        <div className="space-y-2">
                            <Label>Category</Label>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Product">Product Updates</SelectItem>
                                    <SelectItem value="Compliance">Compliance & Tax</SelectItem>
                                    <SelectItem value="Tips">HR Tips</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Cover Image</Label>
                        <ImageUpload
                            value={coverImage}
                            onChange={(id) => setCoverImage(id)}
                            onRemove={() => setCoverImage("")}
                            label="Upload Cover Image"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Content (Rich Text)</Label>
                    <RichTextEditor
                        value={content}
                        onChange={setContent}
                        className="min-h-[300px]"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => handlePublish("draft")} disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Save Draft
                    </Button>
                    <Button onClick={() => handlePublish("published")} disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Publish Post
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

function LeadsManager() {
    const leads = useQuery(api.submissions.getSubmissions);

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium">All Leads</h3>
            {!leads ? (
                <div className="flex justify-center py-4">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
            ) : leads.length === 0 ? (
                <p className="text-sm text-muted-foreground">No leads found.</p>
            ) : (
                <div className="rounded-md border">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 border-b">
                            <tr>
                                <th className="p-4 font-medium">Name</th>
                                <th className="p-4 font-medium">Email</th>
                                <th className="p-4 font-medium">Company</th>
                                <th className="p-4 font-medium">Date</th>
                                <th className="p-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead: Doc<"submissions">) => (
                                <tr key={lead._id} className="border-b last:border-0 hover:bg-muted/50">
                                    <td className="p-4 font-medium">{lead.name}</td>
                                    <td className="p-4 text-muted-foreground">{lead.email}</td>
                                    <td className="p-4 text-muted-foreground">{lead.company || "-"}</td>
                                    <td className="p-4 text-muted-foreground">
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${lead.status === 'new' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' : 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
                                            }`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
