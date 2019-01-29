import { INCREMENT_ID, INPUT_TEXT, GET_ERROR, ADD_TODO, REMOVE_TODO } from '../actionTypes/todos'

export const incrementId = id => ({
    type: INCREMENT_ID,
    id:   id
})

export const inputText = text => ({
    type: INPUT_TEXT,
    text: text
})

export const getError = error => ({
    type:     GET_ERROR,
    hasError: error
})

export const addTodo = todo => ({
    type: ADD_TODO,
    id:   todo.id,
    text: todo.text
})

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id:   id
})