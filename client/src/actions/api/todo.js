export const getTodo = () => {
    return fetch(`http://localhost:8080/todos`)
        .then(res => {
            if (!res.ok) throw new Error("Internal Server Error")
            return res
        })
        .then(res => res.json())
}

export const addTodo = data => {
    return fetch(`http://localhost:8080/todo`, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) throw new Error("Internal Server Error")
        return res
    })
    .then(res => res.json())
}

export const removeTodo = id => {
    return fetch(`http://localhost:8080/todo/${id}`, {
        method: "DELETE"
    })
    .then(res => {
        if (!res.ok) throw new Error("Internal Server Error")
        return res
    })
}