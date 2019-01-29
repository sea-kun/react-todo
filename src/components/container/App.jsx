import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import Title from "../presentational/atoms/Title"
import Form from "../presentational/molecules/FormFeild";
import TodoList from "../presentational/molecules/TodoList";

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

        this.props.getError(false)
        this.props.addTodo({
            id: this.props.id,
            text: this.props.text
        })
        this.props.incrementId(this.props.id)
        this.props.clearText()
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Title/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form
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
        )
    }
}

//reducerのメソッド名がstateに落ちてくる
const mapStateToProps = state => ({
    id:    state.id,
    text:  state.text,
    error: state.error,
    todos: state.todos
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(TodoActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)