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
    case ToolsTypes.ADD_TOOL_SUCCESS:
      return { ...state, data: [action.payload.tool, ...state.data] }
    case ToolsTypes.REMOVE_TOOL_SUCCESS:
      return { ...state, data: state.data.filter(tool => tool._id !== action.payload.id) }
    case ToolsTypes.SEARCH_TOOLS_REQUEST:
    case ToolsTypes.GET_TOOLS_REQUEST:
      return { ...state, loading: true }
    case ToolsTypes.SEARCH_TOOLS_SUCCESS:
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

export const selectors = {
  getTools: (state : ToolsState) => state,
}
