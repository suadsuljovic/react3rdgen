import axios from "axios";
const quoteApi = axios.create({
  baseURL: "https://api.quotable.io",
});

export const getQuote = async (query, perPage) => {
  let url = "/search/quotes";
  url += "?query=" + query;
  url += "&limit=" + perPage;

  return quoteApi.get(url);
};

export const navigatePage = async () => {};
