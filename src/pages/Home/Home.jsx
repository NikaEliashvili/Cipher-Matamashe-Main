import ProductCard from "../../components/ProductCard/ProductCard";
import Swiper from "../../components/Swiper/Swiper";
import { BREAK_POINT } from "../../constants/constants";
import useScreenStore from "../../store/useScreenStore";
import "./home.css";
import React, { useEffect, useRef, useState } from "react";

const cardDataExample = [
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

  const [numColumns, setNumColumns] = useState(5); // Initial number of columns

  const contentRef = useRef(null);
  // width: clamp(161px, 200px, 275px);
  useEffect(() => {
    // Function to calculate number of columns based on viewport width
    const calculateColumns = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 1280) {
        setNumColumns(5);
      } else if (viewportWidth >= 1024) {
        setNumColumns(4);
      } else if (viewportWidth >= 565) {
        setNumColumns(3);
      } else if (viewportWidth >= 360) {
        setNumColumns(2);
      } else {
        setNumColumns(1);
      }
    };

    // Calculate columns on initial render
    calculateColumns();

    // Recalculate columns on window resize
    window.addEventListener("resize", calculateColumns);
    return () => {
      window.removeEventListener("resize", calculateColumns);
    };
  }, []);

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
