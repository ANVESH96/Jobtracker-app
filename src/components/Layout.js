import React from "react";
import Navigation from "./Navbar";

const Layout = ({ children }) => (
  <div>
    <Navigation /> <main>{children}</main>
  </div>
);

export default Layout;
