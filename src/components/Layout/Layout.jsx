import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="header_outlet-container">
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
