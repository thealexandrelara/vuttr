import React, { FunctionComponent } from 'react'

import {
 Container,
} from './styles'

const Button: FunctionComponent = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default Button
