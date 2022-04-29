import React from 'react'
import book from "../../../images/book-open-solid.svg";
import save from "../../../images/floppy-disk-solid.svg";
import task from "../../../images/task.svg";
import cube from "../../../images/cube-solid.svg";
import starImage from "../../../images/star-solid.svg";

const RepoNav = () => {
  return (
    <nav className='repo__nav'>
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
        <span>120</span>
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
          <img src={starImage} alt="cube-icon" />
        </div>
        Stars
        <span>120</span>
      </li>
    </ul>
  </nav>
  )
}

export default RepoNav