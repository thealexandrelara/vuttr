import React from 'react'

interface OwnProps {
  label?: string,
  value?: string,
  errorMessage?: string,
  error?: boolean,
  placeholder?: string,
  searchInputRef: React.MutableRefObject<any>,
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export type Props = OwnProps
