import React, { useState } from 'react';
import { Card } from './Card';

export const Content = ({
  repos = [],
  setStarredRepos,
  starredRepos,
  showStarred,
}) => {
  const filterRepos = () => {
    if (showStarred) return repos.filter(({ id }) => starredRepos.includes(id));
    return repos;
  };
  const reposToDisplay = filterRepos();

  return (
    <ul className="grid-container">
      {reposToDisplay.length > 0 &&
        reposToDisplay?.map(
          ({
            id,
            name,
            html_url: url,
            description,
            stargazers_count: stars,
          }) => {
            return (
              <Card
                key={id}
                starredRepos={starredRepos}
                setStarredRepos={setStarredRepos}
                id={id}
                name={name}
                url={url}
                description={description}
                stars={stars}
              />
            );
          }
        )}
    </ul>
  );
};
