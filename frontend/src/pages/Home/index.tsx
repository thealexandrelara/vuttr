import React from 'react'

import {
 Container, Content, Title, Subtitle, ToolbarContainer,
} from './styles'

import Search from './components/Search'
import ToolList from './components/ToolList'

const Home = () => (
  <Container>
    <Content>
      <Title>VUTTR</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <ToolbarContainer>
        <Search />
        <button type="button">Add</button>
      </ToolbarContainer>
      <ToolList />
    </Content>
  </Container>
)

export default Home
