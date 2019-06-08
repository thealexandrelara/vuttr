import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1366px) 1fr;
  padding: 16px;
`

export const Content = styled.div`
  grid-column: 2;
`

export const Title = styled.h1`
`

export const Subtitle = styled.h4`
  margin: 20px 0;
`

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
