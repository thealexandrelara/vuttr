import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { ApplicationState } from '../types'
import auth from './auth'
import tools, { selectors as ToolsSelectors } from './tools'

export default (history : History) => combineReducers({
  router: connectRouter(history),
  auth,
  tools,
})

export const selectors = {
  getTools: (state: ApplicationState) => ToolsSelectors.getTools(state.tools),
}
