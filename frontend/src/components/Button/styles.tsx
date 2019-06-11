import styled, { css } from 'styled-components'

interface Props {
  kind?: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
}

const ButtonQuarternaryDanger = css`
  color: ${props => props.theme.colors.danger};
  background-color: transparent;
  font-weight: 600;
`

export const Container = styled.button<Props>`
  color: ${props => props.theme.colors.white};
  padding: 8px 24px;
  background-color: #365DF0;
  color: #FFFFFF;
  font-size: 18px;
  border-radius: 5px;
  min-width: 150px;
  border: 0;
  max-height: 50px;

  ${props => !props.kind && css`
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
  `}
  

  ${props => props.kind === 'quaternary-danger' && ButtonQuarternaryDanger}
`
