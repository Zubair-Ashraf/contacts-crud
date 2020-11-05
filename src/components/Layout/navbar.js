import React from "react";
import { Navbar, Nav, Button, Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faBars,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import BrandLogo from "assets/brand-logo.png";

const Appbar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">
          <Image src={BrandLogo} width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-center">
            <Nav.Link className="bg-primary p-4 px-5 d-flex align-items-center rounded-top">
              <FontAwesomeIcon icon={faBars} />
              <h6 className="m-0 mx-3 text-uppercase">All categories</h6>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                className="float-right"
              />
            </Nav.Link>
            <Nav.Link className="ml-4">FAQ</Nav.Link>
            <Nav.Link className="ml-4">About us</Nav.Link>
            <Nav.Link className="ml-4">Contact us</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="navbar-icon">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button className="navbar-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Appbar;
