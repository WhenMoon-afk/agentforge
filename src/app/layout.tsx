import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'PromptForge - Build Powerful AI Agents',
  description: 'Create agents.md and CLAUDE.md files with our free drag-and-drop builder. Production-ready templates for Claude, GPT, and more.',
  keywords: 'AI agents, CLAUDE.md, agents.md, prompt engineering, Claude Code, AI templates',
  openGraph: {
    title: 'PromptForge - Build Powerful AI Agents',
    description: 'Create agents.md and CLAUDE.md files with our free drag-and-drop builder.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptForge - Build Powerful AI Agents',
    description: 'Create agents.md and CLAUDE.md files with our free drag-and-drop builder.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  )
}
