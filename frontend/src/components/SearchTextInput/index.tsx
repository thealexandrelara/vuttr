import React, { FunctionComponent } from 'react'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

const SearchTextInput: FunctionComponent<Props> = ({
 placeholder, label, error, errorMessage, onChange, value, searchInputRef, className, style,
} : Props) => (
  <Container className={className} style={style}>
    {label && <Label error={error}>{label}</Label>}
    <Input ref={searchInputRef} placeholder={placeholder} error={error} onChange={onChange} />
    {error ? <ErrorLabel error={error}>{errorMessage}</ErrorLabel> : null}
  </Container>
  )

export default SearchTextInput
