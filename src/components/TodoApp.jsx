import React, { Component } from "react";

import List from "./List.jsx";
import Form from "./Form.jsx";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: "",
      todos: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(id) {
    const todos = this.state.todos.filter(todo => todo.id != id);
    this.setState({
      todos: todos
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState(state => ({
      id: state.id + 1,
      text: "",
      todos: [
        ...state.todos,
        {
          id: state.id,
          text: state.text
        }
      ]
    }));
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <h1>Todo App</h1>
        <Form
          text={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List todos={this.state.todos} handleClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default TodoApp;
