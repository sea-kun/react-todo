import React from "react";
import { Table } from 'reactstrap';

const TodoList = props => {
    const todoList = props.todos.map(todo => (
        <tr>
            <td key={todo.id} onClick={() => props.handleClick(todo.id)}>
                {todo.text}
            </td>
        </tr>
    ));

    return <Table>{todoList}</Table>;
};

export default TodoList;