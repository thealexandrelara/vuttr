import SagaTester from 'redux-saga-tester'
import MockAdapter from 'axios-mock-adapter'
import rootSaga from '../../rootSaga'
import api from '../../../../services/api'

import * as actions from '../actions'
import { ToolsTypes } from '../types'

const apiMock = new MockAdapter(api)

describe('Posts Saga', () => {
  let sagaTester: any = null

  beforeEach(() => {
    sagaTester = new SagaTester({})
    sagaTester.run(rootSaga)
    jest.setTimeout(30000)
  })

  it('should fetch tools from API', async () => {
    const tools = [{
      _id: '123456',
      title: 'Notion',
      description: 'Note taking app',
      link: 'notion.io',
      tags: [],
    },
    ]

    const response = tools

    apiMock
      .onGet('/tools')
      .reply(200, response)

    sagaTester.dispatch(actions.getToolsRequest())

    await sagaTester.waitFor(ToolsTypes.GET_TOOLS_SUCCESS)

    expect(sagaTester.getLatestCalledAction()).toEqual(
      actions.getToolsSuccess(tools),
    )
  })
})
