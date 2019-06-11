import { ReactNode } from 'react'

interface OwnProps {
  children: ReactNode,
  kind?: string,
  type?: 'button' | 'reset' | 'submit' | undefined,
}

export type Props = OwnProps
