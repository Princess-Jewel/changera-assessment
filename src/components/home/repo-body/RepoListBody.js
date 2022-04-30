import React from "react";
import starImage from "../../../images/star-solid.svg";
import forkImage from "../../../images/code-fork-solid.svg";
import scaleImage from "../../../images/scale-balanced-solid.svg";
import "./RepoListBody.css";

const RepoListBody = ({
  name,
          description,
          language,
          visibility,
          stargazers_count,
          pushed_at,
          forks_count,
          license,
}) => {
  return (
    <div>
      <div className="repo__list__body">
        <div className="repo__list__body__repo">
          <div className="repo__list__body__repo__header">
            <div className="repo__list__body__repo__">
              <p className=" repo__list__body__repo__head__reponame">
                {name}
              </p>
              <p className=" repo__list__body__repo__head__status">{visibility}</p>
            </div>
            <p className=" repo__list__body__repo__head__description">
              {description}
            </p>
          </div>
          <div className="repo__more__info">
          <div className="repo__more__info__framework"> 
           {/* <span>p</span> */}
            <p>{language}</p></div>
            <div className="repo__list__body__repo__star">
              <div className="repo__list__body__repo__star__image">
                <img src={starImage} alt="" />
              </div>
              <span>{stargazers_count}</span>
            </div>
            <div className="repo__list__body__repo__star">
              <div className="repo__list__body__repo__star__image">
                <img src={forkImage} alt="" />
              </div>
              <span>{forks_count}</span>
            </div>
            <div className="repo__list__body__repo__star">
              <div className="repo__list__body__repo__star__image">
                <img src={scaleImage} alt="" />
              </div>
              <span>{license}</span>
            </div>
            <p>{pushed_at}</p>
          </div>
        </div>
        <div className="repo__list__body__info">
          <div className="repo__list__body__info__image">
            <img src={starImage} alt="" />
          </div>
          <p>Star</p>
        </div>
      </div>
    </div>
  );
};

export default RepoListBody;
