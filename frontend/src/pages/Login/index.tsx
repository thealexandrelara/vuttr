import React from 'react'
import { Formik, FormikHelpers, useField } from 'formik'
// @ts-ignore
import { useDispatch } from 'react-redux'

import GoogleLogin from 'react-google-login'
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { localSignInRequest, oauthSignInRequest } from '../../store/ducks/auth/actions'

import {
 Container, Content, Form, FormContainer, Title, SocialButtonsContainer,
} from './styles'
import { LoginFormValues } from './types'
import { loginValidationSchema } from './validators'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Divider from '../../components/Divider'
import authConfig from '../../config/auth'

console.log('authConfig', authConfig)

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

  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <Title>Entrar com</Title>
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
