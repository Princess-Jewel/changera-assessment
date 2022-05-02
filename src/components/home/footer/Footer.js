import React from "react";
import "./Footer.css";
import githubLogo from "../../../images/github-brands.svg";

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__section__left">
        <div className="footer__section__left__image">
          <img src={githubLogo} alt="" />
        </div>
        <p className="footer__section__left__text">
          &copy; &nbsp;2022 GitHub, Inc.
        </p>
      </div>
      <div className="footer__section__right">
        <ul>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Security</a></li>
          <li><a href="/">Status</a></li>
          <li><a href="/">Docs</a></li>
          <li><a href="/">Contact GitHub</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">API</a></li>
          <li><a href="/">Training</a></li>
          <li><a href="/">Blog</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
