import React from "react";
import "./input.css";
export default function Input({
  label,
  type,
  placeholder,
  showPass,
  icon,
  name,
  value,
  onChange,
  maxLength,
  errorMessage,
  onClick = () => {},
}) {
  return (
    <div className="input-component">
      <div className="input-field">
        <input
          className={errorMessage ? "on-error" : null}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onClick={onClick}
          id={name}
          maxLength={maxLength || null}
          required
        />
        <label htmlFor={name}>{label}</label>
        {showPass
          ? icon && (
              <img
                onClick={showPass}
                className="icon pointer"
                src={icon}
                alt=""
              />
            )
          : icon && <img className="icon" src={icon} alt="" />}
      </div>
      <p className="error-msg">{errorMessage}</p>
    </div>
  );
}
