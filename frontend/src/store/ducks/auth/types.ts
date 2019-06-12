export enum AuthTypes {
  LOCAL_SIGN_IN_REQUEST = '@auth/LOCAL_SIGN_IN_REQUEST',
  LOCAL_SIGN_IN_SUCCESS = '@auth/LOCAL_SIGN_IN_SUCCESS',
  OAUTH_REQUEST = '@auth/OAUTH_REQUEST',
  OAUTH_SUCCESS = '@auth/OAUTH_SUCCESS',
  LOCAL_SIGN_UP_REQUEST = '@auth/LOCAL_SIGN_UP_REQUEST',
  LOCAL_SIGN_UP_SUCCESS = '@auth/LOCAL_SIGN_UP_SUCCESS',
}

export interface LocalUserSignInCredentials {
  email: string,
  password: string,
}

export interface LocalUserSignUpCredentials {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordConfirmation: string,
}

export interface AuthState {
  signedIn: boolean,
  token: string | null,

}
