import React, { useEffect } from 'react'
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux'

import {
 Container, Content, Title, Subtitle, ToolbarContainer,
} from './styles'

import Search from './components/Search'
import ToolList from './components/ToolList'
import AddTool from './components/AddTool'

import * as ToolsActions from '../../store/ducks/tools/actions'
import { selectors } from '../../store/ducks/rootReducer'

const Home = () => {
  const dispatch = useDispatch()
  const tools = useSelector(selectors.getTools)

  useEffect(() => {
    dispatch(ToolsActions.getToolsRequest())
  }, [dispatch])

  console.log('tools', tools)

  return (
    <Container>
      <Content>
        <Title>VUTTR</Title>
        <Subtitle>Very Useful Tools to Remember</Subtitle>
        <ToolbarContainer>
          <Search />
          <AddTool>Add</AddTool>
        </ToolbarContainer>
        <ToolList tools={tools} />
      </Content>
    </Container>
  )
}

export default Home
