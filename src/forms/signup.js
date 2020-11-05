import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, FormLabel, Button, Form, Image } from "react-bootstrap";
import {
  faEnvelope,
  faUnlock,
  faPhone,
  faUser,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { TextField } from "components";
import BrandLogo from "assets/brand-logo.png";

const SignupForm = () => {
  return (
    <Form className="auth-form">
      <header className="text-center mt-5">
        <Image src={BrandLogo} />
        <h2 className="text-gradient mt-3">JRTechIT</h2>
        <span className="text-light">
          Fill out the detail's for Registration
        </span>
      </header>
      <div className="mt-4 p-0 px-md-5">
        <FormGroup>
          <FormLabel className="text-muted">Full Name</FormLabel>
          <TextField startIcon={faUser} className="form-control-dark" />
        </FormGroup>
        <FormGroup>
          <FormLabel className="text-muted">Email Address</FormLabel>
          <TextField
            type="email"
            startIcon={faEnvelope}
            className="form-control-dark"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel className="text-muted">Password</FormLabel>
          <TextField
            type="password"
            startIcon={faUnlock}
            className="form-control-dark"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel className="text-muted">Phone Number</FormLabel>
          <TextField startIcon={faPhone} className="form-control-dark" />
        </FormGroup>
        <FormGroup className="mt-4">
          <Button variant="primary py-2 w-100">
            <FontAwesomeIcon icon={faSignInAlt} className="text-light mr-2" />
            Signup
          </Button>
        </FormGroup>
        <div className="text-light text-center pb-3">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </Form>
  );
};

export default SignupForm;
