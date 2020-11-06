import React from "react";
import {
  Container,
  Table,
  Image,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "components";
import DummyProduct from "assets/dummy-mobile.png";

const Cart = () => {
  return (
    <Layout>
      <Container className="bg-white my-5 p-5">
        <header>
          <h2>Cart</h2>
          <hr />
        </header>
        <Table className="border">
          <thead className="bg-light">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="font-weight-bold">
            <tr>
              <td>
                <Image src={DummyProduct} width={80} />
              </td>
              <td>iPhone 11 - 64GB, White</td>
              <td>$6,500.00</td>
              <td>
                <FormControl
                  type="number"
                  className="rounded-0"
                  style={{ width: 60 }}
                />
              </td>
              <td>$6,500.00</td>
              <td className="text-center">
                <FontAwesomeIcon icon={faTrashAlt} className="text-danger" />
              </td>
            </tr>
            <tr>
              <td>
                <Image src={DummyProduct} width={80} />
              </td>
              <td>iPhone 11 - 256, Red</td>
              <td>$7,500.00</td>
              <td>
                <FormControl
                  type="number"
                  className="rounded-0"
                  style={{ width: 60 }}
                />
              </td>
              <td>$7,500.00</td>
              <td className="text-center">
                <FontAwesomeIcon icon={faTrashAlt} className="text-danger" />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <FormControl type="text" className="rounded-0" />
              </td>
              <td>
                <Button variant="dark" className="rounded-0 w-100">
                  Apply coupon
                </Button>
              </td>
              <td colSpan={2}></td>
              <td>
                <Button variant="dark" className="rounded-0 w-100">
                  Update Cart
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col md={5}>
            <Table className="mt-4 border">
              <thead className="bg-light">
                <th className="font-weight-bolder">Cart Total</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">Subtotal</td>
                  <td className="py-3">$29,000.00</td>
                </tr>
                <tr>
                  <td className="py-3">Total</td>
                  <td className="py-3">$29,000.00</td>
                </tr>
                <tr>
                  <td className="py-3" colSpan={2}>
                    <Button variant="dark" className="rounded-0 w-100">
                      Proceed to Checkout
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
