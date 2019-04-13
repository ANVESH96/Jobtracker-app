import React, { Component } from "react";
import SignIn from "../containers/SignIn";
import Layout from "../components/Layout";
import Homepage from "../components/Homepage";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div>
        <Layout>{this.props.authstatus.uid ? <Homepage /> : <SignIn />}</Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authstatus: state.firebase.auth
  };
}

export default connect(mapStateToProps)(Main);
