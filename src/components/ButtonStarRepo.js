import React from 'react';

export const ButtonStarRepo = ({ setStarredRepos, id, starredRepos }) => {
  const onClick = () => {
    if (!starredRepos.includes(id)) {
      return setStarredRepos([...starredRepos, id]);
    } else return setStarredRepos(starredRepos.filter((el) => el !== id));
  };

  const isStarred = starredRepos.includes(id);
  const style = `btn-star ${isStarred ? 'btn-star--unstar' : ''}`;

  return (
    <button className={style} onClick={onClick}>
      {isStarred ? 'Unstar Repo' : 'Star Repo'}
    </button>
  );
};
