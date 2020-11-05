import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Layout, NavDrawer, ProductSection } from "components";

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row style={{ marginLeft: 45 }}>
          <Col md={3} className="drawer-col-md-3">
            <NavDrawer />
          </Col>
          <Col md={9}>
            <div className="mt-3">
              <ProductSection title={"iPhone"} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
