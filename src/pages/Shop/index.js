import React from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { Layout, ProductCard, NavDrawer } from "components";

const Shop = () => {
  return (
    <Layout>
      <Container fluid>
        <Row style={{ marginLeft: 45 }}>
          <Col md={3} className="drawer-col-md-3">
            <NavDrawer />
          </Col>
          <Col md={9} className={"mt-3"}>
            <header className="border-bottom py-2 d-flex justify-content-between">
              <h3 className="font-weight-bolder">Shop</h3>
              <select className="px-2 rounded border-0">
                <option>Sort by popularity</option>
                <option>Sort by latest produuct</option>
                <option>Sort by price: Low to Hight</option>
                <option>Sort by price: Hight to Low</option>
              </select>
            </header>
            <Row>
              <Col md={4} className={"my-3"}>
                <ProductCard />
              </Col>
              <Col md={4} className={"my-3"}>
                <ProductCard />
              </Col>
              <Col md={4} className={"my-3"}>
                <ProductCard />
              </Col>
              <Col md={4} className={"my-3"}>
                <ProductCard />
              </Col>
              <Col md={4} className={"my-3"}>
                <ProductCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Shop;
