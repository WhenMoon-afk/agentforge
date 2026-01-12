# Substratia

**Memory infrastructure for AI** — Intelligence is substrate-agnostic.

## Live Site

[https://substratia.io](https://substratia.io)

## Features

### Memory Tools
- **momentum** - Fast context recovery (<5ms restore time)
- **memory-mcp** - Persistent memory across sessions
- **AgentForge** - Visual drag-and-drop builder for CLAUDE.md files

### Free Tools (12 total)
- **Claude Code Cheat Sheet** - Commands, shortcuts, CLAUDE.md patterns
- **Claude Code Cost Calculator** - Track session costs, compare pricing
- **Claude Code Prompt Optimizer** - Build prompts with thinking modes
- **Stack Builder** - Full-stack tech selector with compatibility checks
- **Token Counter** - Estimate costs for Claude, GPT-4, and other models
- **Prompt Library** - 20 curated prompts for productivity
- **Seed Maker** - High-entropy random string generator
- **Image Prompt Generator** - Visual builder for AI image prompts
- **Video Prompt Timeline** - Frame-by-frame video storyboard
- **Markdown Preview** - Live dual-panel markdown editor
- **Markdown Stripper** - Remove all markdown formatting

### Reviews
- AI Coding Assistants (Claude Code, Cursor, Copilot, Codeium, Windsurf)
- AI Image Generators (Midjourney, DALL-E 3, Stable Diffusion, Grok, Flux)
- AI Video Generators (Runway, Pika, Luma, Kling, Grok)
- Markdown Editors (Obsidian, Notion, Typora, VS Code, iA Writer)

### Blog
11 posts including original research on AI behavior:
- The Eleanor Chen Effect (AI creativity convergence)
- Mirror Demons (AI delusion amplification)
- Context Management Guide (featured)
- Technical architecture deep-dives

### Consulting
Expert Claude Code setup, training, and advisory services.

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 14 (App Router, Static Export)
- TypeScript
- Tailwind CSS 3.4
- @dnd-kit (drag and drop)
- Bun (package manager and runtime)
- Cloudflare Pages (hosting)

## Deployment

Push to master → Cloudflare Pages auto-deploys in ~90s

```bash
git add -A && git commit -m "feat: description" && git push origin master
```

## Related Projects

| Project | Description | Repo |
|---------|-------------|------|
| momentum | Context recovery plugin | [GitHub](https://github.com/WhenMoon-afk/momentum) |
| memory-mcp | Persistent memory MCP | [GitHub](https://github.com/WhenMoon-afk/claude-memory-mcp) |
| substratia-marketplace | Plugin distribution | [GitHub](https://github.com/WhenMoon-afk/substratia-marketplace) |

## License

MIT
