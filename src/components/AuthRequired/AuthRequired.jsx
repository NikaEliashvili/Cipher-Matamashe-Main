import React, { useEffect } from "react";
import {
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
export default function AuthRequired() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogged = false;

  // useEffect(() => {
  //   if (!isLogged) {
  //     navigate("profile/signin");
  //   }
  // }, []);

  if (!location.pathname.includes("profile/signup") && !isLogged) {
    return (
      <Navigate
        to="profile/signup"
        state={{
          message: "You must log in first!",
          prevLoc: location.pathname,
        }}
        replace
      />
    );
  }

  if (!location.pathname.includes("profile/signin") && !isLogged) {
    return (
      <Navigate
        to="profile/signin"
        state={{
          message: "You must log in first!",
          prevLoc: location.pathname,
        }}
        replace
      />
    );
  }

  return <Outlet />;
}
