import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '../../../services/api'

import { localSignInSuccess, localSignUpSuccess, oauthSignInSuccess } from './actions'
import { LocalUserSignInCredentials } from './types'

import { AppAction } from '../../types'

export function* localSignIn({ payload } : AppAction) {
  try {
    console.log('act', payload)
    const response = yield call(api.post, '/auth/local', { ...payload.data })

    localStorage.setItem('@vuttr:token', response.data.token)

    yield put(localSignInSuccess(response.data.token))
    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Error',
        message: 'It was not possible to authenticate. Check your e-mail and password and try again.',
      }),
    )
  }
}

export function* oauthSignIn({ payload } : AppAction) {
  console.log('oauthpayload', payload)
  const { accessToken, kind } = payload
  try {
    const response = yield call(api.get, `/auth/${kind}?access_token=${accessToken}`)

    localStorage.setItem('@vuttr:token', response.data.token)

    yield put(oauthSignInSuccess(response.data.token))
    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Error',
        message: 'It was not possible to authenticate. Check your e-mail and password and try again.',
      }),
    )
  }
}

export function* localSignUp({ payload } : AppAction) {
  try {
    const {
      firstName, lastName, email, password,
    } = payload.data
    console.log('payloadvalues', payload.data)
    const response = yield call(api.post, 'users', {
      firstName, lastName, email, password,
    })

    localStorage.setItem('@vuttr:token', response.data.token)

    yield put(localSignUpSuccess(response.data.token))
    yield put(push('/'))
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Error',
        message: 'It was not possible to create your account. Please, try again.',
      }),
    )
  }
}
