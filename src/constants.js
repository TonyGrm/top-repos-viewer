export const API_BASE_URL = 'https://api.github.com/search/repositories';

export const getLastWeekDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
    .toISOString()
    .split('T')[0];
};

export const LANGUAGE_MAP = {
  java: 'Java',
  js: 'Javascript',
  python: 'Python',
  go: 'Go',
  ruby: 'Ruby'
};
