import React, { Component } from "react";
import SignIn from "../containers/SignIn";
import Layout from "../components/Layout";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SignIn />
        </Layout>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     authstatus: state.firebase.auth
//   };
// }
