import "./signIn.css";
import React, { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import useAuthStore from "../../store/useAuthStore";
const SignIn = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn, username } = useAuthStore();
  const [error, setError] = useState({
    login: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setSignInForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...signInForm });
  };

  useEffect(() => {
    navigate("/profile");
  }, [isLoggedIn]);

  return (
    <div className="signin_page">
      <div className="signin_container">
        <div className="video_game">
          <img src="/images/modern_warfare.png" alt="" />
          <Link to={"/products/1"} className="game_link">
            <TbExternalLink className="link_icon" />
            <span className="game_link_text">თამაშის გახსნა</span>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="signin_form">
          <div className="header">
            <h2 className="title">ავტორიზაცია</h2>
            <p className="subtitle">
              გაიარეთ ავტორიზაცია მაქსიმალური გამოცდილებისთვის
            </p>
          </div>
          <div className="signin_form_inputs">
            <Input
              errorMessage={error?.email}
              type="email"
              label="ელ.ფოსტა"
              value={signInForm.email}
              name={"email"}
              onChange={handleChange}
            />
            <Input
              errorMessage={
                signInForm.password.length < 8 &&
                "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან"
              }
              type="password"
              label="პაროლი"
              value={signInForm.password}
              name={"password"}
              onChange={handleChange}
            />
            <Button type="submit">შესვლა</Button>
            <p className="register_message">
              არ გაქვთ ანგარიში? გაიარეთ
              <Link to={"/profile/signup"} className="register_word">
                რეგისტრაცია
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
