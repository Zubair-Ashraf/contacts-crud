import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Layout, ProductCard } from "components";

const CategoryProduct = ({
  history: {
    location: {
      state: { title },
    },
  },
}) => {
  return (
    <Layout>
      <Container fluid>
        <header className="my-5">
          <h1 className="text-center font-weight-bolder">{title}</h1>
        </header>
        <Row>
          {[0, 1, 2, 3, 4].map(() => (
            <Col md={3} className={"my-2"}>
              <ProductCard />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default withRouter(CategoryProduct);
