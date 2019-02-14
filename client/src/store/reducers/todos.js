import { GET_ERROR, CLEAR_ERROR, FETCH_GET_TODO_SUCCESS, FETCH_ADD_TODO_SUCCESS, FETCH_REMOVE_TODO_SUCCESS } from '../../actions/actionTypes/todos'

export const error = (state = false, action) => {
    switch (action.type) {
        case GET_ERROR:
            return {
                message: action.message,
                hasError: true
            }
        case CLEAR_ERROR:
            return {
                message: "",
                hasError: false
            }
        default:
            return state
    }
}

export const todos = (state = [], action) => {
    switch (action.type) {
        case FETCH_GET_TODO_SUCCESS:
            return action.todos
        case FETCH_ADD_TODO_SUCCESS:
            return [
                ...state,
                action.todo
            ]
        case FETCH_REMOVE_TODO_SUCCESS:
            return state.filter(todo => action.id != todo.id)
        default:
            return state
    }
}