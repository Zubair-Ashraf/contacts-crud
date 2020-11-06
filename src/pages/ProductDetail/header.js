import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Selector } from "components";
import ProductImage from "assets/dummy-mobile.png";

const Header = () => {
  const [clear, setClear] = useState(false);

  return (
    <Row>
      <Col md={6} className="mt-3">
        <Image src={ProductImage} width={600} />
      </Col>
      <Col md={6} className="mt-3">
        <h2>iPhone 11</h2>
        <h4 className="extra-bold my-4 text-muted">$6,500.00 – $7,500.00</h4>
        <Selector
          title={"Storage"}
          options={["64GB", "128GB", "256GB"]}
          clearFilter={clear}
        />
        <Selector
          title={"Color"}
          options={["Black", "White", "Red", "Purple", "Green", "Yellow"]}
          clearFilter={clear}
        />
        <Link className="text-muted" onClick={() => setClear(true)}>
          {" "}
          <FontAwesomeIcon icon={faFilter} className="mr-1 text-danger" />
          Clear Filter
        </Link>
        <hr />
        <h4 className="my-3 font-weight-bolder">$7,000.00</h4>
        <div className="d-flex">
          <FormControl
            type="number"
            className="mr-2 rounded-0"
            style={{ width: 70 }}
          />
          <Button variant="dark rounded-0 px-5">Add to cart</Button>
        </div>
        <hr />
        <h6>SKU: N/A</h6>
        <h6>Categories: iPhone, Pre owned</h6>
      </Col>
    </Row>
  );
};

export default Header;
