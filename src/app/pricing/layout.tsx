import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Substratia',
  description: 'Free open-source memory tools. Pro tier with cloud sync, dashboard, and team features starting at $15/month.',
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
