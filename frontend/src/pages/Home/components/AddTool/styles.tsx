import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

import AppButton from '../../../../components/Button'

export const Container = styled.div`
  .button-icon {
    margin-right: 8px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }

  .button-icon g {
    fill: ${props => props.theme.colors.white};
  }

  .button-icon path {
    stroke: ${props => props.theme.colors.white};
    stroke-width: 15px;
  }
`

export const Form = styled(FormikForm)`
  display: grid;
  grid-row-gap: 16px;
`

export const Button = styled(AppButton)`
  justify-self: end;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .close-icon {
    margin-right: 8px;
    transform: rotate(45deg);
    height: 15px;
    width: 15px;
  }

  .close-icon path {
    stroke-width: 16px;
  }

`

export const Title = styled.h5`
  margin: 0;
`

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '480px',
    width: '90%',
  },
}
