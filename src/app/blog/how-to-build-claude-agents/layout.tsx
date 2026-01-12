const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Build Claude Agents: A Practical Guide',
  description: 'Step-by-step guide to building effective Claude Code agents with CLAUDE.md configuration.',
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
    '@id': 'https://substratia.io/blog/how-to-build-claude-agents',
  },
}

export default function HowToBuildClaudeAgentsLayout({
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
