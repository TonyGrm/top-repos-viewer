import React, { useState, useEffect } from 'react';
import { API_BASE_URL, getLastWeekDate } from '../constants';
import { Header } from './Header';
import { Content } from './Content';

export const AppContainer = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);
  const [showStarred, setShowStarred] = useState(false);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    fetch(
      `${API_BASE_URL}?q=${
        language ? `language:${language}+` : ''
      }created:>=${getLastWeekDate()}&sort=stars&order=desc`
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items);
        setLoading(false);
      });
  }, [language]);

  return (
    <>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <Header
            setLanguage={setLanguage}
            setShowStarred={setShowStarred}
            showStarred={showStarred}
            setStarredRepos={setStarredRepos}
          />
          <Content
            selectedLanguage={language}
            showStarred={showStarred}
            repos={repos}
            starredRepos={starredRepos}
            setStarredRepos={setStarredRepos}
          />
        </>
      )}
    </>
  );
};
