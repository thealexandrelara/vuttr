import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

export const Container = styled.div`
  .button-icon {
    margin-right: 8px;
    width: 10px;
    height: 10px;
  }

  .button-icon g {
    fill: ${props => props.theme.colors.danger};
  }

  .button-icon path {
    stroke: ${props => props.theme.colors.danger};
    stroke-width: 20px;
  }
`

export const Form = styled(FormikForm)`
  display: grid;
  grid-row-gap: 16px;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .close-icon {
    margin-right: 8px;
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

export const Description = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.lightInk}
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: end;
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
