import React from "react";
import Footer from "../footer/Footer";
import HomeNavbar from "../main-navbar/HomeNavbar";
import Profile from "../profile-section/Profile";
import Repo from "../repository-section/Repo";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <>
      {" "}
      <HomeNavbar />
      <div className="general__container">
        <Profile />
        <Repo />
        <Footer />
      </div>
    </>
  );
};

export default HomeMain;
