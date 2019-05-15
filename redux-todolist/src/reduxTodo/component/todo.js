import React from 'react';
import { toggleTodo } from "../redux/actions/todoActions";
import { connect } from "react-redux";
class Todo extends React.Component{

  render(){
    console.log(this.props.todo.complete)
    return(
      <li onClick = {()=>{this.props.toggleTodo(this.props.todo.id)}}>
        <span style={{
          margin: "10px",

          color: this.props.todo.complete? "gray":"black",
          textDecoration: this.props.todo.complete? "line-through":""}} >
          {this.props.todo.content}
        </ span>
      </ li>
    )
  }

}

export default connect(null,{toggleTodo})(Todo)
