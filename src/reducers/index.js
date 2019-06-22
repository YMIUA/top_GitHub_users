import { combineReducers } from 'redux'
import listUsers from './requestListUsers'

const rootReducer = combineReducers({
  listUsers,
})

export default rootReducer
  