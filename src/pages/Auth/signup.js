import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ZoomInAnimate } from "components";
import { SignupForm } from "forms";
import AuthCover from "assets/auth-cover.png";

const Signup = () => {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Col
          md={7}
          className="auth-wrapper d-none d-md-flex justify-content-center align-items-center"
        >
          <ZoomInAnimate>
            <div className="text-light">
              <Image src={AuthCover} />
            </div>
          </ZoomInAnimate>
        </Col>
        <Col md={5} className="bg-dark">
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
