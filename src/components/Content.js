import React, { useState } from 'react';
import { Card } from './Card';
import { LANGUAGE_MAP } from '../constants';

export const Content = ({
  repos = [],
  setStarredRepos,
  starredRepos,
  showStarred,
  selectedLanguage,
}) => {
  const filterRepos = () => {
    if (showStarred)
      return selectedLanguage
        ? starredRepos.filter(
            (repo) => repo.language === LANGUAGE_MAP[selectedLanguage]
          )
        : starredRepos;
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
            language,
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
                language={language}
              />
            );
          }
        )}
    </ul>
  );
};
