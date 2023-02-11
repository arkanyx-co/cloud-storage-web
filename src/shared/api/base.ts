import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const setAuthToken = (accessToken: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
