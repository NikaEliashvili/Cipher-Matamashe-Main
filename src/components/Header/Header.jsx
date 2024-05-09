import Balance from "../Balance/Balance";
import NotificationButton from "../NotificationButton/NotificationButton";
import SearchInput from "../SearchInput/SearchInput";
import "./header.css";
import React, { useEffect, useState } from "react";
import useSidebarStore from "../../store/sidebarStore";
import { BREAK_POINT } from "../../constants/constants";
const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleSidebar = useSidebarStore(
    (state) => state.toggleSidebar
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header">
      {screenWidth > BREAK_POINT ? (
        <SearchInput />
      ) : (
        <div className="menu_btn" onClick={toggleSidebar}>
          <img src="/images/logos/logo_white.svg" />
          <span className="menu_text">Menu</span>
        </div>
      )}
      <div className="notification_Balace-container">
        <NotificationButton />
        <Balance />
      </div>
    </div>
  );
};

export default Header;
