import React from 'react';
import { ButtonStarRepo } from './ButtonStarRepo';

export const Card = ({
  id,
  name,
  url,
  description,
  stars,
  starredRepos,
  language,
  setStarredRepos,
}) => {
  const isStarred = starredRepos.some((savedRepo) => savedRepo.id === id);
  const style = `card ${isStarred ? 'starred' : ''}`;
  return (
    <li key={id} className={style}>
      <div className="card-info">
        <p>TITLE: {name}</p>
        <p>
          URL:{' '}
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
        <p>DESCRIPTION: {description}</p>
        <p>RATING: {stars}</p>
      </div>
      <div className="card-btn-container">
        {console.log(language)}
        <ButtonStarRepo
          setStarredRepos={setStarredRepos}
          starredRepos={starredRepos}
          repo={{
            id,
            name,
            html_url: url,
            description,
            stargazers_count: stars,
            language,
          }}
        />
      </div>
    </li>
  );
};
