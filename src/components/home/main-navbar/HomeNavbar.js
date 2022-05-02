import React from "react";
import "./home-navbar.css";
import githubLogo from "../../../images/github-brands.svg";
import bellLogo from "../../../images/bell.svg";
import dropdown from "../../../images/angle-down-solid.svg";
import menu from "../../../images/bars-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfileAction } from "../../../redux/slices/reposSlice";

const HomeNavbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Princess-Jewel");
  const repos = useSelector(state => state?.repos);
  const { profile } = repos;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [user, dispatch]);
  return (
    <div className="home__navbar">
      <div className="home__navbar__desktop">
        <div className="menu__image">
          <img src={menu} alt="" />
        </div>
        <div className="menu__image">
          <img src={githubLogo} alt="" />
        </div>
        <div className="menu__image">
          <img src={bellLogo} alt="" />
        </div>
      </div>
      <div className="home__navbar__mobile">
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
            <img src={profile?.avatar_url} alt="" />
            </div>
            <div className="home__navbar__right__dropdown">
              <img src={dropdown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
