import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  url: "/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "7ed75709d1msh019d7b72f13d0dap10a3d7jsn433fc48eb898",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const detailOption = (coinId) => {
  return {
    method: "GET",
    url: `/coin/${coinId}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "7ed75709d1msh019d7b72f13d0dap10a3d7jsn433fc48eb898",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
};

const historyOption = (coinId, timePeriod) => {
  return {
    method: "GET",
    url: `/coin/${coinId}/history`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: `${timePeriod}`,
    },
    headers: {
      "X-RapidAPI-Key": "7ed75709d1msh019d7b72f13d0dap10a3d7jsn433fc48eb898",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => {
        console.log("Here");
        return options;
      },
    }),
    getCoinDetail: builder.query({
      query: (coinId) => {
        return detailOption(coinId);
      },
    }),
    getCoinHistory: builder.query({
      query: ({ coinId, timePeriod }) => {
        return historyOption(coinId, timePeriod);
      },
    }),
  }),
});
export const {
  useGetCoinsQuery,
  useGetCoinDetailQuery,
  useGetCoinHistoryQuery,
} = cryptoApi;
