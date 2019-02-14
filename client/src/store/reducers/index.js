import { combineReducers } from 'redux'
import { error, todos } from './todos'

export default combineReducers({
    error,
    todos
})