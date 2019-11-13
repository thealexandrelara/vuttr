import React from 'react'
import { Formik, FormikHelpers } from 'formik'
// @ts-ignore
import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login'
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { toastr } from 'react-redux-toastr'

import {
 Container, Content, Form, FormContainer, AppTitle, Title, SocialButtonsContainer, GoToLoginButton,
} from './styles'
import { signUpValidationSchema } from './validators'
import { SignUpFormValues } from './types'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import Divider from '../../components/Divider'
import { localSignUpRequest, oauthSignInRequest } from '../../store/ducks/auth/actions'
import authConfig from '../../config/auth'

import history from '../../routes/history'

const initialValues: SignUpFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
}

export const SignUp = () => {
  const dispatch = useDispatch()

  function handleSubmit(values: SignUpFormValues, actions: FormikHelpers<SignUpFormValues>) {
    dispatch(localSignUpRequest(values))
  }

  const responseFacebook = (response : any) => {
    const { accessToken } = response

    if (accessToken) {
      oauthSignInRequest('facebook', accessToken)
    }
  }

  const responseGoogle = (response : any) => {
    const { accessToken } = response


    if (accessToken) {
      oauthSignInRequest('google', accessToken)
    }
  }

  const failureResponseGoogle = (response : any) => {
    toastr.error('Error on Google authentication', 'An error has ocurred while trying to authenticate with a Google account.')
  }

  function handleGoToLogin() {
    history.push('/login')
  }

  return (
    <Container>
      <Content>
        <AppTitle>VUTTR</AppTitle>
        <FormContainer>
          <Title>Sign up with</Title>
          <SocialButtonsContainer>
            <FacebookLogin
              appId={authConfig.facebook.appId}
              callback={responseFacebook}
              render={(renderProps : any) => (
                <Button type="button" onClick={renderProps.onClick}>Facebook</Button>
                )}
            />

            <GoogleLogin
              clientId={authConfig.google.clientId || ''}
              onSuccess={responseGoogle}
              onFailure={failureResponseGoogle}
              render={(renderProps : any) => (
                <Button type="button" onClick={renderProps.onClick}>Google</Button>
                )}
            />
          </SocialButtonsContainer>
          <Divider text="OR" />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signUpValidationSchema}
          >
            {formikProps => (
              <Form>
                <TextInput name="firstName" label="First Name" />
                <TextInput name="lastName" label="Last Name" />
                <TextInput name="email" label="Email" />
                <TextInput name="password" label="Password" type="password" />
                <TextInput name="passwordConfirmation" label="Password Confirmation" type="password" />
                <Button type="submit">Submit</Button>
              </Form>
  )}
          </Formik>
          <GoToLoginButton type="button" kind="quaternary-neutral" onClick={handleGoToLogin}>I already have an account!</GoToLoginButton>
        </FormContainer>
      </Content>
    </Container>
  )
}

export default SignUp
