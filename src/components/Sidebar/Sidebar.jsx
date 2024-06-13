import React, { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import usesidebarStore from "../../store/sidebarStore";
import { BREAK_POINT } from "../../constants/constants";
import useScreenStore from "../../store/screenStore";

const Sidebar = () => {
  const screenWidth = useScreenStore((state) => state.screenWidth);
  const containerRef = useRef(null);
  const [userName, setUserName] = useState(null);
  const [position, setPosition] = useState(null);
  const [isAbbrOpen, setIsAbbrOpen] = useState(false);
  const isOpen = usesidebarStore((state) => state.isOpen);
  const toggleSidebar = usesidebarStore(
    (state) => state.toggleSidebar
  );

  const getPosition = () => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      console.log(rect);
      setPosition({
        top: rect.top,
        left: rect.left + rect.width,
      });
      setIsAbbrOpen(true);
    }
  };

  const closeAbbr = () => {
    setIsAbbrOpen(false);
  };

  useEffect(() => {
    if (screenWidth > BREAK_POINT && isOpen) {
      toggleSidebar();
    }

    if (screenWidth <= BREAK_POINT && isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [screenWidth, isOpen]);

  return screenWidth > BREAK_POINT ? (
    <>
      <div
        style={{
          top: position?.top || 0,
          left: position?.left || 0,
          transform: "translate3d(0,-100%,0)",
        }}
        className={"help_btn_abbr " + (isAbbrOpen ? "open" : "")}
        onMouseOver={() => setIsAbbrOpen(true)}
        onMouseLeave={() => setIsAbbrOpen(false)}
      >
        <span className="help_btn_abbr_text">დახმარება</span>
      </div>

      <div className="sidebar">
        <div className="sidebar_frame">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "main_logo icon active" : "main_logo  icon"
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
              style={{ marginBottom: "2rem" }}
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
            <div
              ref={containerRef}
              onMouseOver={getPosition}
              onMouseLeave={closeAbbr}
              className="help_btn"
            >
              <img
                width={18}
                height={18}
                src="/icons/circle_help.svg"
                alt=""
              />
            </div>

            <hr className="line bottom" />
            <Link to={"profile"} className="user-icon">
              <img src="/icons/user.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className={"sidebar " + (isOpen ? "open" : "")}>
      <div className="sidebar_frame">
        <div className="sidebar_header">
          <img src="/images/logos/Logo.png" width={44} height={48} />
          <div className="sidebar_close">
            <button onClick={toggleSidebar} className="close_btn">
              <img src="/icons/close_icon.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="routes">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "route active" : "route"
            }
            onClick={toggleSidebar}
          >
            <div className="icon">
              <img
                width={16}
                height={16}
                src="/icons/home.svg"
                alt=""
              />
            </div>
            <span className="route_name">მთავარი</span>
          </NavLink>
          <NavLink
            to={"products"}
            className={({ isActive }) =>
              isActive ? "route active" : "route"
            }
            onClick={toggleSidebar}
          >
            <div className="icon">
              <img
                width={16}
                height={16}
                src="/icons/basket.svg"
                alt=""
              />
            </div>
            <span className="route_name">პროდუქცია</span>
          </NavLink>
          <NavLink
            to={"gifts"}
            className={({ isActive }) =>
              isActive ? "route active" : "route"
            }
            onClick={toggleSidebar}
          >
            <div className="icon">
              <img
                width={16}
                height={16}
                src="/icons/gift.svg"
                alt=""
              />
            </div>
            <span className="route_name">საჩუქრები</span>
          </NavLink>
          <NavLink
            to={"history"}
            className={({ isActive }) =>
              isActive ? "route active" : "route"
            }
            onClick={toggleSidebar}
          >
            <div className="icon">
              <img
                width={16}
                height={16}
                src="/icons/calendar.svg"
                alt=""
              />
            </div>
            <span className="route_name">შეკვეთების ისტორია</span>
          </NavLink>
          <NavLink
            to={"info"}
            className={({ isActive }) =>
              isActive ? "route active" : "route"
            }
            onClick={toggleSidebar}
          >
            <div className="icon">
              <img
                width={16}
                height={16}
                src="/icons/info.svg"
                alt=""
              />
            </div>
            <span className="route_name">ინფორმაცია</span>
          </NavLink>
        </div>
        <div className="user-info">
          <NavLink
            to={"help_center"}
            className={({ isActive }) =>
              isActive ? "icon active" : "icon"
            }
            onClick={toggleSidebar}
          >
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
          </NavLink>
          <NavLink
            to={"profile"}
            className={({ isActive }) =>
              isActive ? "icon active" : "icon"
            }
            onClick={toggleSidebar}
          >
            <div className="profile">
              <div className="user-icon">
                <img src="/icons/user.svg" alt="" />
              </div>
              <span className="profile_name">
                {userName || "შესვლა"}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
