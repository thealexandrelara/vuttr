import React, { useEffect } from 'react'
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux'

import {
 Container, Content, HeaderContainer, Title, Subtitle, ToolbarContainer, AddTool,
} from './styles'

import Search from './components/Search'
import ToolList from './components/ToolList'
import Button from '../../components/Button'

import * as AuthActions from '../../store/ducks/auth/actions'
import * as ToolsActions from '../../store/ducks/tools/actions'
import { selectors } from '../../store/ducks/rootReducer'

const Home = () => {
  const dispatch = useDispatch()
  const tools = useSelector(selectors.getTools)

  useEffect(() => {
    dispatch(ToolsActions.getToolsRequest())
  }, [dispatch])

  function handleLogout() {
    dispatch(AuthActions.logoutRequest())
  }

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <Title>VUTTR</Title>
          <Button kind="quaternary-neutral" onClick={handleLogout}>Logout</Button>
        </HeaderContainer>
        <Subtitle>Very Useful Tools to Remember</Subtitle>
        <ToolbarContainer>
          <Search />
          <AddTool>Add</AddTool>
        </ToolbarContainer>
        <ToolList tools={tools.data} />
      </Content>
    </Container>
  )
}

export default Home
