import React, { useEffect, useRef, useState } from "react";
import "./fullscreenModal.css";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const FullscreenModal = ({ isOpen, onClose, image }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (imageRef.current && !imageRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.classList.remove("no-scroll");
      }, 150);
      return () => {
        document.body.classList.remove("no-scroll");
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  if (!shouldRender && !isOpen) return null;

  return createPortal(
    <div
      className={
        "fullscreen_modal " + (isOpen && shouldRender ? "open" : "")
      }
    >
      <div
        className={
          "fullscreen_modal_content " +
          (isOpen && shouldRender ? "open" : "")
        }
      >
        <span className="close_button" onClick={onClose}>
          <IoClose />
        </span>
        <img
          ref={imageRef}
          src={image}
          alt="Fullscreen"
          className="fullscreen_image"
        />
      </div>
    </div>,
    document.body
  );
};

export default FullscreenModal;
