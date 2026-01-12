'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'

interface FAQItem {
  id: string
  question: string
  answer: string | React.ReactNode
  answerText: string  // Plain text version for copying
  category: 'general' | 'tools' | 'consulting' | 'technical'
}

const faqs: FAQItem[] = [
  // General
  {
    id: 'what-is-claude-code',
    category: 'general',
    question: 'What is Claude Code?',
    answer: 'Claude Code is Anthropic\'s official CLI tool for AI-assisted software development. It allows developers to interact with Claude directly from the terminal to write, edit, and debug code. It\'s available with Claude Pro ($20/mo) and Claude Max ($100-200/mo) subscriptions.',
    answerText: 'Claude Code is Anthropic\'s official CLI tool for AI-assisted software development. It allows developers to interact with Claude directly from the terminal to write, edit, and debug code. It\'s available with Claude Pro ($20/mo) and Claude Max ($100-200/mo) subscriptions.',
  },
  {
    id: 'what-is-substratia',
    category: 'general',
    question: 'What is Substratia?',
    answer: 'Substratia is a collection of free, open-source tools for Claude Code and AI memory management. We also offer consulting services to help individuals and teams get the most out of Claude Code.',
    answerText: 'Substratia is a collection of free, open-source tools for Claude Code and AI memory management. We also offer consulting services to help individuals and teams get the most out of Claude Code.',
  },
  {
    id: 'are-tools-free',
    category: 'general',
    question: 'Are these tools free?',
    answer: 'Yes, all tools are completely free and open source under the MIT license. This includes momentum, memory-mcp, and all web tools at substratia.io/tools. They will remain free forever.',
    answerText: 'Yes, all tools are completely free and open source under the MIT license. This includes momentum, memory-mcp, and all web tools at substratia.io/tools. They will remain free forever.',
  },
  // Tools
  {
    id: 'what-is-momentum',
    category: 'tools',
    question: 'What is momentum?',
    answer: (
      <span>
        momentum is a Claude Code plugin for fast context recovery. It takes snapshots of your working state and can restore them in under 5 milliseconds after using /clear. Install with: <code className="bg-white/10 px-2 py-0.5 rounded text-sm">/plugin install momentum@substratia-marketplace</code>
      </span>
    ),
    answerText: 'momentum is a Claude Code plugin for fast context recovery. It takes snapshots of your working state and can restore them in under 5 milliseconds after using /clear. Install with: /plugin install momentum@substratia-marketplace',
  },
  {
    id: 'what-is-memory-mcp',
    category: 'tools',
    question: 'What is memory-mcp?',
    answer: (
      <span>
        memory-mcp is an MCP server that gives Claude persistent memory across sessions. Claude can store facts, recall information, and search memories using natural language. It uses SQLite with FTS5 full-text search. Install with: <code className="bg-white/10 px-2 py-0.5 rounded text-sm">npx @whenmoon-afk/memory-mcp</code>
      </span>
    ),
    answerText: 'memory-mcp is an MCP server that gives Claude persistent memory across sessions. Claude can store facts, recall information, and search memories using natural language. It uses SQLite with FTS5 full-text search. Install with: npx @whenmoon-afk/memory-mcp',
  },
  {
    id: 'momentum-vs-memory-mcp',
    category: 'tools',
    question: 'What\'s the difference between momentum and memory-mcp?',
    answer: 'momentum is for short-term context recovery within sessions (snapshot your work, restore after /clear). memory-mcp is for long-term persistent memory across sessions (store facts, recall them tomorrow). They work together as complementary tools.',
    answerText: 'momentum is for short-term context recovery within sessions (snapshot your work, restore after /clear). memory-mcp is for long-term persistent memory across sessions (store facts, recall them tomorrow). They work together as complementary tools.',
  },
  {
    id: 'need-both-tools',
    category: 'tools',
    question: 'Do I need both momentum and memory-mcp?',
    answer: 'No, they serve different purposes. Use momentum if you want fast context recovery within sessions. Use memory-mcp if you want Claude to remember facts across sessions. Many users find value in both.',
    answerText: 'No, they serve different purposes. Use momentum if you want fast context recovery within sessions. Use memory-mcp if you want Claude to remember facts across sessions. Many users find value in both.',
  },
  {
    id: 'where-is-data-stored',
    category: 'tools',
    question: 'Where is my data stored?',
    answer: 'All data is stored locally on your machine in SQLite databases. momentum stores snapshots in ~/.local/share/momentum/ (Linux/macOS) or %LOCALAPPDATA%/momentum (Windows). memory-mcp stores memories in a similar location. Nothing is sent to the cloud.',
    answerText: 'All data is stored locally on your machine in SQLite databases. momentum stores snapshots in ~/.local/share/momentum/ (Linux/macOS) or %LOCALAPPDATA%/momentum (Windows). memory-mcp stores memories in a similar location. Nothing is sent to the cloud.',
  },
  // Consulting
  {
    id: 'offer-consulting',
    category: 'consulting',
    question: 'Do you offer consulting?',
    answer: (
      <span>
        Yes! We offer Claude Code consulting services including setup sessions, team workshops, and ongoing advisory. <Link href="/consulting" className="text-forge-cyan hover:underline">View all services and pricing →</Link>
      </span>
    ),
    answerText: 'Yes! We offer Claude Code consulting services including setup sessions, team workshops, and ongoing advisory. View all services and pricing at substratia.io/consulting',
  },
  {
    id: 'setup-session-included',
    category: 'consulting',
    question: 'What\'s included in a Setup Session?',
    answer: 'A 1.5-hour hands-on session where we configure Claude Code for your specific needs. You\'ll leave with a working setup including a custom CLAUDE.md file, MCP tools configured, and best practices guidance. Price: $200.',
    answerText: 'A 1.5-hour hands-on session where we configure Claude Code for your specific needs. You\'ll leave with a working setup including a custom CLAUDE.md file, MCP tools configured, and best practices guidance. Price: $200.',
  },
  {
    id: 'team-training',
    category: 'consulting',
    question: 'Can you train my team?',
    answer: 'Yes! The Team Workshop is a half-day training for 5-15 developers covering Claude Code fundamentals, team-specific workflows, and hands-on exercises. Price: $1,500. For larger teams or full-day training, contact us.',
    answerText: 'Yes! The Team Workshop is a half-day training for 5-15 developers covering Claude Code fundamentals, team-specific workflows, and hands-on exercises. Price: $1,500. For larger teams or full-day training, contact us.',
  },
  {
    id: 'ongoing-support',
    category: 'consulting',
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we have three advisory tiers: Light ($500/mo, 2 hrs), Standard ($1,200/mo, 5 hrs + weekly calls), and Premium ($2,500/mo, 10 hrs + on-call support). These include email support, async questions, and regular check-ins.',
    answerText: 'Yes, we have three advisory tiers: Light ($500/mo, 2 hrs), Standard ($1,200/mo, 5 hrs + weekly calls), and Premium ($2,500/mo, 10 hrs + on-call support). These include email support, async questions, and regular check-ins.',
  },
  {
    id: 'how-to-book',
    category: 'consulting',
    question: 'How do I book a session?',
    answer: (
      <span>
        Fill out the contact form on the <Link href="/consulting#contact" className="text-forge-cyan hover:underline">consulting page</Link>. I&apos;ll respond within 24 hours to discuss your needs and schedule a time.
      </span>
    ),
    answerText: 'Fill out the contact form on the consulting page. I\'ll respond within 24 hours to discuss your needs and schedule a time.',
  },
  // Technical
  {
    id: 'context-window',
    category: 'technical',
    question: 'What is a context window?',
    answer: 'The context window is Claude\'s working memory during a conversation—approximately 200,000 tokens. Everything you say, files Claude reads, and Claude\'s responses consume context. When it fills up, Claude compacts (summarizes) the conversation, which can lose details.',
    answerText: 'The context window is Claude\'s working memory during a conversation—approximately 200,000 tokens. Everything you say, files Claude reads, and Claude\'s responses consume context. When it fills up, Claude compacts (summarizes) the conversation, which can lose details.',
  },
  {
    id: 'what-is-compaction',
    category: 'technical',
    question: 'What is compaction?',
    answer: 'When the context window fills up, Claude Code automatically summarizes the conversation to free up space. This is called compaction. It\'s lossy—details get dropped. Tools like momentum help preserve context across compaction events.',
    answerText: 'When the context window fills up, Claude Code automatically summarizes the conversation to free up space. This is called compaction. It\'s lossy—details get dropped. Tools like momentum help preserve context across compaction events.',
  },
  {
    id: 'what-is-claude-md',
    category: 'technical',
    question: 'What is CLAUDE.md?',
    answer: 'CLAUDE.md is a configuration file in your project root that gives Claude context about your project. It survives compaction and is read at the start of every session. Include project overview, coding standards, key directories, and a "Do NOT" section for constraints.',
    answerText: 'CLAUDE.md is a configuration file in your project root that gives Claude context about your project. It survives compaction and is read at the start of every session. Include project overview, coding standards, key directories, and a "Do NOT" section for constraints.',
  },
  {
    id: 'what-is-mcp',
    category: 'technical',
    question: 'What is MCP?',
    answer: 'MCP (Model Context Protocol) is a standard for connecting AI assistants to external tools and data sources. MCP servers like memory-mcp add capabilities to Claude Code. They\'re configured in ~/.claude/claude_desktop_config.json.',
    answerText: 'MCP (Model Context Protocol) is a standard for connecting AI assistants to external tools and data sources. MCP servers like memory-mcp add capabilities to Claude Code. They\'re configured in ~/.claude/claude_desktop_config.json.',
  },
  {
    id: 'why-sqlite',
    category: 'technical',
    question: 'Why SQLite instead of a vector database?',
    answer: 'For most AI memory use cases, SQLite with FTS5 (full-text search) is sufficient and has major advantages: instant startup, zero dependencies, no API costs, works offline, and data stays on your machine. Vector embeddings add complexity without proportional benefit for typical usage.',
    answerText: 'For most AI memory use cases, SQLite with FTS5 (full-text search) is sufficient and has major advantages: instant startup, zero dependencies, no API costs, works offline, and data stays on your machine. Vector embeddings add complexity without proportional benefit for typical usage.',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'tools', label: 'Tools' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'technical', label: 'Technical' },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [sharedId, setSharedId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Handle URL hash navigation on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash.slice(1)
    if (hash) {
      const faq = faqs.find(f => f.id === hash)
      if (faq) {
        setOpenItems(new Set([hash]))
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [])

  const shareFaq = useCallback(async (faq: FAQItem) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#${faq.id}`
    await navigator.clipboard.writeText(shareUrl)
    setSharedId(faq.id)
    setTimeout(() => setSharedId(null), 2000)
  }, [])

  const copyAnswer = useCallback(async (faq: FAQItem) => {
    await navigator.clipboard.writeText(`Q: ${faq.question}\nA: ${faq.answerText}`)
    setCopiedId(faq.id)
    setTimeout(() => setCopiedId(null), 2000)
  }, [])

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory)

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <main className="min-h-screen text-white relative">
      <div className="neural-bg" />
      <div className="fixed inset-0 gradient-mesh pointer-events-none z-0" />

      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="text-forge-cyan hover:underline text-sm">
                ← Back to Home
              </Link>
              <ShareButton title="FAQ - Substratia" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Frequently Asked <span className="text-forge-cyan">Questions</span>
            </h1>
            <p className="text-gray-400 text-center mb-12">
              Everything you need to know about Claude Code, our tools, and consulting services.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeCategory === cat.id
                      ? 'bg-forge-cyan text-forge-dark font-semibold'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} id={faq.id} className="glass rounded-xl overflow-hidden scroll-mt-24">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        openItems.has(faq.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openItems.has(faq.id) && (
                    <div className="px-6 pb-4">
                      <div className="text-gray-300 mb-3">
                        {faq.answer}
                      </div>
                      <div className="flex gap-2 pt-2 border-t border-white/10">
                        <button
                          onClick={(e) => { e.stopPropagation(); copyAnswer(faq) }}
                          className={`px-3 py-1 text-xs rounded-lg transition-all ${
                            copiedId === faq.id
                              ? 'bg-green-500 text-white'
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                        >
                          {copiedId === faq.id ? 'Copied!' : 'Copy'}
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); shareFaq(faq) }}
                          className={`px-3 py-1 text-xs rounded-lg transition-all ${
                            sharedId === faq.id
                              ? 'bg-green-500 text-white'
                              : 'bg-forge-cyan/20 hover:bg-forge-cyan/30 text-forge-cyan'
                          }`}
                        >
                          {sharedId === faq.id ? 'Link Copied!' : 'Share'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Related Resources */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <h2 className="text-2xl font-bold text-center mb-8">Explore More</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/tools/cheat-sheet" className="glass rounded-xl p-6 hover:border-forge-cyan/50 transition-all text-center">
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="font-semibold mb-2">Cheat Sheet</h3>
                  <p className="text-sm text-gray-400">Commands, shortcuts, patterns</p>
                </Link>
                <Link href="/blog/context-management-guide" className="glass rounded-xl p-6 hover:border-forge-cyan/50 transition-all text-center">
                  <div className="text-3xl mb-3">📖</div>
                  <h3 className="font-semibold mb-2">Context Guide</h3>
                  <p className="text-sm text-gray-400">Deep dive on context management</p>
                </Link>
                <Link href="/tools" className="glass rounded-xl p-6 hover:border-forge-cyan/50 transition-all text-center">
                  <div className="text-3xl mb-3">🛠️</div>
                  <h3 className="font-semibold mb-2">Free Tools</h3>
                  <p className="text-sm text-gray-400">12 tools, no signup required</p>
                </Link>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-400 mb-6">
                Can&apos;t find what you&apos;re looking for? Get in touch.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/consulting#contact"
                  className="px-6 py-3 bg-forge-cyan text-forge-dark font-semibold rounded-xl hover:bg-forge-cyan/90 transition-all"
                >
                  Contact Us
                </Link>
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-all"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
