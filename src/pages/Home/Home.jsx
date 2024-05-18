import Swiper from "../../components/Swiper/Swiper";
import { BREAK_POINT } from "../../constants/constants";
import useScreenStore from "../../store/useScreenStore";
import "./home.css";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const screenWidth = useScreenStore((state) => state.screenWidth);
  const [consoleCategory, setConsoleCategory] = useState("PS4");

  const handleConsoleCategory = (value) => {
    setConsoleCategory(value);
  };

  return (
    <div className="home_page">
      <div className="header_container">
        <h1 className="title">ახალი გამოსული თამაშები</h1>
        <span className="subtitle">ყველა ჟანრში</span>
      </div>

      <div className="cards_container">
        {screenWidth > BREAK_POINT ? (
          <>
            {mainCard}
            {SecondaryCard}
          </>
        ) : (
          <Swiper>
            {mainCard}
            {SecondaryCard}
          </Swiper>
        )}
      </div>
      <div className="chooseCategory_container">
        <div
          onClick={() => handleConsoleCategory("PS4")}
          className={
            "category " + (consoleCategory === "PS4" ? "active" : "")
          }
        >
          <span>PlayStation 4</span>
        </div>
        <div
          onClick={() => handleConsoleCategory("PS5")}
          className={
            "category " + (consoleCategory === "PS5" ? "active" : "")
          }
        >
          <span>PlayStation 5</span>
        </div>
      </div>
      <div className="video_games_container">
        <h2 className="video_games_title">
          {consoleCategory} ვიდეო თამაშები
        </h2>
        <h6 className="video_games_subtitle">ყველა ჟანრში</h6>
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
