import React from "react";
import Profile from "../profile-section/Profile";
import Repo from "../repository-section/Repo";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <div className="general__container">
      <Profile />
      <Repo />
    </div>
  );
};

export default HomeMain;
