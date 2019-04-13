import React, { Component } from "react";
import { connect } from "react-redux";
class Todo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.text}</p>
        {/* <button
       onClick={()=>this.props.dispatch({type:'EDIT_TODO',id:this.props.todo.todoid})}>
       Edit</button>
      <button 
      onClick={()=>this.props.dispatch({type:'DELETE_TODO',id:this.props.todo.todoid})}>
      Delete</button> */}
      </div>
    );
  }
}
export default connect()(Todo);
