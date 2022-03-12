import React from 'react';

export const SelectLanguage = ({ setLanguage }) => {
  return (
    <div className="select-language-container">
      <div>SELECT LANGUAGE</div>
      <select
        name="Language"
        onChange={(evt) => setLanguage(evt.target.value)}
      >
        <option value="">All</option>
        <option value="js">Javascript</option>
        <option value="python">Python</option>
        <option value="go">Go</option>
      </select>
    </div>
  );
};
