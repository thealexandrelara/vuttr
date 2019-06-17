import React, { FunctionComponent } from 'react'

import RemoveTool from './components/RemoveTool'
import { Props } from './types'

import {
 Container, HeaderContainer, Title, Description, TagsContainer, Tag,
} from './styles'

const ToolItem: FunctionComponent<Props> = ({
 id, title, description, link, tags,
} : Props) => (
  <Container>
    <HeaderContainer>
      <Title>{title}</Title>
      <RemoveTool id={id}>remove</RemoveTool>
    </HeaderContainer>
    <Description>{description}</Description>
    <TagsContainer>
      {tags.map(tag => (
        <Tag key={tag}>
          #
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  </Container>
)

export default ToolItem
