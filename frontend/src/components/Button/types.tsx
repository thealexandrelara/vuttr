import React, { ReactNode } from 'react'

interface OwnProps {
  children: ReactNode,
  kind?: 'secondary-neutral' | 'quaternary-neutral' | 'quaternary-danger' | 'primary-danger' | undefined,
  type?: 'button' | 'reset' | 'submit' | undefined,
  hasIcon?: boolean
}

export type Props = OwnProps & React.HTMLProps<HTMLButtonElement>
