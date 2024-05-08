import "./home.css";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardView, setCardView] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hidden = { display: "none" };

  return (
    <div className="home_page">
      <div className="header_container">
        <h1 className="title">ახალი გამოსული თამაშები</h1>
        <span className="subtitle">ყველა ჟანრში</span>
      </div>
      {screenWidth <= 768 && (
        <div className="card_arrows">
          <button
            className="arrow"
            onClick={() => {
              setCardView(1);
            }}
            disabled={cardView === 1}
          >
            <img
              style={{ transform: "rotate(180deg)", width: "6px" }}
              src="/icons/arrow.svg"
              alt=""
            />
          </button>
          <button
            className="arrow"
            onClick={() => {
              setCardView(2);
            }}
            disabled={cardView === 2}
          >
            <img
              style={{ width: "6px" }}
              src="/icons/arrow.svg"
              alt=""
            />
          </button>
        </div>
      )}
      <div className="cards_container">
        {screenWidth > 768 ? (
          <>
            {mainCard}
            {SecondaryCard}
          </>
        ) : (
          <div className="swiper">
            <div
              className={
                cardView === 1 ? "main appear" : "main disappear"
              }
            >
              {mainCard}
            </div>
            <div
              className={
                cardView === 2
                  ? "secondary appear"
                  : "secondary disappear"
              }
            >
              {SecondaryCard}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mainCard = (
  <div className="main_card">
    <img className="image" src="/images/main_card_ex.png" alt="" />
    <div className="card_content">
      <div className="header">
        <div className="title_container">
          <h2 className="title">Skull and Bones</h2>
          <span className="developer">Ubisoft</span>
        </div>
        <div className="categories">
          <div className="category">PS5</div>
        </div>
      </div>
      <div className="description">
        Enter the perilous world of Skull and Bones, a co-op pirate
        open world action-RPG experience, to become the most infamous
        pirate kingpin! Engage in thrilling naval battles, craft a
        variety of unique ships, forge unlikely alliances as you
        overcome the odds, and bring mayhem on the seas.
      </div>
      <div className="price_tags_container">
        <div className="price_container">
          <span className="price">399,99₾</span>
          <a href="/products/1" className="more_details">
            დეტალურად
            <img
              className="details_btn_icon"
              src="/icons/details_icon.svg"
              alt=""
              width={18}
              height={18}
            />
          </a>
        </div>
        <div className="tags">
          <span className="tag">Action-adventure</span>
          <span className="tag">Shooter</span>
        </div>
      </div>
    </div>
  </div>
);

const SecondaryCard = (
  <div className="secondary_card">
    <img
      className="image"
      src="/images/secondary_card_ex.png"
      alt=""
    />
    <div className="card_content">
      <div className="header">
        <div className="title_container">
          <h2 className="title">TEKKEN 8</h2>
          <span className="developer">
            Bandai Namco Entertainment America Inc.
          </span>
        </div>
        <div className="categories">
          <div className="category">PS5</div>
        </div>
      </div>
      <div className="description">
        TEKKEN 8 continues the tragic saga of the Mishima bloodline
        and its world-shaking father-and-son grudge matches. After
        defeating his father, Heihachi Mishima, Kazuya continues his
        conquest for global domination, using the forces of G
        Corporation to wage war on the world.
      </div>
      <div className="price_tags_container">
        <div className="price_container">
          <span className="price">399,99₾</span>
          <a href="/products/1" className="more_details">
            დეტალურად
            <img
              className="details_btn_icon"
              src="/icons/details_icon.svg"
              alt=""
              width={18}
              height={18}
            />
          </a>
        </div>
        <div className="tags">
          <span className="tag">Action-adventure</span>
          <span className="tag">Shooter</span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
