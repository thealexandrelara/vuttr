import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { reducer as toastr } from 'react-redux-toastr'

import { ApplicationState } from '../types'
import auth from './auth'
import tools, { selectors as ToolsSelectors } from './tools'

export default (history : History) => combineReducers({
  router: connectRouter(history),
  auth,
  tools,
  toastr,
})

export const selectors = {
  getTools: (state: ApplicationState) => ToolsSelectors.getTools(state.tools),
}
