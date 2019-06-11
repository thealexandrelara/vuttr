import React from 'react'
import { Formik } from 'formik'

import {
 Container, Content, Form,
} from './styles'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'


const SignUp = () => {
  const initialValues = {

  }

  function handleSubmit() {

  }

  return (
    <Container>
      <Content>
        <div>SignUp</div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {formikProps => (
            <Form>
              <TextInput label="First Name" />
              <TextInput label="Last Name" />
              <TextInput label="Email" />
              <TextInput label="Password" />
              <TextInput label="Password confirmation" />
              <Button type="submit">Submit</Button>
            </Form>
  )}
        </Formik>
      </Content>
    </Container>
)
 }

export default SignUp
