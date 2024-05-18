import { useLocation, useNavigate } from "react-router-dom";
import "./searchInput.css";
import React, { useState } from "react";
import useModalStore from "../../store/useModalStore";
import useScreenStore from "../../store/useScreenStore";
import { BREAK_POINT } from "../../constants/constants";

const SearchInput = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const screenWidth = useScreenStore((state) => state.screenWidth);
  const closeSearchModal = useModalStore((state) => state.closeModal);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }

    if (screenWidth < BREAK_POINT) {
      // Close Search Modal
      closeSearchModal();
    } else {
      setSearchTerm("");
    }

    //  Save Last Visited Page
    const encodedSearchTerm = encodeURIComponent(searchTerm.trim());
    if (location.pathname.includes("search")) {
      navigate(`/search?searchTerm=${encodedSearchTerm}`, {
        state: { from: location.state.from },
      });
    } else {
      navigate(`/search?searchTerm=${encodedSearchTerm}`, {
        state: { from: location.pathname + location.search },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-input">
      <input
        type="search"
        onChange={handleSearchInput}
        value={searchTerm}
        placeholder="ძიება..."
      />
      <div className="search_icon">
        <img
          className="search_icon_img"
          src="/icons/search_icon.svg"
          alt="search"
        />
      </div>
    </form>
  );
};

export default SearchInput;
