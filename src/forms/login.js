import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, FormLabel, Button, Form, Image } from "react-bootstrap";
import {
  faEnvelope,
  faUnlock,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { TextField } from "components";
import BrandLogo from "assets/brand-logo.png";

const LoginForm = () => {
  return (
    <Form className="auth-form">
      <header className="text-center mt-5">
        <Image src={BrandLogo} />
        <h2 className="text-gradient mt-3">JRTechIT</h2>
        <span className="text-light">Login your account to continue...</span>
      </header>
      <div className="mt-5 p-0 px-md-5">
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
        <FormGroup className="mt-4">
          <Button variant="primary py-2 w-100">
            <FontAwesomeIcon icon={faSignInAlt} className="text-light mr-2" />
            Login
          </Button>
        </FormGroup>
        <span className="d-block text-light text-center py-2">
          Don't have an account? <Link to="/register">Signup</Link>
        </span>
        <span className="d-block text-center">
          <Link to="/reset-password">Forgot password?</Link>
        </span>
      </div>
    </Form>
  );
};

export default LoginForm;
