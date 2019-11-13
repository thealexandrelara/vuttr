import * as actions from '../actions'
import { AuthTypes } from '../types'

const setup = (actionProperties = {}) => {
  const defaultActionObject = {
    error: undefined,
    meta: undefined,
    payload: {
      data: undefined,
    },
    ...actionProperties,
  }
  return defaultActionObject
}

describe('Auth actions', () => {
  it('should be able to dispatch local sign in request action', () => {
    const signInParams = { email: 'alexandre@reakt.dev', password: '123456' }
    const expectedAction = setup({
      payload: { data: signInParams },
      type: AuthTypes.LOCAL_SIGN_IN_REQUEST,
    })
    const receivedAction = actions.localSignInRequest(signInParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch local sign in success action', () => {
    const actionParams = 'token1231231fasdf123'
    const expectedAction = setup({
      payload: { token: actionParams },
      type: AuthTypes.LOCAL_SIGN_IN_SUCCESS,
    })
    const receivedAction = actions.localSignInSuccess(actionParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch OAuth sign in request action', () => {
    const actionParams = { kind: 'facebook', accessToken: '12312312' }
    const expectedAction = setup({
      payload: actionParams,
      type: AuthTypes.OAUTH_REQUEST,
    })
    const receivedAction = actions.oauthSignInRequest(actionParams.kind, actionParams.accessToken)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch OAuth sign in success action', () => {
    const actionParams = 'token1231231fasdf123'
    const expectedAction = setup({
      payload: { token: actionParams },
      type: AuthTypes.OAUTH_SUCCESS,
    })
    const receivedAction = actions.oauthSignInSuccess(actionParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch local sign up request action', () => {
    const signInParams = {
      firstName: 'Alexandre',
      lastName: 'Lara',
      email: 'alexandre@reakt.dev',
      password: '123456',
      passwordConfirmation: '123456',
    }
    const expectedAction = setup({
      payload: { data: signInParams },
      type: AuthTypes.LOCAL_SIGN_UP_REQUEST,
    })
    const receivedAction = actions.localSignUpRequest(signInParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch local sign up success action', () => {
    const actionParams = 'token1231231fasdf123'
    const expectedAction = setup({
      payload: { token: actionParams },
      type: AuthTypes.LOCAL_SIGN_UP_SUCCESS,
    })
    const receivedAction = actions.localSignUpSuccess(actionParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch logout request action', () => {
    const expectedAction = setup({
      payload: undefined,
      type: AuthTypes.LOGOUT_REQUEST,
    })
    const receivedAction = actions.logoutRequest()
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch logout success action', () => {
    const expectedAction = setup({
      payload: undefined,
      type: AuthTypes.LOGOUT_SUCCESS,
    })
    const receivedAction = actions.logoutSuccess()
    expect(receivedAction).toStrictEqual(expectedAction)
  })
})
