import React, { FunctionComponent } from 'react'

import {
 Container,
} from './styles'
import { Props } from './types'

export const Button: FunctionComponent<Props> = ({
 children, type, onClick, kind, hasIcon, style, className,
}: Props) => (
  <Container
    data-testid="button"
    kind={kind}
    type={type}
    onClick={onClick}
    hasIcon={hasIcon}
    style={style}
    className={className}
  >
    {children}
  </Container>
)

export default Button
