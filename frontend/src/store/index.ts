import {
 createStore, applyMiddleware, compose, Store,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { ToolsState } from './ducks/tools/interfaces'
import { AuthState } from './ducks/auth/types'

import createRootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

import history from '../routes/history'

export interface ApplicationState {
  auth: AuthState,
  tools: ToolsState
}

const middlewares = []

const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)
middlewares.push(routerMiddleware(history))

const store: Store<ApplicationState> = createStore(createRootReducer(history), compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store
