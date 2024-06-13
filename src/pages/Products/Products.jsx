import React, { useEffect, useRef, useState } from "react";
import "./products.css";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { cardDataExample } from "../Home/Home";
import ProductCard from "../../components/ProductCard/ProductCard";
import useScreenStore from "../../store/screenStore";
const options = [
  { value: "newest", label: "ახალი დამატებული" },
  { value: "oldest", label: "ძველი დამატებული" },
  { value: "price_ascending", label: "ფასის ზრდადობით" },
  { value: "price_descending", label: "ფასის კლებადობით" },
  { value: "by_discount", label: "ფასდაკლების მიხედვით" },
];
const Products = () => {
  const screenWidth = useScreenStore((state) => state.screenWidth);
  const [numColumns, setNumColumns] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setNumColumns(5);
    } else if (screenWidth >= 1024) {
      setNumColumns(4);
    } else if (screenWidth >= 565) {
      setNumColumns(3);
    } else if (screenWidth >= 376) {
      setNumColumns(2);
    } else {
      setNumColumns(1);
    }
  }, [screenWidth]);

  return (
    <div className="products_page">
      <div className="filer_selection">
        <CustomSelect options={options} />
      </div>
      <div
        ref={contentRef}
        className={`game_cards_container columns-${numColumns}`}
      >
        {cardDataExample.map((data, index) => (
          <ProductCard key={index + 100} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
