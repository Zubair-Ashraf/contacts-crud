import React, { Fragment } from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
