import React from "react";
import { signOut } from "../actions/authActions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

function HomeLinks(props) {
  return (
    <div>
      <Button>Home</Button>
      <Button onClick={props.signout}>SignOut</Button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => {
      dispatch(signOut());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HomeLinks);
