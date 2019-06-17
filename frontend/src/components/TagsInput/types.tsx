import { ReactElement } from 'react'

interface OwnProps {
  name: string,
  label?: string,
  errorMessage?: string,
  error?: boolean,
  onChange(value: unknown): void,
}

export type Props = OwnProps
