import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AddTodo from "../containers/AddTodo";
import TodoList from "./TodoList";
const Homepage = props => {
  if (!props.authstatus.uid) return <Redirect to="/home" />;
  return (
    <div>
      {"All jobs"}
      <AddTodo />
      <TodoList />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    authstatus: state.firebase.auth
  };
}
export default connect(mapStateToProps)(Homepage);
