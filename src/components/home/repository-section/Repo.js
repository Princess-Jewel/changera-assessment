import React from "react";
import "./Repo.css";
import RepoBody from "../repo-body/RepoBody";
import RepoNav from "../repo-nav/RepoNav";


const Repo = () => {
  return (
    <div className="repository__list__section">
      <RepoNav />

      
      <RepoBody />
    </div>
  );
};

export default Repo;
