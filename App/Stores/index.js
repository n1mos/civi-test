import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as MessagesReducer } from './Messages/Reducers'

export default () => {
  const rootReducer = combineReducers({
    messages: MessagesReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
