import React, { FunctionComponent } from 'react'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

const TextAreaInput: FunctionComponent<Props> = ({ label, error, errorMessage } : Props) => (
  <Container>
    {label && <Label error={error}>{label}</Label>}
    <Input placeholder="Required..." error={error} />
    {error && <ErrorLabel error={error}>{errorMessage}</ErrorLabel>}
  </Container>
)

export default TextAreaInput
