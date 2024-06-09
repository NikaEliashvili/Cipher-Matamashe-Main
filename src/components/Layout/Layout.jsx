import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollUp from "../ScrollUp/ScrollUp";

const Layout = () => {
  const location = useLocation();

  return (
    <div
      className={
        "layout " +
        (location.pathname.includes("/profile/sign") ? "bg" : "")
      }
    >
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
