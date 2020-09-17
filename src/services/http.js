import axios from 'axios'

const http = axios.create({

  baseURL: process.env.production.VUE_APP_ROOT_API,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default http;

