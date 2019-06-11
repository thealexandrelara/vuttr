import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik'

export const Container = styled.div``

export const Form = styled(FormikForm)`
  display: grid;
  grid-row-gap: 16px;
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
    maxWidth: '380px',
    width: '80%',
  },
}
