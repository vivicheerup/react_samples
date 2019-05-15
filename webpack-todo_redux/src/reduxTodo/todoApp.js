import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'react'
import TodoForm from './todoForm';
import TodoList from './component/TodoList'
import VisibilityFilter from "./component/visibilityFilter";
import { connect } from "react-redux";
class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }
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
