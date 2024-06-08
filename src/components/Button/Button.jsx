import classNames from "classnames";
import "./button.css";
import React from "react";

const Button = ({
  children,
  size,
  variant = "primary",
  className,
  ...rest
}) => {
  const allClassNames = classNames(
    size,
    variant,
    className,
    "custom_button"
  );
  return (
    <button className={allClassNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
