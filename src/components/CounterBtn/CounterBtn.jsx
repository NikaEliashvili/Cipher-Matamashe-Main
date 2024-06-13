import "./counterBtn.css";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const CounterBtn = ({
  productAmountDecrement = () => {},
  productAmountIncrement = () => {},
  productAmount = 1,
}) => {
  return (
    <div className="amount_btn">
      <button
        onClick={productAmountDecrement}
        className={
          "arrow_btn " + (productAmount === 1 ? "disabled" : "")
        }
        disabled={productAmount <= 1}
      >
        <IoIosArrowBack />
      </button>
      <span className="amount_number">{productAmount}</span>
      <button
        onClick={productAmountIncrement}
        className={"arrow_btn "}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default CounterBtn;
