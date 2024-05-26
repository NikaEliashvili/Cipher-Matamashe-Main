import { FaArrowLeftLong } from "react-icons/fa6";
import "./scrollUp.css";

import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  if (!isVisible && !shouldRender) return null;
  console.log({ isVisible, shouldRender });
  return (
    <button
      onClick={scrollToTop}
      className={
        "scroll_up " + (isVisible && shouldRender ? "visible" : "")
      }
    >
      <FaArrowLeftLong className="arrow_icon" />
      <span>მაღლა</span>
    </button>
  );
};

export default ScrollUp;
