const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getBaseUrl = () => {
  return API_BASE_URL.replace('/api', '');
};

export default API_BASE_URL;

