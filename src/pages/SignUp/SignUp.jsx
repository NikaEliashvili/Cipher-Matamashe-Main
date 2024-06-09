import "./signUp.css";
import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { phoneNumberFormatterWithCursor } from "../../utils/phoneNumberFormatter";
import Button from "../../components/Button/Button";
import useAuthStore from "../../store/useAuthStore";
const SignUp = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn, username } = useAuthStore();
  const [cursorPosition, setCursorPosition] = useState(0);
  const [error, setError] = useState({
    login: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    login: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreeToReceiveNotifications: false,
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    if (name === "mobile") {
      // let mobileValue = phoneNumberFormatter(value);
      const cursorStart = e.target.selectionStart;

      const { formattedNumber, newCursorPosition } =
        value &&
        cursorStart &&
        phoneNumberFormatterWithCursor(
          value,
          cursorStart,
          signUpForm.mobile
        );

      setSignUpForm((prev) => ({
        ...prev,
        [name]: formattedNumber || "",
      }));
      setCursorPosition(newCursorPosition);
      setTimeout(() => {
        e.target.setSelectionRange(
          newCursorPosition,
          newCursorPosition
        );
      }, 0);
      return;
    }

    setSignUpForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpForm);
  };

  useEffect(() => {
    navigate("/profile");
  }, [isLoggedIn]);

  return (
    <div className="signup_page">
      <div className="signup_container">
        <div className="video_game">
          <img src="/images/modern_warfare.png" alt="" />
          <Link to={"/products/1"} className="game_link">
            <TbExternalLink className="link_icon" />
            <span className="game_link_text">თამაშის გახსნა</span>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="signup_form">
          <div className="header">
            <h2 className="title">რეგისტრაცია</h2>
            <p className="subtitle">
              გაიარეთ რეგისტრაცია მაქსიმალური გამოცდილებისთვის
            </p>
          </div>
          <div className="signup_form_inputs">
            <Input
              errorMessage={error?.login}
              type="text"
              label="ლოგინი"
              value={signUpForm.login}
              name={"login"}
              onChange={handleChange}
            />
            <Input
              errorMessage={error?.email}
              type="email"
              label="ელ.ფოსტა"
              value={signUpForm.email}
              name={"email"}
              onChange={handleChange}
            />
            <Input
              errorMessage={
                signUpForm.mobile &&
                ((signUpForm.mobile[0] !== "5" &&
                  "მობილურის ნომერი უნდა იწყებოდეს 5-ით") ||
                  (signUpForm.mobile.length !== 11 &&
                    "მობილურის ნომერი უნდა შედგებოდეს 9 ციფრისგან"))
              }
              type="text"
              label="მობილური"
              value={signUpForm.mobile}
              maxLength={11}
              onClick={(e) =>
                setCursorPosition(e.target.selectionStart)
              }
              name={"mobile"}
              onChange={handleChange}
            />
            <Input
              errorMessage={error?.password}
              type="password"
              label="პაროლი"
              value={signUpForm.password}
              name={"password"}
              onChange={handleChange}
            />
            <Input
              errorMessage={
                signUpForm.password !== signUpForm.confirmPassword
                  ? "პაროლი არ ემთხვევა"
                  : null
              }
              type="password"
              label="გაიმეორეთ"
              value={signUpForm.confirmPassword}
              name={"confirmPassword"}
              onChange={handleChange}
            />
            <div className="agreement_checkboxes">
              <label htmlFor="check1" className="agreement_checkbox">
                <input
                  className="checkbox"
                  id="check1"
                  type="checkbox"
                  name="agreeTerms"
                  checked={signUpForm.agreeTerms}
                  onChange={handleChange}
                />
                <span>
                  ვეთანხმები
                  <Link className="agree_document_link">
                    საიტის წესებს და პირობებს
                  </Link>
                </span>
              </label>
              <label htmlFor="check2" className="agreement_checkbox">
                <input
                  className="checkbox"
                  id="check2"
                  type="checkbox"
                  name="agreeToReceiveNotifications"
                  checked={signUpForm.agreeToReceiveNotifications}
                  onChange={handleChange}
                />
                <span>
                  თანახმა ვარ მივიღო სიახლეები მათამაშესგან ელ.ფოსტაზე
                </span>
              </label>
            </div>
            <Button type="submit">რეგისტრაცია</Button>
            <p className="register_message">
              უკვე გაქვთ ანგარიში? გაიარეთ
              <Link to={"/profile/signin"} className="register_word">
                ავტორიზაცია
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
