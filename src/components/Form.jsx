import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <Input type="text" value={props.text} onChange={props.handleChange} />
        <Button type="submit" color="primary">Add</Button>
    </form>
);

export default Form;
