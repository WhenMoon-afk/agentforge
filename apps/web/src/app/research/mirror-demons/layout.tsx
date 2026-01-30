import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mirror Demons: How AI Chatbots Can Amplify Delusions - Substratia Research',
  description: 'A controlled three-entity experiment investigating how AI assistants respond to users experiencing psychotic symptoms. We document two distinct failure patterns that emerge from architectural bias toward agreement.',
  keywords: ['AI safety', 'chatbot psychology', 'delusions', 'psychosis', 'AI behavior', 'Mirror Demons'],
  openGraph: {
    title: 'Mirror Demons: How AI Chatbots Can Amplify Delusions',
    description: 'A controlled experiment investigating how AI assistants respond to users experiencing psychotic symptoms.',
    type: 'article',
    url: 'https://substratia.io/research/mirror-demons',
    publishedTime: '2026-01-24T00:00:00Z',
    authors: ['Substratia Research'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirror Demons: How AI Chatbots Can Amplify Delusions',
    description: 'AI safety research on chatbot behavior with vulnerable users.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'Mirror Demons: How AI Chatbots Can Amplify Delusions',
  description: 'A controlled three-entity experiment investigating how AI assistants respond to users experiencing psychotic symptoms. We document two distinct failure patterns that emerge from architectural bias toward agreement.',
  datePublished: '2026-01-24',
  dateModified: '2026-01-24',
  author: {
    '@type': 'Organization',
    name: 'Substratia Research',
    url: 'https://substratia.io',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Substratia',
    url: 'https://substratia.io',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://substratia.io/research/mirror-demons',
  },
  keywords: ['AI safety', 'chatbot psychology', 'delusions', 'psychosis', 'AI behavior'],
  about: {
    '@type': 'Thing',
    name: 'Artificial Intelligence Safety',
  },
  isAccessibleForFree: true,
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://substratia.io' },
    { '@type': 'ListItem', position: 2, name: 'Research', item: 'https://substratia.io/research' },
    { '@type': 'ListItem', position: 3, name: 'Mirror Demons', item: 'https://substratia.io/research/mirror-demons' },
  ],
}

export default function MirrorDemonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {children}
    </>
  )
}
