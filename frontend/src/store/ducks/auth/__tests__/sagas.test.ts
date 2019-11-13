import SagaTester from 'redux-saga-tester'
import MockAdapter from 'axios-mock-adapter'
import rootSaga from '../../rootSaga'
import api from '../../../../services/api'

import * as actions from '../actions'
import { AuthTypes } from '../types'

const apiMock = new MockAdapter(api)

describe('Auth Sagas', () => {
  let sagaTester: any = null

  beforeEach(() => {
    sagaTester = new SagaTester({})
    sagaTester.run(rootSaga)
    jest.setTimeout(30000)
  })

  it('should be able to sign in on the API', async () => {
    const signInParams = { email: 'alexandre@reakt.dev', password: '123456' }
    const response = { data: { token: '123456' } }

    apiMock
      .onPost('/auth/local')
      .reply(200, response)

    sagaTester.dispatch(actions.localSignInRequest(signInParams))

    await sagaTester.waitFor(AuthTypes.LOCAL_SIGN_IN_SUCCESS)

    expect(sagaTester.wasCalled(AuthTypes.LOCAL_SIGN_IN_SUCCESS)).toBeTruthy()
  })
})
