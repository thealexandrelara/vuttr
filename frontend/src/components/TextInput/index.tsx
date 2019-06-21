import React, { FunctionComponent } from 'react'
import { useField } from 'formik'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

const TextInput: FunctionComponent<Props> = ({ label, name, type = 'text' } : Props) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      {label && <Label error={!!meta.error && !!meta.touched}>{label}</Label>}
      <Input placeholder="Required..." {...field} error={!!meta.error && !!meta.touched} type={type} />
      {meta.error && meta.touched ? <ErrorLabel error={!!meta.error && !!meta.touched}>{meta.error}</ErrorLabel> : null}
    </Container>
  )
}

export default React.memo(TextInput)
