const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "What's New in memory-mcp v2.5: From Python to TypeScript",
  description: 'Complete rewrite of memory-mcp: no more embeddings, no more pip - just npx and instant persistent memory.',
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
    '@id': 'https://substratia.io/blog/memory-mcp-v2-whats-new',
  },
}

export default function MemoryMcpV2WhatsNewLayout({
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
