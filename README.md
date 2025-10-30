# DeFractor - Background Removal Mini App

Instantly remove image backgrounds onchain, right from Farcaster.

## Features

- 🎨 Instant background removal with AI
- 🔗 Onchain asset storage as NFTs
- 💎 Premium features with gasless transactions
- 🏆 Community remix challenges
- 📱 Mobile-first responsive design
- 🎯 Farcaster Mini App integration

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

3. Add your API keys to `.env.local`:
   - Get OnchainKit API key from https://portal.cdp.coinbase.com/
   - Add background removal API key (e.g., from remove.bg)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Manifest

The Farcaster manifest is located at `public/.well-known/farcaster.json`

## License

MIT
