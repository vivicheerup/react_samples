import React from 'react';
import TodoForm from './todoForm';
import TodoList from './component/todoList'
import VisibilityFilter from "./component/visibilityFilter";
class TodoApp extends React.Component{
  render(){
    return(
      <div>
        <h2> Todo List </h2>
        <TodoForm />
        <TodoList />
        <VisibilityFilter />
      </div>
    )
  }
}

export default TodoApp
