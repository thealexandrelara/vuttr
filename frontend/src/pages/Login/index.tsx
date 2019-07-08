import React from 'react'
import { Formik, FormikHelpers } from 'formik'
// @ts-ignore
import { useDispatch } from 'react-redux'
import { toastr } from 'react-redux-toastr'

import GoogleLogin from 'react-google-login'
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { localSignInRequest, oauthSignInRequest } from '../../store/ducks/auth/actions'

import {
 Container, Content, Form, FormContainer, AppTitle, Title, SocialButtonsContainer, CreateAccountButton,
} from './styles'
import { LoginFormValues } from './types'
import { loginValidationSchema } from './validators'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Divider from '../../components/Divider'
import authConfig from '../../config/auth'

import history from '../../routes/history'


const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useDispatch()


  function handleSubmit(values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) {
    dispatch(localSignInRequest(values))
  }

  const responseFacebook = (response : any) => {
    const { accessToken } = response

    if (accessToken) {
      dispatch(oauthSignInRequest('facebook', accessToken))
    }
  }

  const responseGoogle = (response : any) => {
    const { accessToken } = response

    if (accessToken) {
      dispatch(oauthSignInRequest('google', accessToken))
    }
  }

  function failureResponseGoogle() {
    toastr.error('Error on Google authentication', 'An error has ocurred while trying to authenticate with a Google account.')
  }

  function handleGoToSignUp() {
    history.push('/signup')
  }

  return (
    <Container>
      <Content>
        <AppTitle>VUTTR</AppTitle>
        <FormContainer>
          <Title>Sign in with</Title>
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
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
            {formikProps => (
              <Form>
                <TextInput name="email" label="Email" />
                <TextInput name="password" label="Password" type="password" />
                <Button type="submit">Submit</Button>
              </Form>
  )}
          </Formik>

          <CreateAccountButton type="button" kind="quaternary-neutral" onClick={handleGoToSignUp}>I don't have an account yet!</CreateAccountButton>

        </FormContainer>
      </Content>
    </Container>
  )
}

export default Login
