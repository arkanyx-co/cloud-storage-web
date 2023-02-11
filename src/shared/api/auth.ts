import { api } from './base';

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const authorizeByGoogle = (token: string) =>
  api.post<AuthResponse>('/auth/google-authentication', { token });

export const refreshToken = (refreshToken: string) =>
  api.post('/auth/refresh', null, {
    headers: { Authorization: `Bearer ${refreshToken}` },
  });

export const logout = () => api.get('/auth/logout');
