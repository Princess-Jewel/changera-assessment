import React from "react";
import { repoList } from "../../../data/repoList";
import RepoListBody from "./RepoListBody";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,  useState  } from "react";
import {
  fetchReposAction
} from "../../../redux/slices/reposSlice";


const RepoBody = () => {
  const [user, setUser] = useState("");
  const repos = useSelector(state => state?.repos);
  const { loading, reposList, profile, error } = repos;
  // console.log(reposList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReposAction(user));
  }, [user, dispatch]);
  // {profile?.name}
  // console.log(user);
  return (
    <div>
      {repoList.map(item => {
        const {
          id,
          repoName,
          description,
          framework,
          status,
          star,
          createdAt,
          fork,
          scale
        } = item;
        return (
          <RepoListBody
            key={id}
            repoName={repoName}
            description={description}
            framework={framework}
            status={status}
            star={star}
            createdAt={createdAt}
            fork={fork}
            scale={scale}
          />
        );
      })}
    </div>
  );
};

export default RepoBody;
