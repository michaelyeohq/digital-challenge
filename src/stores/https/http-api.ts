// Libraries
import axios from 'axios';

export const httpApi = axios.create({
  // baseURL: 'https://digital-challenge-backend.herokuapp.com',
  baseURL: 'https://digital-challenge-backend.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default httpApi;
