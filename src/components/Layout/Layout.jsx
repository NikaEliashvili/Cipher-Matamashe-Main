import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.css";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="header_outlet-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
