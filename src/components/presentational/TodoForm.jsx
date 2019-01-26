import React from "react";
import styled from 'styled-components';
import { Form, Input } from "reactstrap";

const Wrapper = styled.div`
    margin-bottom: 20px;
`;

const TodoForm = props => (
    <Wrapper>
        <Form onSubmit={props.handleSubmit}>
            <Input type="text" value={props.text} onChange={props.handleChange} />
        </Form>
    </Wrapper>
);

export default TodoForm;
