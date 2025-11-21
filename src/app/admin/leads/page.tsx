import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Search, Download, MoreHorizontal } from "lucide-react";

const mockLeads = [
    { id: 1, name: "John Doe", email: "john@example.com", company: "Acme Inc", status: "New", date: "2024-11-20" },
    { id: 2, name: "Jane Smith", email: "jane@tech.com", company: "Tech Corp", status: "Contacted", date: "2024-11-19" },
    { id: 3, name: "Bob Wilson", email: "bob@global.com", company: "Global Ltd", status: "Qualified", date: "2024-11-18" },
    { id: 4, name: "Alice Brown", email: "alice@startup.io", company: "Startup IO", status: "Proposal", date: "2024-11-17" },
    { id: 5, name: "Charlie Davis", email: "charlie@enterprise.com", company: "Enterprise Co", status: "Closed", date: "2024-11-16" },
];

export default function LeadsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Leads</h1>
                    <p className="text-muted-foreground">Manage and track your potential customers.</p>
                </div>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search leads..." className="pl-10 bg-white" />
                </div>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockLeads.map((lead) => (
                            <TableRow key={lead.id}>
                                <TableCell className="font-medium">{lead.name}</TableCell>
                                <TableCell>{lead.email}</TableCell>
                                <TableCell>{lead.company}</TableCell>
                                <TableCell>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                                            lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                                                lead.status === 'Qualified' ? 'bg-purple-100 text-purple-800' :
                                                    lead.status === 'Proposal' ? 'bg-orange-100 text-orange-800' :
                                                        'bg-green-100 text-green-800'
                                        }`}>
                                        {lead.status}
                                    </span>
                                </TableCell>
                                <TableCell>{lead.date}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
