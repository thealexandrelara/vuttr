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
  font-weight: 600;
  padding: 8px 24px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  border-radius: 5px;
  min-width: 150px;
  border: 0;
  max-height: 50px;

  ${props => !props.kind && css`
    &:hover {
      background-color: ${props.theme.colors.darkPrimary};
    }

    &:active {
      background-color: ${props.theme.colors.darkerPrimary};
    }

    &:disabled {
      background-color: ${props.theme.colors.lighterPrimary};
      color: ${props.theme.colors.mostLightestPrimary};
    }
  `}
  

  ${props => props.kind === 'quaternary-danger' && ButtonQuarternaryDanger}
`
