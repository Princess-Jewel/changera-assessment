import React from "react";
import "./Repo.css";
import RepoBody from "../repo-body/RepoBody";
import RepoNav from "../repo-nav/RepoNav";
import caretDown from "../../../images/caret-down-solid.svg";

const Repo = () => {
  return (
    <div className="repository__list__section">
      <RepoNav />

      <div className="input__buttons__section">
        <input
          type="text"
          placeholder="Find a repository"
          className="repo__search"
        />
        <div className="buttons__section">
          <button>
            Type
            <div className="buttons__section__image">
              <img src={caretDown} alt="" />
            </div>
          </button>
          <button>
            Language
            <div className="buttons__section__image">
              <img src={caretDown} alt="" />
            </div>
          </button>
          <button>
            Sort
            <div className="buttons__section__image">
              <img src={caretDown} alt="" />
            </div>
          </button>
        </div>
      </div>
      <RepoBody />
    </div>
  );
};

export default Repo;
