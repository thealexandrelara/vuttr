import React from 'react'
import { Formik, FormikHelpers } from 'formik'
// @ts-ignore
import { useDispatch } from 'react-redux'

import {
 Container, Content, Form, FormContainer, Title, SocialButtonsContainer,
} from './styles'
import { signUpValidationSchema } from './validators'
import { SignUpFormValues } from './types'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import Divider from '../../components/Divider'
import { localSignUpRequest } from '../../store/ducks/auth/actions'

const initialValues: SignUpFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
}

const SignUp = () => {
  const dispatch = useDispatch()

  function handleSubmit(values: SignUpFormValues, actions: FormikHelpers<SignUpFormValues>) {
    dispatch(localSignUpRequest(values))
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <Title>Cadastrar com</Title>
          <SocialButtonsContainer>
            <Button type="button">Facebook</Button>
            <Button type="button">Google</Button>
          </SocialButtonsContainer>
          <Divider text="OU" />
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
            {formikProps => (
              <Form>
                <TextInput name="firstName" label="First Name" />
                <TextInput name="lastName" label="Last Name" />
                <TextInput name="email" label="Email" />
                <TextInput name="password" label="Password" />
                <TextInput name="passwordConfirmation" label="Password Confirmation" />
                <Button type="submit">Submit</Button>
              </Form>
  )}
          </Formik>

        </FormContainer>
      </Content>
    </Container>
  )
}

export default SignUp
