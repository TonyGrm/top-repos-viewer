import React from 'react';
import { ButtonStarRepo } from './ButtonStarRepo';

export const Card = ({
  id,
  name,
  url,
  description,
  stars,
  starredRepos,
  setStarredRepos,
}) => {
  const isStarred = starredRepos.includes(id);
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
        <ButtonStarRepo
          setStarredRepos={setStarredRepos}
          starredRepos={starredRepos}
          id={id}
        />
      </div>
    </li>
  );
};
