"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { Button } from "@/components/ui/button";
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
    value: string;
    onChange: (content: string) => void;
    className?: string;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="border border-input rounded-t-md p-2 flex flex-wrap gap-1 bg-muted/20">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={cn(editor.isActive("bold") ? "bg-muted text-foreground" : "text-muted-foreground")}
            >
                <Bold className="w-4 h-4" />
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={cn(editor.isActive("italic") ? "bg-muted text-foreground" : "text-muted-foreground")}
            >
                <Italic className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center" />
            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={cn(editor.isActive("heading", { level: 2 }) ? "bg-muted text-foreground" : "text-muted-foreground")}
            >
                <Heading1 className="w-4 h-4" />
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={cn(editor.isActive("heading", { level: 3 }) ? "bg-muted text-foreground" : "text-muted-foreground")}
            >
                <Heading2 className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center" />
            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={cn(editor.isActive("bulletList") ? "bg-muted text-foreground" : "text-muted-foreground")}
            >
                <List className="w-4 h-4" />
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={cn(editor.isActive("orderedList") ? "bg-muted text-foreground" : "text-muted-foreground")}
            >
                <ListOrdered className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center" />
            <Button
                variant="ghost"
                size="sm"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={cn(editor.isActive("blockquote") ? "bg-muted text-foreground" : "text-muted-foreground")}
            >
                <Quote className="w-4 h-4" />
            </Button>
        </div>
    );
};

export function RichTextEditor({ value, onChange, className }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: "prose prose-sm dark:prose-invert max-w-none focus:outline-none min-h-[200px] p-4",
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className={cn("border border-input rounded-md overflow-hidden", className)}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className="bg-background" />
        </div>
    );
}
