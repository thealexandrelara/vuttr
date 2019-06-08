import styled, { css } from 'styled-components'

interface Props {
  isOpen: boolean;
}

const ButtonQuartiaryDanger = css`
  background-color: transparent;
  font-weight: 600;
`

export const Container = styled.button`
  color: ${props => props.theme.colors.d};
  padding: 8px 24px;
  background-color: #365DF0;
  color: #FFFFFF;
  font-size: 18px;
  border-radius: 5px;
  min-width: 150px;
  border: 0;
  max-height: 50px;

  &:hover {
    background-color: #2F55CC;
  }

  &:active {
    background-color: #244AA8;
  }

  &:disabled {
    background-color: #B9C6FA;
    color: #E1E7FD;
  }
`
