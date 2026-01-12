const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AGENTS.md vs CLAUDE.md: Complete Guide to AI Agent Configuration',
  description: 'Learn the differences between AGENTS.md and CLAUDE.md files, when to use each, and best practices for configuring AI coding agents.',
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
    '@id': 'https://substratia.io/blog/agents-md-vs-claude-md',
  },
}

export default function AgentsMdVsClaudeMdLayout({
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
