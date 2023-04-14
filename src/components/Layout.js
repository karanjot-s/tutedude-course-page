import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        height: "100%",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
