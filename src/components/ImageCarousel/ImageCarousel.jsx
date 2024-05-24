import FullscreenModal from "../../modals/FullscreenModal/FullscreenModal";
import "./imageCarousel.css";
import React, { useEffect, useRef, useState } from "react";

const ImageCarousel = ({ images }) => {
  const scrollContainerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const openFullscreen = () => {
    setIsFullscreenOpen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };

  useEffect(() => {
    const closeWithESC = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        closeFullscreen();
      }
    };
    document.addEventListener("keydown", closeWithESC);
    return () => {
      document.removeEventListener("keydown", closeWithESC);
    };
  });

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const onWheel = (e) => {
      if (!e.shiftKey && e.deltaY !== 0) {
        e.preventDefault(); // Prevent default vertical scroll
        setTimeout(() => {
          console.log("scrolled: ", Math.floor(e.deltaY));
          scrollContainer.scrollBy({
            left:
              e.deltaY > 0
                ? Math.floor(e.deltaY) + 30
                : Math.floor(e.deltaY) - 30,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    scrollContainer.addEventListener("wheel", onWheel);
    return () => {
      scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="image_carousel">
      <div className="active_image">
        <div className="fullscreen_btn" onClick={openFullscreen}>
          <img
            className="fullscreent_icon"
            src="/icons/fullscreen.svg"
            alt=""
          />
        </div>
        <img className="img" src={images[activeImage]} alt="" />
      </div>
      <div className="images_slider_outer">
        <div className="images_slider" ref={scrollContainerRef}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(index)}
              className={
                "img_div " + (index === activeImage ? "active" : "")
              }
            >
              <img src={image} alt="" className={"img"} />
            </div>
          ))}
        </div>
        <div className="gradient_overlay"></div>
      </div>
      <FullscreenModal
        isOpen={isFullscreenOpen}
        onClose={closeFullscreen}
        image={images[activeImage]}
      />
    </div>
  );
};

export default ImageCarousel;
