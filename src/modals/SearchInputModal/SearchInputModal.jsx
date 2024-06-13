import "./searchInputModal.css";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useModalStore from "../../store/modalStore";
import SearchInput from "../../components/SearchInput/SearchInput";

const SearchInputModal = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const isOpen = useModalStore((state) => state.isModalOpen);
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender && !isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div
        className={"modal " + (isOpen && shouldRender ? "open" : "")}
        ref={ref}
      >
        <SearchInput />
      </div>
    </div>,
    document.body
  );
};

export default SearchInputModal;
