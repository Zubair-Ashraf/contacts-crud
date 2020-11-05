import React from "react";
import { Container, Row, Col, Form, Nav } from "react-bootstrap";
import { Layout } from "components";

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row style={{ marginLeft: 45 }}>
          <Col md={3} className="drawer-col-md-3">
            <Nav className="flex-column nav-drawer">
              <Nav.Link eventKey="/settings/profile" className="pl-3 py-2">
                Hello
              </Nav.Link>
              <Nav.Link eventKey="/settings/security" className="pl-3 py-2">
                Hello
              </Nav.Link>
              <Nav.Link eventKey="/term-conditions" className="pl-3 py-2">
                Hello
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
