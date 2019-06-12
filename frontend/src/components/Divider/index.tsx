import React, { FunctionComponent } from 'react'

import { Container } from './styles'

import { Props } from './types'

const Divider : FunctionComponent<Props> = ({ text }: Props) => <Container>{text}</Container>

export default Divider
