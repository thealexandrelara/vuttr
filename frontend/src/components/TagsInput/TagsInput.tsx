import React, { useMemo, FunctionComponent } from 'react'
import { useField } from 'formik'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

export const TagsInput: FunctionComponent<Props> = ({ label, name, onChange } : Props) => {
  const [field, meta] = useField(name)
  const hasError = useMemo(() => !!meta.error && !!meta.touched, [meta.error, meta.touched])


  function handleChange(value: any, option: any) {
    onChange(value)
  }

  return (
    <Container>
      {label && <Label data-testid="tags-input-label" error={hasError}>{label}</Label>}
      <Input
        data-testid="tags-input"
        mode="tags"
        placeholder="Required..."
        notFoundContent="Type something and hit enter..."
        onChange={handleChange}
        value={field.value}
        error={hasError}
      />
      {hasError ? <ErrorLabel data-testid="tags-input-error-label" error={hasError}>{meta.error}</ErrorLabel> : null}
    </Container>
  )
}

export default React.memo(TagsInput)
