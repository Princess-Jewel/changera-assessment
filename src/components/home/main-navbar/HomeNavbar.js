import React from "react";
import "./home-navbar.css";
import githubLogo from "../../../images/github-brands.svg";
import bellLogo from "../../../images/bell.svg";
import dropdown from "../../../images/angle-down-solid.svg";

const HomeNavbar = () => {

//     <div
//     className="feedback-msg"
//     style={{
//       backgroundColor: `${
//         details?.status === "successful"
//           ? "rgb(206, 245, 209)"
//           : "rgb(255, 247, 248)"
//       }`,
//     }}
//   >
  return (
    <div className="home__navbar">
      <div className="home__navbar__left">
        <div className="home__navbar__left__image">
          <img src={githubLogo} alt="" />
        </div>
        <div className="home__navbar__input">
          <input type="text" placeholder="Search or jump to..." />
          <span>/</span>
        </div>
        <div className="home__navbar__list">
          <ul>
            <li>Pull requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </ul>
        </div>
      </div>
      <div className="home__navbar__right">
        <div className="home__navbar__right__image">
          <img src={bellLogo} alt="" />
        </div>
        <div className="home__navbar__right__dropdown__section">
          <p>+</p>
          <div className="home__navbar__right__dropdown">
            <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="home__navbar__right__dropdown__sect">
          <div className="home__navbar__right__profile">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1641733739/princess_nzitjk.jpg"
              alt=""
            />
          </div>
          <div className="home__navbar__right__dropdown">
            <img src={dropdown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
