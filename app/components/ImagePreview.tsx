'use client';

import { useState } from 'react';
import { Download, Share2, RefreshCw, Loader2 } from 'lucide-react';

interface ImagePreviewProps {
  originalImage: string;
  processedImage: string | null;
  isProcessing: boolean;
  onReset: () => void;
}

export function ImagePreview({ 
  originalImage, 
  processedImage, 
  isProcessing,
  onReset 
}: ImagePreviewProps) {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Preview Card */}
      <div className="bg-surface rounded-lg p-8 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-fg">
            {isProcessing ? 'Processing...' : 'Result'}
          </h2>
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="text-sm text-primary hover:text-accent transition-colors duration-200"
          >
            {showComparison ? 'Hide' : 'Show'} Original
          </button>
        </div>

        <div className="relative aspect-video bg-bg rounded-lg overflow-hidden">
          {isProcessing ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
                <p className="text-muted">Removing background...</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-full">
              {showComparison && (
                <div className="relative rounded-lg overflow-hidden bg-white/5">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2 left-2 px-3 py-1 bg-surface/90 rounded-md text-xs font-medium text-fg">
                    Original
                  </div>
                </div>
              )}
              
              <div className={`relative rounded-lg overflow-hidden ${showComparison ? '' : 'md:col-span-2'}`}>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#132f4c_25%,transparent_25%,transparent_75%,#132f4c_75%,#132f4c),linear-gradient(45deg,#132f4c_25%,transparent_25%,transparent_75%,#132f4c_75%,#132f4c)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
                {processedImage && (
                  <img
                    src={processedImage}
                    alt="Processed"
                    className="relative w-full h-full object-contain"
                  />
                )}
                <div className="absolute top-2 left-2 px-3 py-1 bg-primary/90 rounded-md text-xs font-medium text-white">
                  Background Removed
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {!isProcessing && processedImage && (
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-accent text-white rounded-md font-medium transition-colors duration-200 shadow-button">
            <Download className="w-5 h-5" />
            Download PNG
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface/80 text-fg rounded-md font-medium transition-colors duration-200 border border-primary/20">
            <Share2 className="w-5 h-5" />
            Share to Feed
          </button>
          
          <button 
            onClick={onReset}
            className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface/80 text-fg rounded-md font-medium transition-colors duration-200 border border-surface"
          >
            <RefreshCw className="w-5 h-5" />
            New Image
          </button>
        </div>
      )}

      {/* Premium Features Teaser */}
      {!isProcessing && processedImage && (
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-fg mb-2">
                Unlock Premium Features
              </h3>
              <p className="text-sm text-muted mb-4">
                Get high-resolution exports, batch processing, and advanced editing tools
              </p>
              <button className="px-4 py-2 bg-primary hover:bg-accent text-white rounded-md text-sm font-medium transition-colors duration-200">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
