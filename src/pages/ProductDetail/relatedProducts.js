import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProductCard } from "components";

const RelatedProducts = () => {
  return (
    <Row>
      <Col xs={12}>
        <hr />
        <header className="my-4">
          <h4 className="font-weight-bold">Related products</h4>
        </header>
      </Col>
      {[0, 1, 2, 3].map(() => (
        <Col md={3}>
          <ProductCard />
        </Col>
      ))}
    </Row>
  );
};

export default RelatedProducts;
