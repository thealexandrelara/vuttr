import React from 'react'
import { Formik, FormikHelpers, useField } from 'formik'
// @ts-ignore
import { useDispatch } from 'react-redux'

import { localSignInRequest } from '../../store/ducks/auth/actions'

import {
 Container, Content, Form, FormContainer, Title, SocialButtonsContainer,
} from './styles'
import { LoginFormValues } from './types'
import { loginValidationSchema } from './validators'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Divider from '../../components/Divider'

const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useDispatch()


  function handleSubmit(values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) {
    dispatch(localSignInRequest(values))
    console.log('values', values)
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <Title>Entrar com</Title>
          <SocialButtonsContainer>
            <Button type="button">Facebook</Button>
            <Button type="button">Google</Button>
          </SocialButtonsContainer>
          <Divider text="OU" />
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
            {formikProps => (
              <Form>
                <TextInput name="email" label="Email" />
                <TextInput name="password" label="Password" />
                <Button type="submit">Submit</Button>
              </Form>
  )}
          </Formik>

        </FormContainer>
      </Content>
    </Container>
  )
}

export default Login
