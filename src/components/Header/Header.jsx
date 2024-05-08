import Balance from "../Balance/Balance";
import NotificationButton from "../NotificationButton/NotificationButton";
import SearchInput from "../SearchInput/SearchInput";
import "./header.css";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header">
      {screenWidth > 768 ? (
        <SearchInput />
      ) : (
        <img src="/images/logos/logo_white.svg" />
      )}
      <div className="notification_Balace-container">
        <NotificationButton />
        <Balance />
      </div>
    </div>
  );
};

export default Header;
