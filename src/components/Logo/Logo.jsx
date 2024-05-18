import React from "react";
import "./logo.css";
export default function Logo({
  themeColor = "black",
  subtitle = "ადმინ პანელი",
}) {
  return themeColor === "white" || !themeColor ? (
    <div className="logo">
      <img src="/images/logos/logo_white.svg" alt="" />
      <div className="logo-title-container-white">
        <img src="/images/logos/logo_text_white.svg" alt="მათამაშე" />
        <span className="logo-page-title">{subtitle}</span>
      </div>
    </div>
  ) : themeColor === "black" ? (
    <div className="logo">
      <img src="/images/logos/logo_black.svg" alt="" />
      <div className="logo-title-container-black">
        <h1 className="logo-title">მათამაშე</h1>
        <span className="logo-page-title">ადმინ პანელი</span>
      </div>
    </div>
  ) : themeColor === "colored" ? (
    <div className="logo">
      <img width={35} src="/images/logos/Logo_colored_1.png" alt="" />
      <div className="logo-title-container-colored">
        <img src="/images/logos/logo_text_white.svg" alt="" />
        {/* <h1 className="logo-title">მათამაშე</h1> */}
        <span className="logo-page-title">{subtitle}</span>
      </div>
    </div>
  ) : null;
}
