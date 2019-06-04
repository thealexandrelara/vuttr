import { Reducer } from 'redux'
import { ToolsTypes } from './types'
import { ToolsState } from './interfaces'

const INITIAL_STATE: ToolsState = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<ToolsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ToolsTypes.GET_TOOLS_REQUEST:
      return { ...state, loading: true }
    case ToolsTypes.GET_TOOLS_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      }
    case ToolsTypes.GET_TOOLS_ERROR:
      return {
      ...state, loading: false, error: true, data: [],
      }
    default:
      return state
  }
}

export default reducer
