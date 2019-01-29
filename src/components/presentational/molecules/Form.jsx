import React from "react"
import { Form, Input } from "reactstrap"

export default (props) => (
    <Form onSubmit={props.handleSubmit}>
        <Input type="text" value={props.text} onChange={props.handleChange} />
    </Form>
)