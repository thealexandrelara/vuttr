import React, { useMemo, FunctionComponent } from 'react'
import { useField } from 'formik'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

const TextAreaInput: FunctionComponent<Props> = ({ label, name } : Props) => {
  const [field, meta] = useField(name)
  const hasError = useMemo(() => !!meta.error && !!meta.touched, [meta.error, meta.touched])


  return (
    <Container>
      {label && <Label error={hasError}>{label}</Label>}
      <Input placeholder="Required..." {...field} error={hasError} />
      {hasError ? <ErrorLabel error={hasError}>{meta.error}</ErrorLabel> : null}
    </Container>
  )
}

export default React.memo(TextAreaInput)
