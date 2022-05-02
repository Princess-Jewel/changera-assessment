import React from "react";
import "./Profile.css";
import userImage from "../../../images/user-regular.svg";
import location from "../../../images/map-marker-alt-solid.svg";
import mail from "../../../images/envelope-regular.svg";
import twitter from "../../../images/twitter-brands.svg";
import shield from "../../../images/shield-alt-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfileAction } from "../../../redux/slices/reposSlice";

const Profile = () => {
  // useEffect(() => {
  //   setUser({user: "Princess-Jewel"})
  //  }, [])
  
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Princess-Jewel");
  const repos = useSelector(state => state?.repos);
  const { loading, profile, error } = repos;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [user, dispatch]);

  return (
    <div className="profile__home">
      {loading ? (
        <h1 className="loading__text">Loading...</h1>
      ) : error ? (
        <h1 className="error__text">{error?.message}</h1>
      ) : (
        <>
          <div className="profile__picture__section">
            <div className="profile__picture">
              <img src={profile?.avatar_url} alt="" />
              {/* <div className="smiley">
                <i className="far fa-smile "></i>
              </div> */}
            </div>
          </div>

          <div className="profile__details">
            <div className="profile__details__name">
              <h3>{profile?.name}</h3>
              <h5>{profile?.login}</h5>
            </div>
            <div><button className="profile__details__button">Follow</button></div>
            <p className="profile__details__name__text">{profile?.bio}</p>
            <div className="profile__details__stats__section">
              <div className="profile__details__stats__section">
                <div className="profile__details__stats">
                  <img src={userImage} alt="" />
                </div>
                <p>
                  <span className="profile__details__stats__section__span">
                    {profile?.followers}
                  </span>
                  followers
                </p>
              </div>
              <div className="profile__details__stats__section">
                <p>
                  <span className="profile__details__stats__section__span">
                    {profile?.following}
                  </span>
                  following
                </p>
              </div>
            </div>
            <div className="profile__details__stats__section">
              <div className="profile__details__location">
                <img src={location} alt="" />
              </div>
              <p> {profile?.location}</p>
            </div>
            <div className="profile__details__stats__section">
              <div className="profile__details__mail">
                <img src={mail} alt="" />
              </div>
              <p> {profile?.email}</p>
            </div>
            <div className="profile__details__stats__section">
              <div className="profile__details__twitter">
                <img src={twitter} alt="" />
              </div>
              <p> {`@${profile?.twitter_username}`}</p>
            </div>
          </div>
          <div className="achievements">
            <p>Achievements</p>
            <div className="achievements__section">
              <img src={shield} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
