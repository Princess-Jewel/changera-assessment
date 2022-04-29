import React from "react";
import starImage from "../../../images/star-solid.svg";
import forkImage from "../../../images/code-fork-solid.svg";
import scaleImage from "../../../images/scale-balanced-solid.svg";
import "./RepoListBody.css";

const RepoListBody = ({
  repoName,
  description,
  framework,
  status,
  star,
  createdAt,
  fork, scale
}) => {
  return (
    <div>
      <div className="repo__list__body">
        <div className="repo__list__body__repo">
          <div className="repo__list__body__repo__header">
            <div className="repo__list__body__repo__">
              <p className=" repo__list__body__repo__head__reponame">
                {repoName}
              </p>
              <p className=" repo__list__body__repo__head__status">{status}</p>
            </div>
            <p className=" repo__list__body__repo__head__description">
              {description}
            </p>
          </div>
          <div className="repo__more__info">
          <div className="repo__more__info__framework"> 
           {/* <span>p</span> */}
            <p>{framework}</p></div>
            <div className="repo__list__body__repo__star">
              <div className="repo__list__body__repo__star__image">
                <img src={starImage} alt="" />
              </div>
              <span>{star}</span>
            </div>
            <div className="repo__list__body__repo__star">
              <div className="repo__list__body__repo__star__image">
                <img src={forkImage} alt="" />
              </div>
              <span>{fork}</span>
            </div>
            <div className="repo__list__body__repo__star">
              <div className="repo__list__body__repo__star__image">
                <img src={scaleImage} alt="" />
              </div>
              <span>{scale}</span>
            </div>
            <p>{createdAt}</p>
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
