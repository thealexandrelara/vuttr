import React, { ReactElement } from 'react'

interface OwnProps {
  label?: string,
  value?: string,
  errorMessage?: string,
  error?: boolean,
  placeholder?: string,
  className?: string,
  style?: {},
  searchInputRef: React.MutableRefObject<any>,
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export type Props = OwnProps
