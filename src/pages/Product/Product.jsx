import { useParams } from "react-router-dom";
import "./product.css";

import React from "react";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="product_page">
      <h2>პროდუქტის გვერდი</h2>
      <p>პროდუქტის ID: {id}</p>
    </div>
  );
};

export default Product;
