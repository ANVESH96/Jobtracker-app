import React, { Component } from "react";
// import { Card } from "react-bootstrap";
// import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import { signIn } from "../actions/authActions";
import { connect } from "react-redux";
import { Card, Container, Row, Button, Form } from "react-bootstrap";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.email);
    this.props.signin(this.state.email, this.state.password);
  };
  handleSignOut = () => {
    this.props.signout();
  };

  render() {
    const { authError } = this.props;
    return (
      <div>
        <Container>
          <Row style={{ justifyContent: "center", paddingTop: "6rem" }}>
            <Card
              className="text-center"
              border="light"
              style={{ width: "25rem" }}
            >
              <Card.Header>SignIn</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    SignIn
                  </Button>
                </Form>
              </Card.Body>
              <div> {authError ? <h2>{authError}</h2> : null}</div>
            </Card>
          </Row>
        </Container>
      </div>
    );
    {
      /* <Card>
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              <Input
                placeholder={"Email"}
                label={"Email Address"}
                id={"email"}
                name={"email"}
                type={"text"}
                onChange={this.handleChange}
              />
              <Input
                placeholder={"password"}
                label={"Password"}
                id={"password"}
                name={"password"}
                type={"password"}
                onChange={this.handleChange}
              />
              <Button type="submit" variant="contained" color="default">
                SignIn{" "}
              </Button>
            </form>
            <div> {authError ? <h4>{authError}</h4> : null}</div>
          </CardContent>
        </Card>
      </div>
    ); */
    }
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};
function mapDispatchToProps(dispatch) {
  return {
    signin: (email, password) => {
      dispatch(signIn(email, password));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
