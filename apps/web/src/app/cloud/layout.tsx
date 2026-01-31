import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Substratia - Open Source Developer Tools for Claude Code',
  description: 'Free, open source developer tools for Claude Code. memory-mcp, momentum, and more. All MIT licensed.',
  openGraph: {
    title: 'Substratia - Open Source Developer Tools',
    description: 'Free, open source developer tools for Claude Code. Built by developers, for developers.',
    type: 'website',
    url: 'https://substratia.io/tools',
  },
}

export default function CloudLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
