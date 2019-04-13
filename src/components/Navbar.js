import React, { Component } from "react";
import { connect } from "react-redux";
import HomeLinks from "./HomeLinks";
import SignInLinks from "./SignInLinks";
import "../Styles/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = props => {
  const { authstatus } = props;
  console.log(authstatus);
  const links = authstatus.uid ? <HomeLinks /> : <SignInLinks />;
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="ml-auto mr-auto">
          <Navbar.Brand href="/home">Job Tracker</Navbar.Brand>
          <Nav className="ml-auto mr-auto">
            <Nav>{links}</Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    authstatus: state.firebase.auth
  };
}

export default connect(mapStateToProps)(Navigation);
