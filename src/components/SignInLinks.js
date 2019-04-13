import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Button from "@material-ui/core/Button";
function SignInLinks() {
  return (
    <div>
      <Button>
        <Link to="/About">About</Link>
      </Button>
      <Button>
        <Link to="/Signup">SignUp</Link>
      </Button>
    </div>
  );
}

export default SignInLinks;
