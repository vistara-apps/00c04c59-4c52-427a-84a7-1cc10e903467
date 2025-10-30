'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Upload, Sparkles, Image as ImageIcon, Zap } from 'lucide-react';
import { ImageUploadZone } from './components/ImageUploadZone';
import { ImagePreview } from './components/ImagePreview';
import { Header } from './components/Header';
import { FeatureCard } from './components/FeatureCard';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setMounted(true);
  }, []);

  const handleImageUpload = async (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setIsProcessing(true);

    // Simulate background removal processing
    setTimeout(() => {
      setProcessedImage(imageUrl);
      setIsProcessing(false);
    }, 2000);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="animate-pulse text-fg">Loading DeFractor...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-fg mb-4">
            Clear your background
            <br />
            <span className="text-primary">remove background.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Leave drop zone for your image in the transparent background.
          </p>
        </div>

        {/* Main Content */}
        {!uploadedImage ? (
          <div className="max-w-3xl mx-auto">
            <ImageUploadZone onImageUpload={handleImageUpload} />
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Instant Processing"
                description="Remove backgrounds in seconds with AI-powered technology"
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="High Quality"
                description="Professional results with precise edge detection"
              />
              <FeatureCard
                icon={<ImageIcon className="w-6 h-6" />}
                title="Save Onchain"
                description="Store your assets as NFTs on Base blockchain"
              />
            </div>
          </div>
        ) : (
          <ImagePreview
            originalImage={uploadedImage}
            processedImage={processedImage}
            isProcessing={isProcessing}
            onReset={() => {
              setUploadedImage(null);
              setProcessedImage(null);
            }}
          />
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface rounded-lg border border-primary/20">
            <Upload className="w-5 h-5 text-primary" />
            <span className="text-fg">Upload is your images allowground.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
