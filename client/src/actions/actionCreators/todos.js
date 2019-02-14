import { GET_ERROR, CLEAR_ERROR, FETCH_GET_TODO_REQUEST, FETCH_ADD_TODO_REQUEST, FETCH_REMOVE_TODO_REQUEST } from '../actionTypes/todos'

export const getError = message => ({
    type:    GET_ERROR,
    message: message
})

export const clearError = () => ({
    type: CLEAR_ERROR
})

export const fetchGetTodo = () => ({
    type: FETCH_GET_TODO_REQUEST
})

export const fetchAddTodo = data => ({
    type: FETCH_ADD_TODO_REQUEST,
    data
})

export const fetchRemoveTodo = id => ({
    type: FETCH_REMOVE_TODO_REQUEST,
    id
})