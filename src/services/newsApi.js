import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const newsOptions = (newsCategory, count) => {
  return {
    method: "GET",
    url: "/search",
    params: {
      q: newsCategory,
      count: count,
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "7ed75709d1msh019d7b72f13d0dap10a3d7jsn433fc48eb898",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
};

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCoinNews: builder.query({
      query: ({ newsCategory, count }) => {
        // console.log(newsOptions(newsCategory, count));
        return newsOptions(newsCategory, count);
      },
    }),
  }),
});
export const { useGetCoinNewsQuery } = newsApi;
