import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    screenWidth > 768 && (
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
              to={"store"}
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
              to={"calendar"}
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
    )
  );
};

export default Sidebar;
