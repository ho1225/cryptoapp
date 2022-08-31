import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '07e8b83daamsh5c57cc13b08b5cbp1bbe17jsn170e1160443a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery, 
} = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
    // params: {
    //   referenceCurrencyUuid: 'yhjMzLPhuIDl',
    //   offset: '0',
    //   orderBy: '24hVolume',
    //   orderDirection: 'desc'
    // },
//     headers: {
//       'X-RapidAPI-Key': '07e8b83daamsh5c57cc13b08b5cbp1bbe17jsn170e1160443a',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };