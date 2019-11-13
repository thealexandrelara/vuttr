import React, { useMemo, FunctionComponent } from 'react'
import { useField } from 'formik'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

export const TextAreaInput: FunctionComponent<Props> = ({ label, name } : Props) => {
  const [field, meta] = useField(name)
  const hasError = useMemo(() => !!meta.error && !!meta.touched, [meta.error, meta.touched])


  return (
    <Container>
      {label && <Label data-testid="text-area-label" error={hasError}>{label}</Label>}
      <Input data-testid="text-area-input" placeholder="Required..." {...field} error={hasError} />
      {hasError ? <ErrorLabel data-testid="text-area-error-label" error={hasError}>{meta.error}</ErrorLabel> : null}
    </Container>
  )
}

export default React.memo(TextAreaInput)
