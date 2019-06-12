import React, { FunctionComponent } from 'react'
import { useField } from 'formik'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

const SearchTextInput: FunctionComponent<Props> = ({ label, error, errorMessage } : Props) => (
    <Container>
      {label && <Label error={error}>{label}</Label>}
      <Input placeholder="Required..." error={error} />
      {error ? <ErrorLabel error={error}>{errorMessage}</ErrorLabel> : null}
    </Container>
  )

export default SearchTextInput
