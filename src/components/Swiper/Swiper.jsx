import React, { useState, useRef, useEffect } from "react";
import "./swiper.css";

const Swiper = ({ children, showArrows = true, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperContainerRef = useRef(null);
  const totalSlides = React.Children.count(children);

  const handleScroll = (direction) => {
    const container = swiperContainerRef.current;
    const scrollAmount = container.clientWidth;
    if (direction === "left" && currentIndex > 0) {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (
      direction === "right" &&
      currentIndex < totalSlides - 1
    ) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Change currentIndex correctly!
    const container = swiperContainerRef.current;
    const handleManualScroll = () => {
      const container = swiperContainerRef.current;
      const newIndex = Math.round(
        container.scrollLeft / container.clientWidth
      );

      const children = container.querySelectorAll(".swiper-slide");

      for (let i = 0; i < children.length; i++) {
        if (i !== newIndex) {
          children[i].classList.add("inActive");
        } else {
          children[i].classList.remove("inActive");
        }
      }

      setCurrentIndex(newIndex);
    };

    // handleManualScroll();

    container.addEventListener("scroll", handleManualScroll);

    return () => {
      container.removeEventListener("scroll", handleManualScroll);
    };
  }, []);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  return (
    <div className="swiper">
      {showArrows && totalSlides > 1 && (
        <div className="swiper_arrows">
          <button
            className={"arrow left"}
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
          >
            <img
              style={{ transform: "rotate(180deg)", width: "6px" }}
              src="/icons/arrow.svg"
              alt=""
            />
          </button>
          <button
            className={"arrow right"}
            onClick={() => handleScroll("right")}
            disabled={currentIndex === totalSlides - 1}
          >
            <img
              style={{ width: "6px" }}
              src="/icons/arrow.svg"
              alt=""
            />
          </button>
        </div>
      )}
      <div className="swiper-container" ref={swiperContainerRef}>
        {children.map((child, index) => (
          <div className="swiper-slide" key={index + 100}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
