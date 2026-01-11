import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seed Maker - High-Entropy Random String Generator | Substratia',
  description: 'Generate cryptographically strong random strings from mouse movements. 100% client-side, no data leaves your browser. Perfect for seeds, passwords, and API keys.',
  keywords: 'random string generator, entropy generator, password generator, seed generator, cryptographic random, secure random, client-side generator',
  openGraph: {
    title: 'Seed Maker - High-Entropy Random Generator',
    description: 'Generate cryptographically strong random strings from mouse movements. 100% client-side, private.',
    type: 'website',
    url: 'https://substratia.io/tools/seed-maker',
  },
}

export default function SeedMakerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
