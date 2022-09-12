import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '07e8b83daamsh5c57cc13b08b5cbp1bbe17jsn170e1160443a',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';