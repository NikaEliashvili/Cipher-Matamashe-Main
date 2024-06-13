import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import SubscribeCard from "../../components/SubscribeCard/SubscribeCard";
import Swiper from "../../components/Swiper/Swiper";
import { BREAK_POINT } from "../../constants/constants";
import useScreenStore from "../../store/screenStore";
import "./home.css";
import React, { useEffect, useRef, useState } from "react";

export const cardDataExample = [
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    id: "1",
  },
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    id: "2",
  },
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    id: "3",
  },
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    id: "4",
  },
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    oldPrice: "1700.00₾",
    amount: 0,
    id: "5",
  },
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    id: "4",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    consoles: ["PS4", "PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    oldPrice: "2499.99₾",
    id: "6",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    consoles: ["PS4", "PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    oldPrice: "2499.99₾",
    id: "6",
  },
];

const Home = () => {
  const screenWidth = useScreenStore((state) => state.screenWidth);
  const [consoleCategory, setConsoleCategory] = useState("PS4");
  const [accConsole, setAccConsole] = useState("PS5");

  const [numColumns, setNumColumns] = useState(5);
  const contentRef = useRef(null);

  const handleAccConsoles = (newConsole) => {
    if (accConsole !== newConsole) {
      setAccConsole(newConsole);
    }
  };

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
        <div
          ref={contentRef}
          className={`game_cards_container columns-${numColumns}`}
        >
          {cardDataExample.map((data, index) => (
            <ProductCard key={index + 100} data={data} />
          ))}
        </div>
      </div>
      <SubscribeCard />
      <div className="acc_activation">
        <h2 className="title">ანგარიშების აქტივაცია</h2>
        <div className="consoles">
          <span className="consoles_title">კონსოლები</span>
          <div className="console_items" style={{}}>
            <span
              onClick={() => handleAccConsoles("PS4")}
              className={
                "console_item " +
                (accConsole === "PS4" ? "active" : "")
              }
            >
              PlayStation 4
            </span>
            <span
              onClick={() => handleAccConsoles("PS5")}
              className={
                "console_item " +
                (accConsole === "PS5" ? "active" : "")
              }
            >
              PlayStation 5
            </span>
            <span
              onClick={() => handleAccConsoles("Xbox")}
              className={
                "console_item " +
                (accConsole === "Xbox" ? "active" : "")
              }
            >
              Xbox One
            </span>
            <span
              onClick={() => handleAccConsoles("Switch")}
              className={
                "console_item " +
                (accConsole === "Switch" ? "active" : "")
              }
            >
              Switch
            </span>
          </div>
        </div>
        <div className="video_player">
          {/* <div className="video_player_button"></div> */}
          <iframe
            className="video_iframe"
            src={`https://www.youtube.com/embed/Xurs63Ccnlo?rel=0`}
            title="PS5ish 4.5.0 - Installation and tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
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
          <Link to="/products/1" className="more_details">
            დეტალურად
            <img
              className="details_btn_icon"
              src="/icons/details_icon.svg"
              alt=""
              width={18}
              height={18}
            />
          </Link>
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
          <Link to="/products/1" className="more_details">
            დეტალურად
            <img
              className="details_btn_icon"
              src="/icons/details_icon.svg"
              alt=""
              width={18}
              height={18}
            />
          </Link>
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

// src="https://www.youtube.com/embed/Xurs63Ccnlo?rel=0&modestbranding=1&controls=1"
