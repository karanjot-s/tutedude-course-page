import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        height: "100%",
      }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
