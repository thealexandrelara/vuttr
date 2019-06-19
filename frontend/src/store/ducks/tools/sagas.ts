import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'

import {
 getToolsSuccess, getToolsError, searchToolsSuccess, searchToolsError,
} from './actions'

import { AppAction } from '../../types'

export function* getTools() {
  try {
    const response = yield call(api.get, '/tools')

    yield put(getToolsSuccess(response.data))
  } catch (err) {
    yield put(getToolsError())
  }
}

export function* searchTools({ payload }: AppAction) {
  const { searchTerm, searchInTagsOnly } = payload
  try {
    const response = yield call(api.get, `/tools?${searchInTagsOnly ? 'tag' : 'search'}=${searchTerm}`)

    yield put(searchToolsSuccess(response.data))
  } catch (err) {
    yield put(searchToolsError())
  }
}
