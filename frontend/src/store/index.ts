import {
 createStore, applyMiddleware, compose, Store,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import { ApplicationState } from './types'
import createRootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

import history from '../routes/history'


const middlewares = []

const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)
middlewares.push(routerMiddleware(history))

const store: Store<ApplicationState> = createStore(createRootReducer(history), compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store
