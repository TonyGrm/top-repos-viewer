import React from 'react';

export const ButtonStarRepo = ({ setStarredRepos, repo, starredRepos }) => {
  const onClick = () => {
    if (!starredRepos.some((savedRepo) => savedRepo.id === repo.id)) {
      return setStarredRepos([...starredRepos, repo]);
    } else
      return setStarredRepos(
        starredRepos.filter((savedRepo) => savedRepo.id !== repo.id)
      );
  };

  const isStarred = starredRepos.some((savedRepo) => savedRepo.id === repo.id);
  const style = `btn-star ${isStarred ? 'btn-star--unstar' : ''}`;

  return (
    <button className={style} onClick={onClick}>
      {isStarred ? 'Unstar Repo' : 'Star Repo'}
    </button>
  );
};
