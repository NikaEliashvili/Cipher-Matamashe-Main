import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import useSidebarStore from "../../store/sidebarStore";
import { BREAK_POINT } from "../../constants/constants";

const Sidebar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isOpen = useSidebarStore((state) => state.isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const toggleSidebar = useSidebarStore(
    (state) => state.toggleSidebar
  );

  const toggleSidebarLocal = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        toggleSidebar();
        setIsClosing(false);
      }, 290);
    } else {
      toggleSidebar();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > BREAK_POINT && isOpen) {
        toggleSidebar();
      }
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth > BREAK_POINT ? (
    <div className="sidebar">
      <div className="sidebar_frame">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "icon active" : "icon"
          }
        >
          <img src="/images/logos/logo_white.svg" />
        </NavLink>
        <div className="line" />
        <div className="routes">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "icon active" : "icon"
            }
          >
            <img
              width={16}
              height={16}
              src="/icons/home.svg"
              alt=""
            />
          </NavLink>
          <NavLink
            to={"products"}
            className={({ isActive }) =>
              isActive ? "icon active" : "icon"
            }
          >
            <img
              width={16}
              height={16}
              src="/icons/basket.svg"
              alt=""
            />
          </NavLink>
          <NavLink
            to={"gifts"}
            className={({ isActive }) =>
              isActive ? "icon active" : "icon"
            }
          >
            <img
              width={16}
              height={16}
              src="/icons/gift.svg"
              alt=""
            />
          </NavLink>
          <NavLink
            to={"history"}
            className={({ isActive }) =>
              isActive ? "icon active" : "icon"
            }
          >
            <img
              width={16}
              height={16}
              src="/icons/calendar.svg"
              alt=""
            />
          </NavLink>
          <NavLink
            to={"info"}
            className={({ isActive }) =>
              isActive ? "icon active" : "icon"
            }
          >
            <img
              width={16}
              height={16}
              src="/icons/info.svg"
              alt=""
            />
          </NavLink>
        </div>
        <div className="user-info">
          <img
            width={18}
            height={18}
            src="/icons/circle_help.svg"
            alt=""
          />
          <hr className="line bottom" />
          <div className="user-icon">
            <img src="/icons/user.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    isOpen && (
      <div className={"sidebar " + (isClosing ? "closing" : "")}>
        <div className="sidebar_frame">
          <div className="sidebar_header">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "icon active" : "icon"
              }
              onClick={toggleSidebarLocal}
            >
              <img src="/images/logos/logo_white.svg" />
            </NavLink>
            <div className="sidebar_close">
              <button
                onClick={toggleSidebarLocal}
                className="close_btn"
              >
                <img src="/icons/close_icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="routes">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "icon active" : "icon"
              }
              onClick={toggleSidebarLocal}
            >
              <img
                width={16}
                height={16}
                src="/icons/home.svg"
                alt=""
              />
              <span className="route_name">მთავარი</span>
            </NavLink>
            <NavLink
              to={"products"}
              className={({ isActive }) =>
                isActive ? "icon active" : "icon"
              }
              onClick={toggleSidebarLocal}
            >
              <img
                width={16}
                height={16}
                src="/icons/basket.svg"
                alt=""
              />
              <span className="route_name">პროდუქცია</span>
            </NavLink>
            <NavLink
              to={"gifts"}
              className={({ isActive }) =>
                isActive ? "icon active" : "icon"
              }
              onClick={toggleSidebarLocal}
            >
              <img
                width={16}
                height={16}
                src="/icons/gift.svg"
                alt=""
              />
              <span className="route_name">საჩუქრები</span>
            </NavLink>
            <NavLink
              to={"history"}
              className={({ isActive }) =>
                isActive ? "icon active" : "icon"
              }
              onClick={toggleSidebarLocal}
            >
              <img
                width={16}
                height={16}
                src="/icons/calendar.svg"
                alt=""
              />
              <span className="route_name">შეკვეთების ისტორია</span>
            </NavLink>
            <NavLink
              to={"info"}
              className={({ isActive }) =>
                isActive ? "icon active" : "icon"
              }
              onClick={toggleSidebarLocal}
            >
              <img
                width={16}
                height={16}
                src="/icons/info.svg"
                alt=""
              />
              <span className="route_name">ინფორმაცია</span>
            </NavLink>
            <NavLink
              to={"search"}
              className={({ isActive }) =>
                isActive ? "icon active" : "icon"
              }
              onClick={toggleSidebarLocal}
            >
              <img
                width={16}
                height={16}
                src="/icons/search_icon.svg"
                alt=""
              />
              <span className="route_name">ძებნა</span>
            </NavLink>
          </div>
          <div className="user-info">
            <div className="help_center">
              <div className="help_icon-container">
                <img
                  width={18}
                  height={18}
                  src="/icons/circle_help.svg"
                  alt=""
                  className="help_icon"
                />
              </div>
              <span className="title">დახმარება</span>
            </div>
            {/* <hr className="line bottom" /> */}
            <div className="profile">
              <div className="user-icon">
                <img src="/icons/user.svg" alt="" />
              </div>
              <span className="profile_name">სახელი</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
