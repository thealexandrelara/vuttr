import React from 'react'

import { Props } from './interfaces'


import ToolItem from './components/ToolItem'
import { Container } from './styles'

const ToolList = ({ tools } : Props) => <Container>{tools ? tools.map(tool => <ToolItem key={tool._id} id={tool._id} title={tool.title} description={tool.description} link={tool.link} tags={tool.tags} />) : null}</Container>


export default (ToolList)
