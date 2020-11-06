import React from "react";
import { Container } from "react-bootstrap";
import { Layout } from "components";
import Header from "./header";
import Description from "./description";
import RelatedProducts from "./relatedProducts";

const ProductDetail = () => {
  return (
    <Layout>
      <Container fluid>
        <div className="bg-white m-3 mt-5 p-5">
          <Header />
          <Description />
          <RelatedProducts />
        </div>
      </Container>
    </Layout>
  );
};

export default ProductDetail;
