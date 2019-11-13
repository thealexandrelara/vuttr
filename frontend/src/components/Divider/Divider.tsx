import React, { FunctionComponent } from 'react'

import { Container } from './styles'

import { Props } from './types'

export const Divider : FunctionComponent<Props> = ({ text }: Props) => <Container data-testid="divider">{text}</Container>

export default Divider
