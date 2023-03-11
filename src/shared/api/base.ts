import axios from 'axios';
import { getSession } from 'next-auth/react';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (request) => {
  // TODO: it`s not good calling async operation on every request
  const session = await getSession();
  if (session) {
    request.headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return request;
});
