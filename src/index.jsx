import React from "react";
import { render } from "react-dom";
import TodoApp from "./components/container/TodoApp";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import configureStore from './store/storeConfigure'

const store = configureStore()

render(
    <Provider store={store} >
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);
