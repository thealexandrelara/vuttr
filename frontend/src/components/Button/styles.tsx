import styled, { css } from 'styled-components'

interface Props {
  kind?: string
  type?: 'button' | 'reset' | 'submit' | undefined
  hasIcon?: boolean
}

const ButtonSecondaryNeutral = css`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.mostLightestPrimary};
  font-weight: 600;

  &:hover {
    background-color: ${props => props.theme.colors.lightestPrimary};
  }

  &:active {
    background-color: ${props => props.theme.colors.lighterPrimary};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.mostLightestPrimary};
    color: ${props => props.theme.colors.lighterPrimary};
  }
`

const ButtonPrimaryDanger = css`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.danger};
  font-weight: 600;

  &:hover {
    background-color: ${props => props.theme.colors.darkerDanger};
  }

  &:active {
    background-color: ${props => props.theme.colors.darkDanger};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightDanger};
    color: ${props => props.theme.colors.mostLightestDanger};
  }
`

const ButtonQuarternaryDanger = css`
  color: ${props => props.theme.colors.danger};
  background-color: transparent;
  font-weight: 600;
  padding: 14px 0;
  min-width: auto;
`

export const Container = styled.button<Props>`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  padding: 14px 30px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  border-radius: 5px;
  min-width: 150px;
  border: 0;
  max-height: 50px;

  ${props => props.hasIcon && css`
    display: flex;
    align-items: center;
    justify-content: center;
  
  `}

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
  

  ${props => props.kind === 'secondary-neutral' && ButtonSecondaryNeutral}
  ${props => props.kind === 'quaternary-danger' && ButtonQuarternaryDanger}
  ${props => props.kind === 'primary-danger' && ButtonPrimaryDanger}
`
