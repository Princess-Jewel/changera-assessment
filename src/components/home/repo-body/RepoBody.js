import React from "react";
import { repoList } from "../../../data/repoList";
import RepoListBody from "./RepoListBody";

const RepoBody = () => {
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
