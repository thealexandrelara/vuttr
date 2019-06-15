import { Action } from 'redux'
import { ToolsState } from './ducks/tools/interfaces'
import { AuthState } from './ducks/auth/types'

export interface AppAction extends Action {
  payload?: any;
}

export interface ApplicationState {
  auth: AuthState,
  tools: ToolsState
}
