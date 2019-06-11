import React from 'react'

import RemoveTool from './components/RemoveTool'

import {
 Container, HeaderContainer, Title, Description, TagsContainer, Tag,
} from './styles'

function ToolItem() {
  return (
    <Container>
      <HeaderContainer>
        <Title>Notion</Title>
        <RemoveTool>remove</RemoveTool>
      </HeaderContainer>
      <Description>All in one tool to organize teams and ideas. Write, plan, collaborate and get organized.</Description>
      <TagsContainer>
        <Tag>Teste</Tag>
        <Tag>Teste</Tag>
        <Tag>Teste</Tag>
      </TagsContainer>
    </Container>
)
}

export default ToolItem
