import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import configureStore from './store/storeConfigure'
import App from "./components/container/App";

const store = configureStore()

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById("root")
);
