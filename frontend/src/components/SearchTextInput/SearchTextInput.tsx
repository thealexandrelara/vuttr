import React, { FunctionComponent } from 'react'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

export const SearchTextInput: FunctionComponent<Props> = ({
 placeholder, label, error, errorMessage, onChange, value, searchInputRef, className, style,
} : Props) => (
  <Container className={className} style={style}>
    {label && <Label data-testid="seach-text-input-label" error={error}>{label}</Label>}
    <Input data-testid="seach-text-input" ref={searchInputRef} placeholder={placeholder} error={error} onChange={onChange} />
    {error ? <ErrorLabel data-testid="seach-text-input-error-label" error={error}>{errorMessage}</ErrorLabel> : null}
  </Container>
  )

export default SearchTextInput
