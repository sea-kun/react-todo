import React from "react"
import { Alert } from "reactstrap"

export default (props) => {
    if (props.error.hasError) return <Alert color="danger">{props.error.message}</Alert>
    return null
}