import React from "react";
import styled from "styled-components"
import { Table } from "reactstrap"

const Layout = styled.td`
    border-radius: 10px;

    :hover {
        background-color: #f1f1f1;
    }
`;

const Todo = props => (
    <tr>
        <Layout onClick={() => props.handleClick(props.todo.id)}>
            {props.todo.title}
        </Layout>
    </tr>
)

export default (props) => (
    <Table>
        <tbody>
            {props.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleClick={props.handleClick}
                />
            ))}
        </tbody>
    </Table>
)
