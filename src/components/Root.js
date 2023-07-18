import React from "react";
import NavBar from "./NavBar.js";
import LoginForm from "./LoginForm.js";
import DashBoard from "./DashBoard.js";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/Dashboard");
  };
  const navigateToLogin = () => {
    navigate("/");
  };
  return (
    <div className="App">
      <NavBar toLogin={navigateToLogin} />
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm toDashBoard={navigateToDashboard} />}
        />
        <Route exact path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}
