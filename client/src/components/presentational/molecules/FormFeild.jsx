import React from "react";
import styled from "styled-components";

import Error from "../atoms/Error"
import Form from "./Form"

const Layout = styled.div`
    margin-bottom: 20px;
`;

export default (props) => (
    <Layout>
        <Error error={props.error} />
        <Form
            text={props.title}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
        />
    </Layout>
)
