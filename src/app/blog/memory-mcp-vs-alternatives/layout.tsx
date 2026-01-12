const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MCP Memory Servers Compared: memory-mcp vs Alternatives',
  description: 'Comprehensive comparison of MCP memory servers including memory-mcp, mem0, Basic Memory, and Obsidian MCP.',
  author: {
    '@type': 'Organization',
    name: 'Substratia',
    url: 'https://substratia.io',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Substratia',
    url: 'https://substratia.io',
  },
  datePublished: '2026-01-11',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://substratia.io/blog/memory-mcp-vs-alternatives',
  },
}

export default function MemoryMcpVsAlternativesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
