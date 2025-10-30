'use client';

import { useState, useCallback } from 'react';
import { Upload, Link as LinkIcon } from 'lucide-react';

interface ImageUploadZoneProps {
  onImageUpload: (imageUrl: string) => void;
}

export function ImageUploadZone({ onImageUpload }: ImageUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpload(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpload(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleUrlSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      onImageUpload(imageUrl);
    }
  }, [imageUrl, onImageUpload]);

  return (
    <div className="space-y-6">
      {/* Drag and Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200
          ${isDragging 
            ? 'border-primary bg-primary/10' 
            : 'border-surface hover:border-primary/50 bg-surface/30'
          }
        `}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          
          <div>
            <p className="text-lg font-semibold text-fg mb-2">
              Drop your image here
            </p>
            <p className="text-sm text-muted">
              or click to browse from your device
            </p>
          </div>

          <button className="px-6 py-3 bg-primary hover:bg-accent text-white rounded-md font-medium transition-colors duration-200 shadow-button">
            remove background
          </button>
        </div>
      </div>

      {/* URL Input */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-surface"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-bg text-muted">or paste image URL</span>
        </div>
      </div>

      <form onSubmit={handleUrlSubmit} className="flex gap-3">
        <div className="flex-1 relative">
          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full pl-10 pr-4 py-3 bg-surface border border-surface rounded-md text-fg placeholder-muted focus:outline-none focus:border-primary transition-colors duration-200"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-primary hover:bg-accent text-white rounded-md font-medium transition-colors duration-200 shadow-button"
        >
          Process
        </button>
      </form>
    </div>
  );
}
