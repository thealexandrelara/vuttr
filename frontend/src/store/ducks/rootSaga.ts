import { all, takeLatest } from 'redux-saga/effects'

import { ToolsTypes } from './tools/types'
import { getTools, searchTools } from './tools/sagas'


import { AuthTypes } from './auth/types'
import { localSignIn, localSignUp, oauthSignIn } from './auth/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getTools),
    takeLatest(ToolsTypes.SEARCH_TOOLS_REQUEST, searchTools),
    takeLatest(AuthTypes.LOCAL_SIGN_IN_REQUEST, localSignIn),
    takeLatest(AuthTypes.OAUTH_REQUEST, oauthSignIn),
    takeLatest(AuthTypes.LOCAL_SIGN_UP_REQUEST, localSignUp),
  ])
}
