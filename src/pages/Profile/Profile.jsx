import { redirect, useNavigate } from "react-router-dom";
import "./profile.css";
import React, { useEffect } from "react";
import useAuthStore from "../../store/authStore";

const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, username } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/profile/signin");
    }
  }, []);

  return (
    <div className="profile_page">
      <h2>პროფილის გვერდი</h2>
      <p>ელ.ფოსტა: {username.toUpperCase()}</p>
    </div>
  );
};

export default Profile;
