import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Homepage = props => {
  if (!props.authstatus.uid) return <Redirect to="/" />;
  return <div>{"Homepage"}</div>;
};

function mapStateToProps(state) {
  return {
    authstatus: state.firebase.auth
  };
}
export default connect(mapStateToProps)(Homepage);
