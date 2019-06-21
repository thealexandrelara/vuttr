import styled, { css } from 'styled-components'
import { Select } from 'antd'

interface Props {
  error?: boolean
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.p<Props>`
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.ink};
  
`

const InputHasError = css`
  color: ${props => props.theme.colors.danger};
  background-color: ${props => props.theme.colors.mostLightestDanger};
  border-color: ${props => props.theme.colors.danger};

  &:hover, &:active, &:focus {
    background-color: ${props => props.theme.colors.mostLightestDanger};
    border: 1px solid ${props => props.theme.colors.danger};
  }

  &:not(:focus){
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    border: 1px solid ${props => props.theme.colors.danger};
  }

  .ant-select-selection__placeholder{
    color: ${props => props.theme.colors.lightDanger};

  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.lightDanger};
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.colors.lightDanger};
  }

  .ant-select-selection:not(:focus){
    border-color: ${props => props.theme.colors.danger};
  }
`

export const Input = styled(Select)<Props>`
  .ant-select-selection {
    min-height: 50px;

    font-size: 20px;
    color: ${props => props.theme.colors.ink};
    background-color: ${props => props.theme.colors.darkerWhite};
    border: 1px solid ${props => props.theme.colors.darkestWhite};
    border-radius: 5px;
    box-shadow: none !important;
    -webkit-box-shadow: none !important;

    &:hover, &:active, &:focus {
      background-color: ${props => props.theme.colors.darkerWhite};
      border: 1px solid ${props => props.theme.colors.darkestWhite};
    }

    &:not(:focus){
      box-shadow: none !important;
      -webkit-box-shadow: none !important;
      border: 1px solid ${props => props.theme.colors.darkestWhite};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${props => props.theme.colors.lightInk};
    }

    :-ms-input-placeholder {
      color: ${props => props.theme.colors.lightInk};
    }

    ${props => !props.error && css` 
      &:focus {
        background-color: ${props.theme.colors.darkestWhite};
        border-color: ${props.theme.colors.mostDarkestWhite};
      }
    `}
    

    ${props => props.error && InputHasError}

    .ant-select-selection__choice {
      border-radius: 5px;
    }
  }

  .ant-select-selection__rendered, .ant-select-search, .ant-select-selection__choice {
    min-height: 50px;
  }

  .ant-select-selection__choice {
    display: flex;
    align-items: center;
  }
`

export const ErrorLabel = styled.p<Props>`
  margin-top: 8px;
  align-self: flex-end;
  color: ${props => props.theme.colors.danger};
`
