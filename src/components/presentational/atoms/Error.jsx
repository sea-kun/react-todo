import React from "react"
import { Alert } from "reactstrap"

export default (props) => (
    <Alert color="danger">{props.children}</Alert>
)