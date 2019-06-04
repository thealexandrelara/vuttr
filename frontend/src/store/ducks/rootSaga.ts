import { all, takeLatest } from 'redux-saga/effects'

import { ToolsTypes } from './tools/types'
import { getTools } from './tools/sagas'

export default function* rootSaga() {
  return yield all([takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getTools)])
}
