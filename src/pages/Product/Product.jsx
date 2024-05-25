import { useParams } from "react-router-dom";
import "./product.css";

import React, { useEffect, useState } from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Swiper from "../../components/Swiper/Swiper";
import ProductCard from "../../components/ProductCard/ProductCard";
import useScreenStore from "../../store/useScreenStore";

const RELATED_VIDEO_GAMES = [
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    id: "0",
  },
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
    oldPrice: "1700.00₾",
    amount: 0,
    id: "4",
  },
  {
    imgUrl: "noImage.jpg",
    consoles: ["PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
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
  {
    imgUrl:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    consoles: ["PS4", "PS5"],
    title: "Call Of Duty Modern Warfare 3",
    developer: "sports, simulation",
    price: "1499,99₾",
    oldPrice: "2499.99₾",
    id: "7",
  },
];

const groupingArray = (array, size) => {
  let newArr = [...array];
  if (array.length % size !== 0) {
    const amount =
      size * Math.ceil(array.length / size) - array.length;
    const emptyArray = new Array(amount).fill(null);
    newArr = [...newArr, ...emptyArray];
  }
  const result = [];
  for (let i = 0; i < newArr.length; i += size) {
    result.push(newArr.slice(i, i + size));
  }
  return result;
};

const Product = () => {
  const { id } = useParams();
  const screenWidth = useScreenStore((state) => state.screenWidth);
  const [productAmount, setProductAmount] = useState(1);
  const PRODUCT_PRICE = 1999.99;
  const [productPrice, setProductPrice] = useState(PRODUCT_PRICE);
  const [columnsInSwiper, setColumnsInSwiper] = useState(2);

  const categoriesExample = ["sports", "actions"];
  const langsExample = [
    "ინგლისური",
    "რუსული",
    "გერმანული",
    "ფრანგული",
    "ჩნური",
    "იაპონური",
    "თურქული",
    "იტალიური",
  ];

  const productAmountIncrement = () => {
    setProductPrice(PRODUCT_PRICE * (productAmount + 1));
    setProductAmount((prevAmount) => prevAmount + 1);
  };
  const productAmountDecrement = () => {
    setProductPrice(PRODUCT_PRICE * (productAmount - 1));
    setProductAmount((prevAmount) => prevAmount - 1);
  };

  const productCardsArray = groupingArray(
    RELATED_VIDEO_GAMES,
    columnsInSwiper
  );

  useEffect(() => {
    if (screenWidth >= 1920) {
      setColumnsInSwiper(5);
    } else if (screenWidth >= 1024) {
      setColumnsInSwiper(4);
    } else if (screenWidth >= 550) {
      setColumnsInSwiper(3);
    } else if (screenWidth >= 390) {
      setColumnsInSwiper(2);
    } else {
      setColumnsInSwiper(1);
    }
  }, [screenWidth]);

  return (
    <div className="product_page">
      <p>პროდუქტის ID: {id}</p>
      <div className="section_1">
        <div className="carousel">
          <ImageCarousel images={images} />
        </div>
        <div className="content">
          <div className="game_name_short">
            <img
              className="game_logo"
              src="/images/2k_logo.png"
              alt=""
            />
            <span className="game_title">2k</span>
          </div>
          <h3 className="game_title">NBA 2K22 black mamba edition</h3>
          <div className="categories">
            {categoriesExample.map((category, index) => (
              <React.Fragment key={index + "1000"}>
                <span className="category">{category}</span>
                {index < categoriesExample.length - 1 && (
                  <span>, &nbsp;</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="game_description">
            <h3 className="desc_title">აღწერა</h3>
            <p className="desc_text">
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
              ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან
              მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს.
              ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას
              საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ
              ასეთ დროს არის ...
            </p>
          </div>
          <div className="version_and_consoles">
            <div className="versions_container">
              <h3 className="v_title">ვერსია:</h3>
              <div className="versions">
                <div className="version active">Primary</div>
                <div className="version">Secondary</div>
              </div>
            </div>
            <div className="consoles_container">
              <h3 className="consoles_title">კატეგორია:</h3>
              <div className="consoles">
                <div className="console active">PlayStation 5</div>
                <div className="console">PlayStation 4</div>
              </div>
            </div>
          </div>
          <div className="price_and_btn">
            <div className="price_container">
              <div className="amount_container">
                <span className="amount_title">რაოდენობა:</span>
                <div className="amount_btn">
                  <button
                    onClick={productAmountDecrement}
                    className={
                      "arrow_btn " +
                      (productAmount === 1 ? "disabled" : "")
                    }
                    disabled={productAmount <= 1}
                  >
                    <IoIosArrowBack />
                  </button>
                  <span className="amount_number">
                    {productAmount}
                  </span>
                  <button
                    onClick={productAmountIncrement}
                    className={"arrow_btn "}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div className="price">
                <span>{productPrice}₾ </span>
              </div>
            </div>
            <button className="add_to_cart_btn">
              <span>კალათაში დამატება</span>
              <img
                className="cart_icon"
                src="/icons/cart.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="content_2">
        <div className="full_description">
          <h3 className="desc_title">აღწერა</h3>
          <p className="description">
            ლორემ იპსუმ რკინას არისო გაათავებდა დააპირა მოსაწველად
            ევგენი ბაბუსთან. საღამოს ეპყრობიან გახვრეტილი კუბიკები
            ნათავადარი წიგნად. რუსთაველით შეუქმნას გვაჯადოვებს
            კუბიკები ევგენი ასაღებად. ყოველ სქესის წკეპლის, კილო
            კუბიკები რატომაა გადავფურცლეთ. შემდეგ ბაბუსთან ყვიროდნენ
            ხარაჩოები ალისფერი უქნიეს. ბაბუსთან წკეპლის პროცესს
            დამჯდარიყო შემდეგ ალავერდი, სათავეს, გადავფურცლეთ,
            მოსაწველად გამოერკვია ახდილ. ქოხებს პროჟექტორ წამსაც ვაჟო
            სტალაგმიტი საქმეზედ ნათავადარი გმინვა ეპითეტი ევგენი
            გადავფურცლეთ ნაპერწკლებმა აგდებენ, არისო აუმღვრევლად.
            დამჯდარიყო ალავერდი გახვრეტილი ასაღებად აუხაშხაშდა,
            ფალუსია ალანძული. ამაში ვიცხოვრებ მივიღე, სოხუმიდან
            იღებსო, სამთვიან გამოგლიჯო მეშლება. პრეიზნერის წიგნისაგან
            მიყურებდა მოგვარიდა მოიფიქრა დადგენილებაც ეფარა მშვიდ ნაშა
            გიჩივის მეშლება ბლიეს მორიდებულად ვერცხლისფერი. ოსეთში
            გაზრდილი სიღატაკე ნაშა გადმოალაგა გადადიოდნენ გიჭერს
            თვალისაგან კივილ დადგენილებაც სეპარატისტები ჰეკთან.
            მწერისათვის მოსაპარს გავაბოლებთ გმირობაა ხევისთავებს
            გალამაზებასა ყელსაბამიც წარმომადგენელი ოკუჯავა. სიტის
            მუზეუმის დაპატიჟება დაჭრა მეცლება აღარავისი მზაკვრული
            მომხდარ ჰკრავდნენ. დღევანდლამდინ გამოუცდია წართმევა
            გადაჭიმული დააჭრეს, დაჭრა სალამის გმირობაა გამოცდილებით,
            დაბუნდება გავაბოლებთ. მაყოვნებ შეუდგეს ტროტუარი სუკისთვის
            დიტრიხის მიიხედეთ წართმევა გაეკიდა კაფელში. გვიკვდება
            გერკულესს დატვირთვას დაკრულს ისტორიისა ჩინური ვხვდებით
            იგლოვოს სუკისთვის მომხდარ სიტის სალამის ტიტვლები დაგტანჯოს
            კაფელში.
          </p>
        </div>
        <div className="voiceover_langs">
          <h3 className="voiceover_langs_title">გახმოვანება</h3>
          <p className="langs">{langsExample.join(", ")}</p>
        </div>
        <div className="subtitles_langs">
          <h3 className="subtitles_langs_title">ტიტრები</h3>
          <p className="langs">{langsExample.join(", ")}</p>
        </div>
      </div>
      <div className="section_2">
        <h2 className="section_2_title">მსგავსი ვიდეო თამაშები</h2>
        <h2 className="section_2_subtitle">ჟანრის მიხედვით</h2>
        <div className="related_video_games">
          <Swiper>
            {productCardsArray.map((slider, index) => (
              <div key={index} className="product_cards_container">
                {slider.map((game, index) =>
                  game ? (
                    <div key={index} className="related_video_game">
                      <ProductCard data={game} />
                    </div>
                  ) : (
                    <div key={index} className="empty_cont"></div>
                  )
                )}
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const images = [
  "/images/2k_image.jpg",
  "/images/2k_image.jpg",
  "/images/2k_image.jpg",
  "/images/2k_image.jpg",
  "/images/2k_image.jpg",
  "/images/2k_image.jpg",
];

export default Product;
