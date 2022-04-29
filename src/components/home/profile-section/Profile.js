import React from "react";
import "./Profile.css";
import userImage from "../../../images/user-regular.svg";
import location from "../../../images/map-marker-alt-solid.svg";
import mail from "../../../images/envelope-regular.svg";
import twitter from "../../../images/twitter-brands.svg";
import shield from "../../../images/shield-alt-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,  useState  } from "react";
import {
  fetchReposAction
} from "../../../redux/slices/reposSlice";

const Profile = () => {
  const [user, setUser] = useState("");
  const repos = useSelector(state => state?.repos);
  const { loading, reposList,  error } = repos;
  // console.log(reposList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReposAction(user));
  }, [user, dispatch]);
  // 
  // console.log(user);
  return (
    <div>
      <div className="profile__picture__section">
        <div className="profile__picture">
          <img
            src={reposList?.avatar_url}
            alt=""
          />
           <div className="smiley">
          <i className="far fa-smile "></i>
        </div>
        </div>
       
      </div>

      <div className="profile__details">
        <div className="profile__details__name">
          <h3>{reposList?.name}</h3>
          <h5>{reposList?.login}</h5>
        </div>
        <button className="profile__details__button">Follow</button>
        <p className="profile__details__name__text">
        {reposList?.bio}
        </p>
        <div className="profile__details__stats__section">
          <div className="profile__details__stats__section">
            <div className="profile__details__stats">
              <img src={userImage} alt="" />
            </div>
            <p>
              <span className="profile__details__stats__section__span">
              {reposList?.followers}
              </span>
              followers
            </p>
          </div>
          <div className="profile__details__stats__section">
            <p>
              <span className="profile__details__stats__section__span">
              {reposList?.following}
              </span>
              following
            </p>
          </div>
        </div>
        <div className="profile__details__stats__section">
          <div className="profile__details__location">
            <img src={location} alt="" />
          </div>
          <p> {reposList?.location}</p>
        </div>
        <div className="profile__details__stats__section">
          <div className="profile__details__mail">
            <img src={mail} alt="" />
          </div>
          <p> {reposList?.email}</p>
        </div>
        <div className="profile__details__stats__section">
          <div className="profile__details__twitter">
            <img src={twitter} alt="" />
          </div>
          <p> {`@${reposList?.twitter_username}`}</p>
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
