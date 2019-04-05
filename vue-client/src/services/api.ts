import axios from 'axios';

const host = process.env.API_HOST || 'localhost';

export default () => {
  return axios.create({
    baseURL: `http://${host}:3000`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
