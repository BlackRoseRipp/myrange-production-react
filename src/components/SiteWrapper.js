import React, { Fragment } from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const SiteWrapper = (props) => {
  return (
    <Fragment>
      <Nav />
      <Footer />
    </Fragment>
  );
};

export default SiteWrapper;
