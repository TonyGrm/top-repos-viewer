import React from 'react';
import { ButtonShowStarred } from './ButtonShowStarred';
import { SelectLanguage } from './SelectLanguage';

export const Header = ({ setShowStarred, showStarred, setLanguage }) => (
  <header>
    <h1>Github best repos</h1>
    <div className="filters-container">
      <ButtonShowStarred
        setShowStarred={setShowStarred}
        showStarred={showStarred}
      />
      <SelectLanguage setLanguage={setLanguage} />
    </div>
  </header>
);
