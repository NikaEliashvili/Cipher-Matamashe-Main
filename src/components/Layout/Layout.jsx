import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollUp from "../ScrollUp/ScrollUp";

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
      <ScrollUp />
    </div>
  );
};

export default Layout;
