import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'

import { getToolsSuccess, getToolsError } from './actions'

export function* getTools() {
  try {
    const response = yield call(api.get, '/tools')

    yield put(getToolsSuccess(response.data))
  } catch (err) {
    yield put(getToolsError())
  }
}
