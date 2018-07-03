import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import event from './event'

export default combineReducers({
  routing: routerReducer,
  counter,
  event
})
