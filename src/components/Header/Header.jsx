import Balance from "../Balance/Balance";
import NotificationButton from "../NotificationButton/NotificationButton";
import SearchInput from "../SearchInput/SearchInput";
import "./header.css";
import React from "react";
import useuseSidebarStore from "../../store/useSidebarStore";
import { BREAK_POINT } from "../../constants/constants";
import useScreenStore from "../../store/useScreenStore";
import useModalStore from "../../store/useModalStore";
import SearchInputModal from "../../modals/SearchInputModal/SearchInputModal";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const openSearchModal = useModalStore((state) => state.openModal);
  const screenWidth = useScreenStore((state) => state.screenWidth);
  const toggleSidebar = useuseSidebarStore(
    (state) => state.toggleSidebar
  );

  // if (
  //   location.pathname.includes("profile/signup") ||
  //   location.pathname.includes("profile/signin")
  // ) {
  //   return null;
  // }

  return (
    <div className="main_header">
      {screenWidth > BREAK_POINT ? (
        <SearchInput />
      ) : (
        <>
          <div className="menu_btn" onClick={toggleSidebar}>
            <img
              className="matamashe_logo"
              src="/images/logos/Logo.png"
            />
            <span className="menu_text">Menu</span>
          </div>
        </>
      )}
      <div className="notification_Balace-container">
        <NotificationButton />
        <Balance />
        {screenWidth <= BREAK_POINT && (
          <>
            <div
              className="search-input-btn"
              onClick={openSearchModal}
            >
              <div className="search_icon">
                <img
                  className="search_icon_img"
                  src="/icons/search_icon.svg"
                  alt="search"
                />
              </div>
            </div>
            <SearchInputModal />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
