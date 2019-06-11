import React, { FunctionComponent } from 'react'

import {
 Container,
} from './styles'
import { Props } from './types'

const Button: FunctionComponent<Props> = ({ children, type, kind }: Props) => (
  <Container kind={kind} type={type}>
    {children}
  </Container>
)

export default Button
