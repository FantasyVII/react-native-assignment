import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers/Reducer'
import mySaga from '../saga/Sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)