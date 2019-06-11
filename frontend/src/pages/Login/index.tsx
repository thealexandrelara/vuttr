import React from 'react'
import { Formik } from 'formik'

import {
 Container, Content, Form,
} from './styles'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'


const Login = () => {
  const initialValues = {

  }

  function handleSubmit() {

  }

  return (
    <Container>
      <Content>
        <div>Login</div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {formikProps => (
            <Form>
              <TextInput label="Email" />
              <TextInput label="Password" />
              <Button type="submit">Submit</Button>
            </Form>
  )}
        </Formik>
      </Content>
    </Container>
  )
}

export default Login
