import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import TodoTitle from "../presentational/TodoTitle"
import TodoForm from "../presentational/TodoForm";
import TodoList from "../presentational/TodoList";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActionCreators from '../../actions/actionCreators/todos'

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(id) { this.props.removeTodo(id) }
    handleChange(e) { this.props.inputText(e.target.value) }
    handleSubmit(e) {
        e.preventDefault();

        if (!this.props.text) {
            this.props.getError(true)
            return;
        }

        this.props.clearText()
        this.props.getError(false)
        this.props.incrementId(this.props.id)
        this.props.addTodo({
            id: this.props.id,
            text: this.props.text
        })
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
                            text={this.props.text}
                            error={this.props.error}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TodoList todos={this.props.todos} handleClick={this.handleClick} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

//reducerのメソッド名がstateに落ちてくる
const mapStateToProps = state => ({
    id: state.id,
    text: state.text,
    error: state.error,
    todos: state.todos
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(TodoActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)