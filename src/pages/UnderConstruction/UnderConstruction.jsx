import React from "react";
import "./underConstruction.css";
import Logo from "../../components/Logo/Logo";
export default function UnderConstruction() {
  return (
    <div className="main-bg">
      <div className="main-content">
        <div className="logo-container">
          <Logo themeColor="white" subtitle="MATAMASHE.GE" />
        </div>
        <div className="hero">
          <h1 className="hero-title">საიტი მზადების პროცესშია</h1>
          <p className="hero-subtitle">
            გამოგვიწერეთ სოციალურ არხებზე და შეიტყვეთ ინფორმაცია ჩვენს
            ფასდაკლბებზე პირველმა!
          </p>
        </div>
        <div className="social-media-links">
          <a
            className="link"
            href="https://www.facebook.com/profile.php?id=61550297651746"
            target="_blank"
          >
            <img src="/icons/facebook.svg" alt="FB" />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/matamashe/"
            target="_blank"
          >
            <img src="/icons/instagram.svg" alt="IG" />
          </a>
          <a
            className="link"
            href="https://www.tiktok.com/@matamashe_"
            target="_blank"
          >
            <img src="/icons/tiktok.svg" alt="TIKTOK" />
          </a>
        </div>
      </div>
    </div>
  );
}
