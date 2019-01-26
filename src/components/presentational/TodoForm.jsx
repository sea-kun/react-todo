import React from "react";
import styled from 'styled-components';
import { Form, Input, Alert } from "reactstrap";

const Wrapper = styled.div`
    margin-bottom: 20px;
`;

const TodoForm = props => {
    if (props.error) {
        return (
            <Wrapper>
                <Alert color="danger">nothing content</Alert>
                <Form onSubmit={props.handleSubmit}>
                    <Input type="text" value={props.text} onChange={props.handleChange} />
                </Form>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Form onSubmit={props.handleSubmit}>
                <Input type="text" value={props.text} onChange={props.handleChange} />
            </Form>
        </Wrapper>
    )
};

export default TodoForm;
