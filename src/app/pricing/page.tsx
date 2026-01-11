import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - PromptForge',
  description: 'Choose the right plan for your AI agent development needs. Free builder, premium templates, and Pro subscription.',
}

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with AI agents',
    features: [
      'Visual agent builder',
      '10 capability presets',
      '5 ruleset templates',
      'Export to .md files',
      'Basic AI assistant',
      'Community access',
    ],
    cta: 'Start Building',
    href: '/builder',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'Everything you need to build production-ready agents',
    features: [
      'Everything in Free',
      'All 20+ capability presets',
      'All 9+ ruleset templates',
      'Advanced AI assistant',
      'Premium template library',
      'Priority support',
      'Early access to new features',
      'Export to all formats',
    ],
    cta: 'Start Free Trial',
    href: '#',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams building AI at scale',
    features: [
      'Everything in Pro',
      'Custom agent development',
      'Consulting sessions',
      'Team training',
      'White-label options',
      'SLA support',
      'Dedicated success manager',
    ],
    cta: 'Contact Sales',
    href: 'mailto:hello@promptforge.io',
    featured: false,
  },
]

const templates = [
  {
    name: 'Loop Guardian System',
    price: 29,
    description: 'Prevent AI agents from getting stuck in repetitive loops',
    features: ['Anti-loop rules', 'Progress gates', 'Retry budgets', 'Escalation protocols'],
  },
  {
    name: 'Autonomous Ops Guide',
    price: 39,
    description: 'Run AI agents continuously without human intervention',
    features: ['Iteration framework', 'Self-analysis', 'Decision trees', 'Emergency procedures'],
  },
  {
    name: 'CEO/Overseer Framework',
    price: 49,
    description: 'Multi-agent orchestration for complex systems',
    features: ['Hierarchical architecture', 'Communication protocol', 'Performance metrics', 'Negative prompts'],
  },
  {
    name: 'Complete System Bundle',
    price: 199,
    description: 'Everything you need for end-to-end AI automation',
    features: ['All premium templates', 'Python source code', 'Documentation', 'Email support'],
    featured: true,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-forge-cyan">Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, upgrade when you need more power. All plans include our core agent builder.
          </p>
        </div>

        {/* Subscription Tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.featured
                  ? 'bg-gradient-to-b from-forge-purple/30 to-forge-dark border-2 border-forge-purple relative'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-forge-purple rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && <span className="text-gray-400">{tier.period}</span>}
              </div>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <Link
                href={tier.href}
                className={`block text-center py-3 rounded-lg font-semibold transition-all mb-8 ${
                  tier.featured
                    ? 'bg-forge-purple hover:bg-forge-purple/80'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-forge-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Premium Templates */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Premium <span className="text-forge-purple">Templates</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Battle-tested agent configurations from real production systems.
              Buy once, use forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {templates.map((template) => (
              <div
                key={template.name}
                className={`rounded-xl p-6 ${
                  template.featured
                    ? 'bg-gradient-to-b from-forge-cyan/20 to-forge-dark border-2 border-forge-cyan col-span-1 lg:col-span-2'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{template.name}</h3>
                  <span className="text-2xl font-bold text-forge-cyan">${template.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-forge-purple rounded-full"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/templates"
                  className={`block text-center py-2 rounded-lg font-medium transition-all ${
                    template.featured
                      ? 'bg-forge-cyan text-forge-dark hover:bg-forge-cyan/80'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {template.featured ? 'Get Bundle' : 'Learn More'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-forge-cyan">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is included in the free plan?',
                a: 'The free plan includes our visual agent builder with 10 capability presets, 5 ruleset templates, and the ability to export your configurations to .md files. Perfect for getting started.',
              },
              {
                q: 'Can I cancel my Pro subscription anytime?',
                a: 'Yes, you can cancel your Pro subscription at any time. Your access will continue until the end of your billing period.',
              },
              {
                q: 'Do templates include updates?',
                a: 'Yes! When you purchase a template, you get lifetime access including all future updates. We continuously improve our templates based on real-world usage.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards through Stripe. Enterprise customers can pay via invoice.',
              },
              {
                q: 'Is there a money-back guarantee?',
                a: 'Yes, we offer a 14-day money-back guarantee on all purchases. If you\'re not satisfied, contact us for a full refund.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-forge-purple/20 to-forge-cyan/20 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Powerful AI Agents?</h2>
          <p className="text-gray-400 mb-8">Start with our free builder and upgrade when you need more.</p>
          <Link
            href="/builder"
            className="inline-block px-8 py-4 bg-forge-purple hover:bg-forge-purple/80 rounded-lg font-semibold text-lg transition-all"
          >
            Start Building Free
          </Link>
        </div>
      </div>
    </main>
  )
}
