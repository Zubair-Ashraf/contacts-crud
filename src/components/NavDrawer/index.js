import React from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const NavDrawer = ({
  history: {
    push,
    location: { pathname },
  },
}) => {
  return (
    <Nav className="flex-column nav-drawer" defaultActiveKey={pathname}>
      <Nav.Link eventKey="/ipad" className="pl-3 py-2">
        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> iPad
      </Nav.Link>
      <Nav.Link eventKey="/iphone" className="pl-3 py-2">
        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> iPhone
      </Nav.Link>
      <Nav.Link eventKey="/apple-watches" className="pl-3 py-2">
        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> Apple Watch
      </Nav.Link>
      <Nav.Link eventKey="/term-conditions" className="pl-3 py-2">
        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> MacBook
      </Nav.Link>
      <Nav.Link
        eventKey="/shop"
        className="pl-3 py-2"
        onClick={() => push("/shop")}
      >
        <FontAwesomeIcon icon={faPlusSquare} className="mr-2" /> See More
      </Nav.Link>
    </Nav>
  );
};

export default withRouter(NavDrawer);
