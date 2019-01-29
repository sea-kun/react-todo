import React from "react";
import styled from "styled-components";

import Error from "../atoms/Error"
import Form from "./Form"

const Layout = styled.div`
    margin-bottom: 20px;
`;

export default (props) => {
    if (props.error) {
        return (
            <Layout>
                <Error>Nothing contents</Error>
                <Form
                    value={props.text}
                    handleChange={props.handleChange}
                    handleSubmit={props.handleSubmit}
                />
            </Layout>
        )
    }

    return (
        <Layout>
            <Form
                value={props.text}
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
            />
        </Layout>
    )
}