import React from "react";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="px-3 lg:px-28">{props.children}</div>
    </>
  );
};

export default Layout;
