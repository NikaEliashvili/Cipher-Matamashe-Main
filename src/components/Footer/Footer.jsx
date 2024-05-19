import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer_main_container">
      <Link to={"/"} className="main_logo">
        <Logo
          subtitle="ვიდეო თამაშების ონლაინ მაღაზია"
          themeColor="colored"
        />
      </Link>
      <div className="lists_section">
        <ul className="list">
          <li>
            <Link to={null}>ტექნიკური მხარდაჭერა</Link>
          </li>
          <li>
            <Link to={null}>კონფედენციალურობის პოლიტიკა</Link>
          </li>
          <li>
            <Link to={null}>ვებსაიტის გამოყენების პირობები</Link>
          </li>
          <li>
            <Link to={null}>თანხის დაბრუნების პოლიტიკა</Link>
          </li>
        </ul>

        <ul className="list">
          <li>
            <Link to={""}>მთავარი</Link>
          </li>
          <li>
            <Link to={null}>ციფრული თამაშები</Link>
          </li>
          <li>
            <Link to={null}>შესახებ</Link>
          </li>
          <li>
            <Link to={null}>კონტაქტი</Link>
          </li>
        </ul>

        <ul className="list">
          <li>
            <Link to={null}>კითხვები</Link>
          </li>
          <li>
            <Link to={null}>სიახლეები</Link>
          </li>
          <li>
            <Link to={null}>რეგისტრაცია</Link>
          </li>
          <li>
            <Link to={null}>ავტორიზაცია</Link>
          </li>
        </ul>
      </div>
      <p className="copyright">
        © ყველა უფლება დაცულია “Matamashe”-ს მიერ
      </p>
    </div>
  );
};

export default Footer;
