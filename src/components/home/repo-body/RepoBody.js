import React from "react";
// import { repoList } from "../../../data/repoList";
import starImage from "../../../images/star-solid.svg";
import forkImage from "../../../images/code-fork-solid.svg";
// import scaleImage from "../../../images/scale-balanced-solid.svg";
import "./RepoListBody.css";
// import RepoListBody from "./RepoListBody";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchReposAction } from "../../../redux/slices/reposSlice";
import Moment from "react-moment";
import caretDown from "../../../images/caret-down-solid.svg";

const RepoBody = () => {
  const [user, setUser] = useState("");

  const repos = useSelector(state => state?.repos);
  let { loading, reposList, error } = repos;
  // console.log(reposList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReposAction(user));
  }, [user, dispatch]);

  const [searchKey, setSearchKey] = useState("");
  const [searchedRepo, setSearchedRepo] = useState(reposList);

  // Search for repository by name
  const handleSearchResults = () => {
    const filteredRepos = reposList.filter(repo =>
      repo.name.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setSearchedRepo(filteredRepos);
    // reposList = searchedRepo
    console.log(filteredRepos);
  };

  // Search submit
  const handleSearchBar = e => {
    e.preventDefault();
    handleSearchResults();
  };

  // Clear search and show all repositories
  const handleClearSearch = () => {
    setSearchedRepo(reposList);
    setSearchKey("");
  };

  return (
    <div>
      <div className="input__buttons__section">
        <form onSubmit={handleSearchBar}>
          <input
            type="text"
            placeholder="Find a repository"
            className="repo__search"
            value={searchKey}
            onChange={e => setSearchKey(e.target.value)}
            onSubmit={handleSearchBar}
          />
          {searchKey && <span onClick={handleClearSearch}>X</span>}
        </form>
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
    <div className="repo__home">  {loading ? (
        <h1 className="loading__text">Loading</h1>
      ) : error ? (
        <h1 className="error__text">{error?.message}</h1>
      ) : (
        <>
          {searchedRepo?.name !== "Error" &&
            searchedRepo?.map(repo => (
              <div key={repo?.id}>
                <div className="repo__list__body">
                  <div className="repo__list__body__repo">
                    <div className="repo__list__body__repo__header">
                      <div className="repo__list__body__repo__">
                        <p className=" repo__list__body__repo__head__reponame">
                          {repo?.name}
                        </p>
                        <p className=" repo__list__body__repo__head__status">
                          {repo?.visibility}
                        </p>
                      </div>
                      <p className=" repo__list__body__repo__head__description">
                        {repo?.description}
                      </p>
                    </div>
                    <div className="repo__more__info">
                      <div className="repo__more__info__framework">
                        {/* <span>p</span> */}
                        <p>{repo?.language}</p>
                      </div>
                      <div className="repo__list__body__repo__star">
                        <div className="repo__list__body__repo__star__image">
                          <img src={starImage} alt="" />
                        </div>
                        <span>{repo?.stargazers_count}</span>
                      </div>
                      <div className="repo__list__body__repo__star">
                        <div className="repo__list__body__repo__star__image">
                          <img src={forkImage} alt="" />
                        </div>
                        <span>{repo?.forks_count}</span>
                      </div>

                      <p className="updated">
                        Updated on&nbsp;
                        <Moment format="ll">{repo?.pushed_at}</Moment>
                      </p>
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
            ))}
        </>
      )}</div>
    </div>
  );
};

export default RepoBody;
