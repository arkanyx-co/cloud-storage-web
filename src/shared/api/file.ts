import { api } from './base';

const BASE_PATH = '/files';

export const getFiles = () => api.get(BASE_PATH);

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  return api.post(`${BASE_PATH}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
