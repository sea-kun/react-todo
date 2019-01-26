import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <Input type="text" value={props.text} onChange={props.handleChange} />
    </form>
);

export default Form;
