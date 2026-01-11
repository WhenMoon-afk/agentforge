import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompt Library - 20 Curated AI Prompts | Substratia',
  description: 'Free prompt library with 20 battle-tested prompts for communication, creativity, productivity, and business. Click to copy. Works with Claude, GPT-4, and other AI models.',
  keywords: 'AI prompts, Claude prompts, GPT prompts, prompt library, prompt templates, AI productivity, prompt engineering',
  openGraph: {
    title: 'Free Prompt Library - 20 Curated AI Prompts',
    description: 'Battle-tested prompts for communication, creativity, and productivity. Click to copy. Works with any AI.',
    type: 'website',
    url: 'https://substratia.io/tools/prompts',
  },
}

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
