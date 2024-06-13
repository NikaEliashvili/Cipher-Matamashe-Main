import useCartStore from "../../store/cartStore";
import "./cart.css";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import CounterBtn from "../../components/CounterBtn/CounterBtn";

const Cart = () => {
  const { cart } = useCartStore();
  const [productAmount, setProductAmount] = useState(1);

  const productAmountIncrement = () => {
    // setProductPrice(PRODUCT_PRICE * (productAmount + 1));
    setProductAmount((prevAmount) => prevAmount + 1);
  };
  const productAmountDecrement = () => {
    // setProductPrice(PRODUCT_PRICE * (productAmount - 1));
    setProductAmount((prevAmount) => prevAmount - 1);
  };

  return (
    <div className="cart_page">
      <div className="cart_page_header">
        <div className="header_info">
          <h3 className="title">კალათა</h3>
          <p className="subtitle">2 პროდუქტი</p>
        </div>
        <div className="clear_btn_container">
          <Button className="clear_btn">კალათის გასუფთავება</Button>
        </div>
      </div>
      <div className="items_container">
        <div className="cart_item">
          <div className="img_container">
            <img src="/images/modern_warfare.png" alt="" />
          </div>
          <div className="cart_content">
            <div className="container_1">
              <h1 className="title">Call of Duty Modern Warfare 3</h1>
              <div className="categories">
                <p className="category">
                  კატეგორია:
                  <span className="category_name">PlayStation 5</span>
                </p>
                <p className="version">
                  ვერსია:
                  <span className="version_name">Primary</span>
                </p>
              </div>
              <CounterBtn
                productAmount={productAmount}
                productAmountIncrement={productAmountIncrement}
                productAmountDecrement={productAmountDecrement}
              />
            </div>
            <div className="container_2">
              <div>
                <p className="product_console">PS5</p>
                <div className="delete_btn">
                  <img
                    src="/icons/delete_icon.svg"
                    alt=""
                    className="delete_btn_icon"
                  />
                </div>
              </div>
              <div className="item_id">#2941023</div>
              <p className="total_price">1999,99₾</p>
            </div>
          </div>
        </div>
        <div className="cart_item">
          <div className="img_container">
            <img src="/images/modern_warfare.png" alt="" />
          </div>
          <div className="cart_content">
            <div className="container_1">
              <h1 className="title">Call of Duty Modern Warfare 3</h1>
              <div className="categories">
                <p className="category">
                  კატეგორია:
                  <span className="category_name">PlayStation 5</span>
                </p>
                <p className="version">
                  ვერსია:
                  <span className="version_name">Primary</span>
                </p>
              </div>
              <CounterBtn
                productAmount={productAmount}
                productAmountIncrement={productAmountIncrement}
                productAmountDecrement={productAmountDecrement}
              />
            </div>
            <div className="container_2">
              <div>
                <p className="product_console">PS5</p>
                <div className="delete_btn">
                  <img
                    src="/icons/delete_icon.svg"
                    alt=""
                    className="delete_btn_icon"
                  />
                </div>
              </div>
              <div className="item_id">#2941023</div>
              <p className="total_price">1999,99₾</p>
            </div>
          </div>
        </div>
        <div className="cart_item">
          <div className="img_container">
            <img src="/images/modern_warfare.png" alt="" />
          </div>
          <div className="cart_content">
            <div className="container_1">
              <h1 className="title">Call of Duty Modern Warfare 3</h1>
              <div className="categories">
                <p className="category">
                  კატეგორია:
                  <span className="category_name">PlayStation 5</span>
                </p>
                <p className="version">
                  ვერსია:
                  <span className="version_name">Primary</span>
                </p>
              </div>
              <CounterBtn
                productAmount={productAmount}
                productAmountIncrement={productAmountIncrement}
                productAmountDecrement={productAmountDecrement}
              />
            </div>
            <div className="container_2">
              <div>
                <p className="product_console">PS5</p>
                <div className="delete_btn">
                  <img
                    src="/icons/delete_icon.svg"
                    alt=""
                    className="delete_btn_icon"
                  />
                </div>
              </div>
              <div className="item_id">#2941023</div>
              <p className="total_price">1999,99₾</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
