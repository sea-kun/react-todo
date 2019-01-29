import { INCREMENT_ID, INPUT_TEXT, CLEAR_TEXT, GET_ERROR, ADD_TODO, REMOVE_TODO } from '../../actions/actionTypes/todos'

//このメソッド名がmapStateToPropsで落ちてくる
export const id = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_ID:
            return action.id + 1
        default:
            return state
    }
}

export const text = (state = "", action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return action.text
        case CLEAR_TEXT:
            return ""
        default:
            return state
    }
}

export const error = (state = false, action) => {
    switch (action.type) {
        case GET_ERROR:
            return action.hasError
        default:
            return state
    }
}

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        case REMOVE_TODO:
            return state.filter(todo => action.id != todo.id)
        default:
            return state
    }
}