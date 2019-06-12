import { all, takeLatest } from 'redux-saga/effects'

import { ToolsTypes } from './tools/types'
import { getTools } from './tools/sagas'


import { AuthTypes } from './auth/types'
import { localSignIn, localSignUp } from './auth/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getTools),
    takeLatest(AuthTypes.LOCAL_SIGN_IN_REQUEST, localSignIn),
    takeLatest(AuthTypes.LOCAL_SIGN_UP_REQUEST, localSignUp),
  ])
}
