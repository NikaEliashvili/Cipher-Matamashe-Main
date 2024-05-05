import "./balance.css";
import React from "react";

const Balance = () => {
  return (
    <div className="balance">
      <span className="dollar_sign">$</span>
      <span className="balance_amount">
        {(0.0).toFixed(2).replace(".", ",")}
      </span>
    </div>
  );
};

export default Balance;
