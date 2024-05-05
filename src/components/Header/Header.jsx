import Balance from "../Balance/Balance";
import NotificationButton from "../NotificationButton/NotificationButton";
import SearchInput from "../SearchInput/SearchInput";
import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <SearchInput />
      <div className="notification_Balace-container">
        <NotificationButton />
        <Balance />
      </div>
    </div>
  );
};

export default Header;
