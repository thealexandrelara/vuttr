import * as actions from '../actions'
import { ToolsTypes } from '../types'

const setup = (actionProperties = {}) => {
  const defaultActionObject = {
    error: undefined,
    meta: undefined,
    payload: {
      data: undefined,
    },
    ...actionProperties,
  }
  return defaultActionObject
}

describe('Auth actions', () => {
  it('should be able to dispatch get tools request action', () => {
    const expectedAction = setup({
      payload: undefined,
      type: ToolsTypes.GET_TOOLS_REQUEST,
    })
    const receivedAction = actions.getToolsRequest()
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch get tools success action', () => {
    const actionParams = [{
      _id: '123456',
      title: 'Notion',
      description: 'Note taking app',
      link: 'notion.io',
      tags: [],
    }]
    const expectedAction = setup({
      payload: { data: actionParams },
      type: ToolsTypes.GET_TOOLS_SUCCESS,
    })
    const receivedAction = actions.getToolsSuccess(actionParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch get tools error action', () => {
    const expectedAction = setup({
      payload: undefined,
      type: ToolsTypes.GET_TOOLS_ERROR,
    })
    const receivedAction = actions.getToolsError()
    expect(receivedAction).toStrictEqual(expectedAction)
  })


  it('should be able to dispatch search tools request action', () => {
    const actionParams = {
      searchTerm: 'notion',
      searchInTagsOnly: true,
    }
    const expectedAction = setup({
      payload: actionParams,
      type: ToolsTypes.SEARCH_TOOLS_REQUEST,
    })
    const receivedAction = actions.searchToolsRequest(
      actionParams.searchTerm, actionParams.searchInTagsOnly,
    )
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch search tools success action', () => {
    const actionParams = [{
      _id: '123456',
      title: 'Notion',
      description: 'Note taking app',
      link: 'notion.io',
      tags: [],
    }]
    const expectedAction = setup({
      payload: { data: actionParams },
      type: ToolsTypes.SEARCH_TOOLS_SUCCESS,
    })
    const receivedAction = actions.searchToolsSuccess(actionParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch search tools error action', () => {
    const expectedAction = setup({
      payload: undefined,
      type: ToolsTypes.SEARCH_TOOLS_ERROR,
    })
    const receivedAction = actions.searchToolsError()
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch add tools success action', () => {
    const actionParams = {
      _id: '123456',
      title: 'Notion',
      description: 'Note taking app',
      link: 'notion.io',
      tags: [],
    }
    const expectedAction = setup({
      payload: { tool: actionParams },
      type: ToolsTypes.ADD_TOOL_SUCCESS,
    })
    const receivedAction = actions.addToolSuccess(actionParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })

  it('should be able to dispatch remove tools success action', () => {
    const actionParams = '123456'
    const expectedAction = setup({
      payload: { id: actionParams },
      type: ToolsTypes.REMOVE_TOOL_SUCCESS,
    })
    const receivedAction = actions.removeToolSuccess(actionParams)
    expect(receivedAction).toStrictEqual(expectedAction)
  })
})
