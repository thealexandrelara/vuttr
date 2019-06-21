import React, { useMemo, FunctionComponent } from 'react'
import { useField } from 'formik'
import { Select } from 'antd'

import {
 Container,
 Label,
 Input,
 ErrorLabel,
} from './styles'

import { Props } from './types'

const TagsInput: FunctionComponent<Props> = ({ label, name, onChange } : Props) => {
  const [field, meta] = useField(name)
  const hasError = useMemo(() => !!meta.error && !!meta.touched, [meta.error, meta.touched])


  function handleChange(value: any, option: any) {
    onChange(value)
  }

  return (
    <Container>
      {label && <Label error={hasError}>{label}</Label>}
      <Input
        mode="tags"
        placeholder="Required..."
        notFoundContent="Type something and hit enter..."
        onChange={handleChange}
        value={field.value}
        error={hasError}
      />
      {hasError ? <ErrorLabel error={hasError}>{meta.error}</ErrorLabel> : null}
    </Container>
  )
}

export default React.memo(TagsInput)
