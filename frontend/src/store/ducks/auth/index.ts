import { Reducer } from 'redux'
import { AuthTypes, AuthState } from './types'

const INITIAL_STATE: AuthState = {
  signedIn: !!localStorage.getItem('@vuttr:token') || false,
  token: localStorage.getItem('@vuttr:token') || null,
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOCAL_SIGN_IN_SUCCESS:
      return {
        ...state, token: action.payload.token, signedIn: true,
      }
    case AuthTypes.LOCAL_SIGN_UP_SUCCESS:
      return {
        ...state, token: action.payload.token, signedIn: true,
      }
    case AuthTypes.LOCAL_SIGN_IN_REQUEST:
    case AuthTypes.LOCAL_SIGN_UP_REQUEST:
    default:
      return state
  }
}

export default reducer
