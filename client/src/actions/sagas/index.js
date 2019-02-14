import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_ERROR, FETCH_GET_TODO_REQUEST, FETCH_GET_TODO_SUCCESS, FETCH_ADD_TODO_REQUEST, FETCH_ADD_TODO_SUCCESS, FETCH_REMOVE_TODO_REQUEST, FETCH_REMOVE_TODO_SUCCESS } from '../actionTypes/todos'
import { getTodo, addTodo, removeTodo } from '../api/todo'

function* fetchGetTodo() {
    try {
        const todos = yield call(getTodo)
        yield put({
            type: FETCH_GET_TODO_SUCCESS,
            todos: todos
        })
    } catch (e) {
        yield put({
            type: GET_ERROR,
            message: e.message
        })
        console.log(e.stack)
    }
}

function* fetchAddTodo(action) {
    try {
        const id = yield call(addTodo, action.data)
        yield put({
            type: FETCH_ADD_TODO_SUCCESS,
            todo: {
                id: id,
                ...action.data
            }
        })
    } catch (e) {
        yield put({
            type: GET_ERROR,
            message: e.message
        })
        console.log(e.stack)
    }
}

function* fetchRemoveTodo(action) {
    try {
        const id = yield call(removeTodo, action.id)
        yield put({
            type: FETCH_REMOVE_TODO_SUCCESS,
            id: action.id
        })
    } catch (e) {
        yield put({
            type: GET_ERROR,
            message: e.message
        })
        console.log(e.stack)
    }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_GET_TODO_REQUEST, fetchGetTodo)
  yield takeEvery(FETCH_ADD_TODO_REQUEST, fetchAddTodo)
  yield takeEvery(FETCH_REMOVE_TODO_REQUEST, fetchRemoveTodo)
}