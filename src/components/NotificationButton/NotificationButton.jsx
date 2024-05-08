import "./notificationButton.css";
import React, { useEffect, useRef, useState } from "react";

const notificationsArr = [
  {
    title: "Matamashe",
    date: "5/5/2024 12:00",
    message:
      "აუცილებელი ინფორმაცია! გაცნობებთ, რომ 2.24.2024 დან 4.24.2024 საიტზე ტექნიკური შეფერხების გამო ვერ შეძლებთ გადახდის სისტემის გამოყენებას, გთხოვთ თავი შეიკავოთ შეკვეთის განთავსებისგან. ბოდიშს გიხდით შექმნილი ხარვეზის გამო",
  },
  {
    title: "Matamashe",
    date: "5/5/2024 12:00",
    message:
      "აუცილებელი ინფორმაცია! გაცნობებთ, რომ 2.24.2024 დან 4.24.2024 საიტზე ტექნიკური შეფერხების გამო ვერ შეძლებთ გადახდის სისტემის გამოყენებას, გთხოვთ თავი შეიკავოთ შეკვეთის განთავსებისგან. ბოდიშს გიხდით შექმნილი ხარვეზის გამო",
  },
  {
    title: "Matamashe",
    date: "5/5/2024 12:00",
    message:
      "აუცილებელი ინფორმაცია! გაცნობებთ, რომ 2.24.2024 დან 4.24.2024 საიტზე ტექნიკური შეფერხების გამო ვერ შეძლებთ გადახდის სისტემის გამოყენებას, გთხოვთ თავი შეიკავოთ შეკვეთის განთავსებისგან. ბოდიშს გიხდით შექმნილი ხარვეზის გამო",
  },
];

const NotificationButton = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [notifications, setNotification] = useState(notificationsArr);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 300);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    /**Write a function which makes isOpen to false if user clicks outside the ref */

    const handleOutsideClick = (e) => {
      if (!ref.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={ref} className="notification-centre">
      <div
        className="notification-btn"
        onClick={isOpen ? handleClose : handleOpen}
      >
        <img
          src="/icons/bell.svg"
          className="bell_icon"
          width={24}
          height={24}
          alt=""
        />
        {!isOpen && notifications && notifications?.length > 0 && (
          <div
            className={
              "notification-count " + (isOpening ? "close" : "")
            }
          >
            <span className="notification_number">
              {notifications.length}
            </span>
          </div>
        )}
      </div>
      {(isOpen || isOpening) && (
        <div
          className={
            "notifications-container " +
            (isClosing ? "close" : "") +
            (isOpening ? "open" : "")
          }
        >
          {notifications && notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div
                key={(index + 1).toString()}
                className="notification"
              >
                <div className="notification_icon">
                  <img
                    src="/icons/bell.svg"
                    width={13}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="notification_content">
                  <h2 className="notification_title">
                    {notification.title}
                  </h2>
                  <span className="notification_date">
                    {notification.date}
                  </span>
                  <p className="notification_message">
                    {notification.message}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-notifications">
              <h4 className="no-notifications_message">
                ამჟამად შეტყობინებები არ გაქვს
              </h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
