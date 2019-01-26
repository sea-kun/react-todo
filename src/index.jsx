import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoApp from "./components/TodoApp.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);
