import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import api from '../../../services/api'

import { localSignInSuccess, localSignUpSuccess } from './actions'
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
    console.log(err)
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
    console.log(err)
  }
}
