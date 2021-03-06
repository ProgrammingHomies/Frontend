import axios from 'axios';

const setAxiosConfig = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL + "/api";
  axios.defaults.headers.common['Content-Type'] = 'application/json';
};

export {setAxiosConfig};
