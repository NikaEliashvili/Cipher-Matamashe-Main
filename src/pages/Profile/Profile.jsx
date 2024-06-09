import { redirect, useNavigate } from "react-router-dom";
import "./profile.css";
import React, { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const isLogged = true;

  useEffect(() => {
    if (!isLogged) {
      navigate("/profile/signin");
    }
  }, []);

  return (
    <div className="profile_page">
      <h2>პროფილის გვერდი</h2>
      <p>მიმდინარეობს ტექნიკური სამუშაოები</p>
    </div>
  );
};

export default Profile;
