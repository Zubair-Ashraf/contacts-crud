import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, FormLabel, Button, Form, Image } from "react-bootstrap";
import { faEnvelope, faBackspace } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "components";
import BrandLogo from "assets/brand-logo.png";

const ResetPasswordForm = () => {
  return (
    <Form className="auth-form">
      <header className="text-center mt-5">
        <Image src={BrandLogo} />
        <h2 className="text-gradient mt-3">JRTechIT</h2>
        <span className="text-light">Forgot your password</span>
      </header>
      <div className="mt-5 p-0 px-md-5">
        <FormGroup>
          <FormLabel className="text-muted">Email Address</FormLabel>
          <TextField
            type="email"
            startIcon={faEnvelope}
            className="form-control-dark"
          />
          <span className="text-muted d-block">
            Enter your email and we will send you a link to reset password.
          </span>
        </FormGroup>
        <FormGroup className="mt-4">
          <Button variant="primary" className="py-2 w-50">
            Reset
          </Button>
          <Link to="/login">
            <Button variant="outline-primary float-right" className="py-2 w-25">
              <FontAwesomeIcon icon={faBackspace} className="mr-2" />
              Cancel
            </Button>
          </Link>
        </FormGroup>
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
