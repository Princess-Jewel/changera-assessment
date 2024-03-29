import React from "react";
import starImage from "../../../images/star-solid.svg";
import forkImage from "../../../images/code-fork-solid.svg";
import "./RepoListBody.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchReposAction,
  handleSearchResultsRed,
  config,
  setDefaultList,
} from "../../../redux/slices/reposSlice";
import Moment from "react-moment";
import caretDown from "../../../images/caret-down-solid.svg";
import axios from "axios";
import EmptyState from "../empty-state/EmptyState";
import starIcon from "../../../images/star-regular.svg"

const RepoBody = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Princess-Jewel");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReposAction(user));
  }, [user, dispatch]);

  let repos = useSelector(state => state?.repos);

  let { loading, reposList, error } = repos;

  const [searchKey, setSearchKey] = useState("");

  // Clear search and show all repositories
  const handleClearSearch = async e => {
    e.preventDefault();
    setSearchKey("");
    const { data } = await axios.get(
      `https://api.github.com/users/${user}/repos?per_page=20`,
      config
    );
    dispatch(setDefaultList(data));
    return;
  };

  // Searched repositories length
  let searchLength = reposList && reposList.length;

  return (
    <div>
      <div className="input__buttons__section">
        <div className="input__search__buttons">
          <form className="search__form">
            <input
              type="text"
              placeholder="Find a repository"
              className="repo__search"
              value={searchKey}
              onChange={e => setSearchKey(e.target.value)}
              // onKeyDown={e => reloadReposList()}
              // Search for repository by name
              onKeyUp={e =>
               
                dispatch(
                  handleSearchResultsRed({
                    reposList,
                    searchKey: e.target.value,
                    
                  })
                )
              }
            />
          </form>
        </div>
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

      {searchKey && (
        <div className="search__info">
          <p>
            {searchLength} results for repositories matching {searchKey} sorted
            by last updated
          </p>
          <div className="clear__button__section">
            <p onClick={e => handleClearSearch(e)}>
              <span>X</span> clear filter
            </p>
          </div>
        </div>
      )}

      {/* Repo List & Empty View */}
      {reposList && !reposList.length ? (
        <EmptyState />
      ) : (
        <div className="repo__home">
          {loading ? (
            <h1 className="loading__text">Loading...</h1>
          ) : error ? (
            <h1 className="error__text">{error?.message}</h1>
          ) : (
            <>
              {reposList &&
                reposList?.map(repo => (
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
                              <img src={starIcon} alt="" />
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
          )}
        </div>
      )}
    </div>
  );
};

export default RepoBody;
