import React, { FunctionComponent } from 'react'
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

  function handleChange(value: any, option: any) {
    // console.log('option', option)
    onChange(value)
  }

  return (
    <Container>
      {label && <Label error={!!meta.error && !!meta.touched}>{label}</Label>}
      <Input
        mode="tags"
        placeholder="Required..."
        notFoundContent="Type something and hit enter..."
        onChange={handleChange}
        value={field.value}
      />
      {meta.error && meta.touched ? <ErrorLabel error={!!meta.error && !!meta.touched}>{meta.error}</ErrorLabel> : null}
    </Container>
  )
}

export default React.memo(TagsInput)
