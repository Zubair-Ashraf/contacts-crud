import React from "react";
import { Card, Button } from "react-bootstrap";
import DummyMobile from "assets/dummy-mobile.png";

const ProductCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={DummyMobile} className="p-3" />
      <Card.Body>
        <Card.Title className="font-weight-bolder">iPhone 8 Plus</Card.Title>
        <Card.Text className="font-weight-bolder text-muted">
          $3,600 - $4,000
        </Card.Text>
        <Button variant="dark" className="w-100 rounded-0">
          Select Option
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
