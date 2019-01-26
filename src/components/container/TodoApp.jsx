import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import TodoTitle from "../presentational/TodoTitle"
import TodoForm from "../presentational/TodoForm";
import TodoList from "../presentational/TodoList";

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            text: "",
            todos: [],
            error: false
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
        e.preventDefault();

        if (!this.state.text) {
            this.setState(state => ({
                error: true
            }));
            return;
        }

        this.setState(state => ({
            id: state.id + 1,
            text: "",
            todos: [
                ...state.todos,
                {
                    id: state.id,
                    text: state.text
                }
            ],
            error: false
        }));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TodoTitle/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TodoForm
                            text={this.state.text}
                            error={this.state.error}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TodoList todos={this.state.todos} handleClick={this.handleClick} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TodoApp;
