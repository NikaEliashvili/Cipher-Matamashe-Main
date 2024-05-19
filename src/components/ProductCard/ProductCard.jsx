import { Link } from "react-router-dom";
import "./productCard.css";

import React from "react";

const ProductCard = ({ data }) => {
  const addDefaultImg = (ev) => {
    ev.target.src = "/icons/picture.svg";
    ev.target.classList.add("default_img");
  };

  return (
    <Link
      to={`/products/${data?.id}`}
      className={
        "product_card_outer " +
        (data?.oldPrice ? "discounted " : "") +
        (data?.amount === 0 ? "not_in_stock" : "")
      }
    >
      {data?.amount === 0 && (
        <div className="not_in_stock">
          <span>არ არის მარაგში</span>
        </div>
      )}
      <div className={"product_card"}>
        <div className="image_container">
          <img
            className="image"
            src={data?.imgUrl}
            onError={addDefaultImg}
            alt=""
          />
        </div>
        <h3 className="product_title">{data?.title}</h3>
        <span className="product_developer">{data?.developer}</span>
        <div className="product_prices">
          <span className="product_price">{data?.price}</span>
          {data?.oldPrice && (
            <span className="old_price">{data.oldPrice}</span>
          )}
        </div>
        <div className="product_consoles">
          {data?.consoles?.map((c, index) => (
            <p key={index + 1000} className={"product_console " + c}>
              {c}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
