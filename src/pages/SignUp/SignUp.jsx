import "./signUp.css";
import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { phoneNumberFormatter } from "../../utils/phoneNumberFormatter";
import Button from "../../components/Button/Button";
const SignUp = () => {
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
      let mobileValue = phoneNumberFormatter(value);

      setSignUpForm((prev) => ({
        ...prev,
        [name]: mobileValue.slice(0, 11),
      }));

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
              გაიარეთ რეგისტრაცია მაქსიმალური გამოცდილებსათვის
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
              errorMessage={error?.mobile}
              type="text"
              label="მობილური"
              value={signUpForm.mobile}
              maxLength={11}
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
              <Link to={"/signin"} className="register_word">
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
