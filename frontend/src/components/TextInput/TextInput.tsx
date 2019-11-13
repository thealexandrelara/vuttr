import React, { FunctionComponent } from 'react'
import { useField } from 'formik'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

export const TextInput: FunctionComponent<Props> = ({ label, name, type = 'text' } : Props) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      {label && <Label data-testid="text-input-label" error={!!meta.error && !!meta.touched}>{label}</Label>}
      <Input data-testid="text-input" placeholder="Required..." {...field} error={!!meta.error && !!meta.touched} type={type} />
      {meta.error && meta.touched ? <ErrorLabel data-testid="text-input-error-label" error={!!meta.error && !!meta.touched}>{meta.error}</ErrorLabel> : null}
    </Container>
  )
}

export default React.memo(TextInput)
