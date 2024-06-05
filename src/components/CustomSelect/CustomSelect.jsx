// src/CustomSelect.js
import React, { useState, useRef, useEffect } from "react";
import "./customSelect.css";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options?.[0]);
  const selectRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <div
        className={"select-display " + (isOpen ? "focused" : "")}
        onClick={toggleOpen}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`select-arrow ${isOpen ? "open" : ""}`}>
          <FaChevronDown />
        </span>
      </div>
      {isOpen && (
        <div className="select-options">
          {options?.map((option) =>
            selectedOption?.value !== option?.value ? (
              <div
                key={option?.value}
                className={`select-option ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
