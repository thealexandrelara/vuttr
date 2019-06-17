import React, { ReactNode } from 'react'

interface OwnProps {
  children: ReactNode,
  kind?: 'secondary-neutral' | 'quaternary-danger' | 'primary-danger' | undefined,
  type?: 'button' | 'reset' | 'submit' | undefined,
}

export type Props = OwnProps & React.HTMLProps<HTMLButtonElement>
