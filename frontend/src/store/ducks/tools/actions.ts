import { action } from 'typesafe-actions'
import { ToolsTypes } from './types'
import { Tool } from './interfaces'

export const getToolsRequest = () => action(ToolsTypes.GET_TOOLS_REQUEST)
export const getToolsSuccess = (data: Tool[]) => action(ToolsTypes.GET_TOOLS_SUCCESS, { data })
export const getToolsError = () => action(ToolsTypes.GET_TOOLS_ERROR)
