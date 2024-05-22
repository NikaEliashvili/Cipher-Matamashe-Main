import { AiOutlineLoading } from "react-icons/ai";
import "./subscribeCard.css";
import React, { useState } from "react";

const SubscribeCard = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribeBtn = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Example of Promise
      const promise = new Promise((res, rej) => {
        setTimeout(() => {
          setEmail("");
          res("Done");
        }, 2000);
      });
      setIsSubscribing(true);
      promise
        .then(() => {
          console.log("Done: ", email.trim());
        })
        .finally(() => {
          setIsSubscribing(false);
        });
    }
  };

  return (
    <div className="subscribe_card">
      <div className="warriors">
        <img
          src="/images/fighter_1.png"
          className="fighter_1"
          alt=""
        />
        <img
          src="/images/fighter_2.png"
          className="fighter_2"
          alt=""
        />
      </div>
      <div className="content">
        <h3 className="title">
          გამოიწერე მათამაშე და იყავი ინფორმირებული
        </h3>
        <p className="description">
          მიიღე ინფორმაცია სიახლეებზე, ფასდაკლებებზე და შეთავაზებებზე{" "}
        </p>
        <form onSubmit={handleSubscribeBtn} className="email_form">
          <input
            className="email_input"
            placeholder="ელ.ფოსტა"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            disabled={isSubscribing}
            type="submit"
            className="subscribe_btn"
          >
            {isSubscribing ? (
              <AiOutlineLoading className="loading_icon" />
            ) : (
              "გამოწერა"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeCard;
