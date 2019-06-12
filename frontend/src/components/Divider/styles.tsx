import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  margin: 8px 0px;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  ${props => props.children && css`

    &::before{
      margin-right: 8px;
    }

    &::after{
      margin-left: 8px;
    }
  
  `}
`
