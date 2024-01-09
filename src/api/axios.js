import axios from 'axios';
// const BASE_URL = 'http://localhost:3500';
// const BASE_URL = 'http://127.0.0.1:7072';

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // headers: { 'Content-Type': 'application/json' },
});

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});