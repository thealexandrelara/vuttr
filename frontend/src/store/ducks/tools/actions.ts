import { action } from 'typesafe-actions'
import { ToolsTypes } from './types'
import { Tool } from './interfaces'

export const getToolsRequest = () => action(ToolsTypes.GET_TOOLS_REQUEST)
export const getToolsSuccess = (data: Tool[]) => action(ToolsTypes.GET_TOOLS_SUCCESS, { data })
export const getToolsError = () => action(ToolsTypes.GET_TOOLS_ERROR)
export const searchToolsRequest = (searchTerm: string, searchInTagsOnly: boolean) => action(ToolsTypes.SEARCH_TOOLS_REQUEST, { searchTerm, searchInTagsOnly })
export const searchToolsSuccess = (data: Tool[]) => action(ToolsTypes.SEARCH_TOOLS_SUCCESS, { data })
export const searchToolsError = () => action(ToolsTypes.SEARCH_TOOLS_ERROR)
export const addToolSuccess = (tool: Tool) => action(ToolsTypes.ADD_TOOL_SUCCESS, { tool })
export const removeToolSuccess = (id: string) => action(ToolsTypes.REMOVE_TOOL_SUCCESS, { id })
