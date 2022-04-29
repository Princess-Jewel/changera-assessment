import React from "react";
import "./Profile.css";
import user from "../../../images/user-regular.svg";
import location from "../../../images/map-marker-alt-solid.svg";
import mail from "../../../images/envelope-regular.svg";
import twitter from "../../../images/twitter-brands.svg";
import shield from "../../../images/shield-alt-solid.svg";

const Profile = () => {
  return (
    <div>
      <div className="profile__picture__section">
        <div className="profile__picture">
          <img
            src="https://res.cloudinary.com/dpqxraalv/image/upload/v1641733739/princess_nzitjk.jpg"
            alt=""
          />
           <div className="smiley">
          <i className="far fa-smile "></i>
        </div>
        </div>
       
      </div>

      <div className="profile__details">
        <div className="profile__details__name">
          <h3>Ezeokafor</h3>
          <h5>Goodness Ezeokafor</h5>
        </div>
        <button className="profile__details__button">Follow</button>
        <p className="profile__details__name__text">
          Trying to be better than yesterday
        </p>
        <div className="profile__details__stats__section">
          <div className="profile__details__stats__section">
            <div className="profile__details__stats">
              <img src={user} alt="" />
            </div>
            <p>
              <span className="profile__details__stats__section__span">
                105
              </span>
              followers
            </p>
          </div>
          <div className="profile__details__stats__section">
            <p>
              <span className="profile__details__stats__section__span">
                192
              </span>
              following
            </p>
          </div>
        </div>
        <div className="profile__details__stats__section">
          <div className="profile__details__location">
            <img src={location} alt="" />
          </div>
          <p>Jos</p>
        </div>
        <div className="profile__details__stats__section">
          <div className="profile__details__mail">
            <img src={mail} alt="" />
          </div>
          <p>Gootech@gmail.com</p>
        </div>
        <div className="profile__details__stats__section">
          <div className="profile__details__twitter">
            <img src={twitter} alt="" />
          </div>
          <p>@GoodyEzeofar</p>
        </div>
      </div>
      <div className="achievements">
        <p>Achievements</p>
        <div className="achievements__section">
          <img src={shield} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
