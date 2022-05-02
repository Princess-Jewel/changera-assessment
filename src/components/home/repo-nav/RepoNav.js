/* eslint-disable no-unused-vars */
import React from "react";
import book from "../../../images/book-open-solid.svg";
import save from "../../../images/floppy-disk-solid.svg";
import task from "../../../images/task.svg";
import cube from "../../../images/cube-solid.svg";
import starIcon from "../../../images/star-regular.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfileAction } from "../../../redux/slices/reposSlice";

const RepoNav = () => {
  const [user, setUser] = useState("Princess-Jewel");
  const repos = useSelector(state => state?.repos);
  const { profile } = repos;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction(user));
  }, [user, dispatch]);

  return (
    <div className="repo__nav">
      <ul className="list__item__unordered__list">
        <li className="list__item">
          <div className="list__item__image">
            <img src={book} alt="book-icon" />
          </div>
          Overview
        </li>
        <li className="list__item active">
          <div className="list__item__image">
            <img src={save} alt="save-icon" />
          </div>
          Repositories
          <span>{`${
            profile?.total_private_repos + profile?.public_repos
          }`}</span>
        </li>
        <li className="list__item">
          <div className="list__item__image">
            <img src={task} alt="task-icon" />
          </div>
          Projects
        </li>
        <li className="list__item">
          <div className="list__item__image">
            <img src={cube} alt="cube-icon" />
          </div>
          Packages
        </li>
        <li className="list__item">
          <div className="list__item__image">
            <img src={starIcon} alt="cube-icon" />
          </div>
          Stars
          <span>-</span>
        </li>
      </ul>
    </div>
  );
};

export default RepoNav;
