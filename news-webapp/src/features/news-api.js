import axios from "axios";

const API_URL = "https://newsapi.org/v2";
const API_KEY = '1c1badd6af5844fc99f3c31616fa20e0'

export const getNewsHeadline = () => {
  return axios.get(
    `${API_URL}/top-headlines?pageSize=4&page=2&country=id&apiKey=${API_KEY}`
  );
};

export const getNewsCategory = (params) => {
  return axios.get(
    `${API_URL}/everything?q=${params}&page=1&apiKey=${API_KEY}`
  );
};

export const getNewsEverything = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const todayNew = today.toISOString().slice(0, 10);
  return axios.get(
    `${API_URL}/everything?q=tech&page=1&from=2022-11-18&to=${todayNew}&apiKey=${API_KEY}`
  );
};

const newsAPI = {
  getNewsEverything,
  getNewsHeadline,
  getNewsCategory,
};

export default newsAPI;
