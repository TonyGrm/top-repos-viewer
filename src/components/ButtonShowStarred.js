import React from 'react';

export const ButtonShowStarred = ({ setShowStarred, showStarred }) => (
  <button
    className="btn-show-starred-only"
    onClick={() => setShowStarred((showStarred) => !showStarred)}
  >
    {showStarred ? 'Display all' : 'Display starred only'}
  </button>
);
