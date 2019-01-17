import React from "react";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <input type="text" value={props.text} onChange={props.handleChange} />
    <button type="submit">Add</button>
  </form>
);

export default Form;
