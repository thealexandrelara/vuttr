import { action } from 'typesafe-actions'
import { AuthTypes, LocalUserSignInCredentials, LocalUserSignUpCredentials } from './types'

export const localSignInRequest = (data: LocalUserSignInCredentials) => action(AuthTypes.LOCAL_SIGN_IN_REQUEST, { data })
export const localSignInSuccess = (token: string) => action(AuthTypes.LOCAL_SIGN_IN_SUCCESS, { token })

export const localSignUpRequest = (data: LocalUserSignUpCredentials) => action(AuthTypes.LOCAL_SIGN_UP_REQUEST, { data })
export const localSignUpSuccess = (token: string) => action(AuthTypes.LOCAL_SIGN_UP_SUCCESS, { token })
