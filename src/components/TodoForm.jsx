import React from "react";
import { Form, Input } from "reactstrap";

const TodoForm = props => (
    <Form onSubmit={props.handleSubmit}>
        <Input type="text" value={props.text} onChange={props.handleChange} />
    </Form>
);

export default TodoForm;
