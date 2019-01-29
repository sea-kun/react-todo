import { combineReducers } from 'redux'
import { id, text, error, todos } from './todos'

export default combineReducers({
    id,
    text,
    error,
    todos
})