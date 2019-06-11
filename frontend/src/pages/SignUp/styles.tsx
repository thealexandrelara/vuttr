import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1366px) 1fr;
  padding: 16px;
`

export const Content = styled.div`
  grid-column: 2;
`

export const Form = styled(FormikForm)`
  display: grid;
  grid-row-gap: 16px;
`
