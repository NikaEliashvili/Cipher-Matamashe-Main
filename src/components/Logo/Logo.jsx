import React from "react";
import "./logo.css";
export default function Logo({
  themeColor = "black",
  subtitle = "ადმინ პანელი",
}) {
  return themeColor === "white" ? (
    <div className="logo">
      <img src="/images/logos/logo_white.svg" alt="" />
      <div className="logo-title-container-white">
        <img src="/images/logos/logo_text_white.svg" alt="მათამაშე" />
        <span className="logo-page-title">{subtitle}</span>
      </div>
    </div>
  ) : (
    <div className="logo">
      <img src="/images/logos/logo_black.svg" alt="" />
      <div className="logo-title-container-black">
        <h1 className="logo-title">მათამაშე</h1>
        <span className="logo-page-title">ადმინ პანელი</span>
      </div>
    </div>
  );
}
