import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from "react-redux";
import { addTodo } from "./redux/actions/todoActions"

class TodoForm extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      val: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      val: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.val)
    this.props.addTodo(this.state.val)
    this.setState({
      val: ''
    })
  }
render(){
  return(
    <form>
      <input type="text" onChange = {this.handleChange} value = {this.state.val}/>
      <button onClick = {this.handleSubmit}>ADD</button>
    </form>
  )
}

}

export default connect(null,{addTodo})(TodoForm)
