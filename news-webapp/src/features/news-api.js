import axios from "axios";

const API_URL = "https://newsapi.org/v2";

export const getNewsHeadline = () => {
  return axios.get(
    `${API_URL}/top-headlines?pageSize=4&page=2&country=id&apiKey=9cefa0877a0d4f0e8a2e2694f664dfd6`
  );
};

export const getNewsCategory = (params) => {
  return axios.get(
    `${API_URL}/everything?q=${params}&page=1&apiKey=9cefa0877a0d4f0e8a2e2694f664dfd6`
  );
};

export const getNewsEverything = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const todayNew = today.toISOString().slice(0, 10);
  return axios.get(
    `${API_URL}/everything?q=tech&page=1&from=2022-11-18&to=${todayNew}&apiKey=9cefa0877a0d4f0e8a2e2694f664dfd6`
  );
};

const newsAPI = {
  getNewsEverything,
  getNewsHeadline,
  getNewsCategory,
};

export default newsAPI;
