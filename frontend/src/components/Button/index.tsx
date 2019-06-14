import React, { FunctionComponent } from 'react'

import {
 Container,
} from './styles'
import { Props } from './types'

const Button: FunctionComponent<Props> = ({
 children, type, onClick, kind,
}: Props) => (
  <Container kind={kind} type={type} onClick={onClick}>
    {children}
  </Container>
)

export default Button
