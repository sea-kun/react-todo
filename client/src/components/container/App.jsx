import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import Title from "../presentational/atoms/Title"
import Form from "../presentational/molecules/FormFeild";
import TodoList from "../presentational/molecules/TodoList";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActionCreators from '../../actions/actionCreators/todos'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchGetTodo()
    }

    handleClick(id) { this.props.fetchRemoveTodo(id) }
    handleChange(e) { this.setState({title: e.target.value}) }
    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.title) return this.props.getError("Nothing contents")

        this.props.clearError()
        this.props.fetchAddTodo({
            title: this.state.title
        })
        this.setState({title: ""})
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
                            title={this.state.title}
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
    error: state.error,
    todos: state.todos
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(TodoActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)