import React, { Component } from "react";
import { Form, Card, Row, Container, Button } from "react-bootstrap";
import { signUp } from "../actions/authActions";
import { connect } from "react-redux";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };
  handleSignOut = () => {
    console.log(this.state);
    this.props.signup(this.state);
  };

  render() {
    return (
      <div>
        <div className="title">
          <h3>{this.props.title}</h3>
        </div>
        <Container>
          <Row style={{ justifyContent: "center", paddingTop: "6rem" }}>
            <Card border="light" style={{ width: "25rem" }}>
              <Card.Header className="text-center">SignIn</Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicFirstname">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                      type="text"
                      id="firstname"
                      placeholder="Firstname"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicLastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                      type="text"
                      id="lastname"
                      placeholder="Lastname"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
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
                    SignUp
                  </Button>
                </Form>
              </Card.Body>
              <div>
                {" "}
                {this.props.authError ? <h2>{this.props.authError}</h2> : null}
              </div>
            </Card>
          </Row>
        </Container>
      </div>
      /* <Card>
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              <Input
                placeholder={"Firstname"}
                label={"Firstname"}
                id={"Firstname"}
                name={"Firstname"}
                type={"text"}
                onChange={this.handleChange}
              />
              <Input
                placeholder={"Lastname"}
                label={"Lastname"}
                id={"Lastname"}
                name={"Lastname"}
                type={"text"}
                onChange={this.handleChange}
              />
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
                SignUp
              </Button>
            </form>
            <div>
              {this.props.autherror ? <p>{this.props.autherror}</p> : null}
            </div>
          </CardContent>
        </Card> */
      // </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authstatus: state.firebase.auth,
    autherror: state.auth.authError
  };
};
function mapDispatchToProps(dispatch) {
  return {
    signup: usercred => {
      dispatch(signUp(usercred));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
