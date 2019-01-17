import React from "react";

const List = props => {
  const todoList = props.todos.map(todo => (
    <li key={todo.id} onClick={() => props.handleClick(todo.id)}>
      {todo.text}
    </li>
  ));
  return <ul>{todoList}</ul>;
};

export default List;
