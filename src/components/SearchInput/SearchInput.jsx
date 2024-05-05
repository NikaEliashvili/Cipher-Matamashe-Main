import "./searchInput.css";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        onChange={handleSearchInput}
        value={searchTerm}
        placeholder="ძიება..."
      />
      <div className="search_icon">
        <img src="/icons/search_icon.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchInput;
