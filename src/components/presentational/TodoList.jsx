import React from "react";
import styled from 'styled-components'
import { Table } from 'reactstrap';

const Todo = styled.td`
    border-radius: 10px;

    :hover {
        background-color: #f1f1f1;
    }
`;

const TodoList = props => {
    const todoList = props.todos.map(todo => (
        <tr>
            <Todo key={todo.id} onClick={() => props.handleClick(todo.id)}>
                {todo.text}
            </Todo>
        </tr>
    ));

    return <Table>{todoList}</Table>;
};

export default TodoList;