import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { ProductCard } from "components";

const ProductSection = ({ title }) => {
  return (
    <section>
      <header className="mb-3">
        <div className="p-2 rounded-pill bg-white heading-strip d-flex align-items-center">
          <div
            className="icon-button"
            style={{ background: "rgba(255, 92, 183,0.3)" }}
          >
            <FontAwesomeIcon
              icon={faMobileAlt}
              style={{ color: "rgb(255, 92, 183)" }}
            />
          </div>
          <h6 className="font-weight-bolder m-0 ml-2">{title}</h6>
        </div>
      </header>
      <Row>
        <Col md={4}>
          <ProductCard />
        </Col>
        <Col md={4}>
          <ProductCard />
        </Col>
        <Col md={4}>
          <ProductCard />
        </Col>
      </Row>
    </section>
  );
};

export default ProductSection;
