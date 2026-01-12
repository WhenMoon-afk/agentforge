const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mastering Negative Prompts for AI',
  description: 'Learn how to use negative prompts effectively to improve AI output quality and avoid common pitfalls.',
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
    '@id': 'https://substratia.io/blog/mastering-negative-prompts',
  },
}

export default function MasteringNegativePromptsLayout({
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
