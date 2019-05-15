import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
import { connect } from "react-redux";
import {getTodosByVisibilityFilter} from '../redux/actions/selectorAction'
import {VISIBILITY_FILTERS} from '../constant';
// we got todos we want from the state in store, ofcourse we have update it to the format we want before we show it
const TodoList = ({todos}) => (

  <ul>

    {console.log(todos)}
    {todos.length > 0

      ? todos.map(todo => {

          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
//  console.log(todos)
  return  {todos} ;

};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
