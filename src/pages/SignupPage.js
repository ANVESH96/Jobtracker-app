import React, { Component } from "react";
import SignUp from "../containers/SignUp";
import Layout from "../components/Layout";
export default class SignupPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SignUp />
        </Layout>
      </div>
    );
  }
}
