import styled from 'styled-components'
import { Tag as AntTag } from 'antd'

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 2.5rem;
  border: 1px solid ${props => props.theme.colors.darkestWhite};
  border-radius: 5px;
  margin-top: 20px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const Title = styled.h3`
  margin: 0;
`

export const Description = styled.p`

`

export const TagsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

export const Tag = styled(AntTag)`
  margin: 4px 4px;
`
