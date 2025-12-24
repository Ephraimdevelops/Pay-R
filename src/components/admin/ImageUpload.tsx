"use client";

import { useState, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Loader2, Upload, X } from "lucide-react";

interface ImageUploadProps {
    value?: string;
    onChange: (storageId: string) => void;
    onRemove: () => void;
    label?: string;
    className?: string;
}

export function ImageUpload({ value, onChange, onRemove, label = "Upload Image", className }: ImageUploadProps) {
    const generateUploadUrl = useMutation(api.cms.generateUploadUrl);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // If we have a value (storageId), we need to display the image.
    // However, since getting the URL requires a query and we are inside a form component,
    // we assume the parent might pass the URL or we optimistically show a generic "File Uploaded" state
    // For a better UX, we'd ideally fetch the URL here, but let's keep it simple for v1.
    // Actually, let's use the URL logic if it was passed as a prop,
    // but typically `value` is storageId.
    // For now, we will just show a "File Selected" state if `value` exists, or maybe a preview URL if passed.

    // Better approach: If value is present, show a "Remove" button and the ID.

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        try {
            // 1. Get upload URL
            const postUrl = await generateUploadUrl();

            // 2. Upload file
            const result = await fetch(postUrl, {
                method: "POST",
                headers: { "Content-Type": file.type },
                body: file,
            });

            if (!result.ok) {
                throw new Error(`Upload failed: ${result.statusText}`);
            }

            const { storageId } = await result.json();

            // 3. Callback
            onChange(storageId);
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to upload image. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className={className}>
            {value ? (
                <div className="relative w-full h-40 bg-muted/30 rounded-lg border border-border flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                        {/* In a real app we'd fetch the URL using the storageId to preview it */}
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Upload className="w-6 h-6" />
                        </div>
                        <div className="text-sm font-medium truncate max-w-[200px] text-muted-foreground">
                            Image Uploaded
                        </div>
                        <div className="text-xs text-muted-foreground/60 font-mono">
                            ID: {value.substring(0, 10)}...
                        </div>
                    </div>
                    <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8 rounded-full"
                        onClick={onRemove}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            ) : (
                <div
                    className="w-full h-40 border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-muted/30 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                >
                    {isUploading ? (
                        <div className="flex flex-col items-center space-y-2">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            <span className="text-sm text-muted-foreground">Uploading...</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center space-y-2">
                            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                <Upload className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">{label}</div>
                            <div className="text-xs text-muted-foreground/60">Recommend: JPG, PNG (Max 5MB)</div>
                        </div>
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileSelect}
                        disabled={isUploading}
                    />
                </div>
            )}
        </div>
    );
}
