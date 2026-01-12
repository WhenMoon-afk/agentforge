import TemplatesClient from './TemplatesClient'

export const metadata = {
  title: 'Memory Tools - Substratia | momentum, memory-mcp, AgentForge',
  description: 'Free, open-source memory tools for AI assistants. momentum for context recovery, memory-mcp for persistent memory, AgentForge for visual config building.',
  keywords: 'AI memory tools, momentum, memory-mcp, AgentForge, Claude memory, AI context management, persistent memory',
}

export default function TemplatesPage() {
  return <TemplatesClient />
}
