'use client'

import { ReactNode } from 'react'
import ToolErrorBoundary from './ToolErrorBoundary'

interface Props {
  children: ReactNode
}

export default function ToolsClientWrapper({ children }: Props) {
  return <ToolErrorBoundary>{children}</ToolErrorBoundary>
}
