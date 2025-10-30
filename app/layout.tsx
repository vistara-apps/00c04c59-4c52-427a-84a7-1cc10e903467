import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeFractor - Remove Backgrounds Onchain',
  description: 'Instantly remove image backgrounds onchain, right from Farcaster.',
  openGraph: {
    title: 'DeFractor - Remove Backgrounds Onchain',
    description: 'Instantly remove image backgrounds onchain, right from Farcaster.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
