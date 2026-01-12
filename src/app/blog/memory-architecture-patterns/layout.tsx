const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Memory Architecture Patterns for AI Assistants',
  description: 'Explore different memory architecture patterns for building AI systems with persistent context.',
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
    '@id': 'https://substratia.io/blog/memory-architecture-patterns',
  },
}

export default function MemoryArchitecturePatternsLayout({
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
