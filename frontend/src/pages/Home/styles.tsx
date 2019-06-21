import styled from 'styled-components'
import AddToolComponent from './components/AddTool'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1366px) 1fr;
  padding: 16px;
`

export const Content = styled.div`
  grid-column: 2;
  padding: 16px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
`

export const Subtitle = styled.h4`
  margin: 20px 0;
`

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const AddTool = styled(AddToolComponent)`
  @media only screen and (max-width: 600px) {
    margin-top: 16px;
    align-self: flex-end;
  }
`
