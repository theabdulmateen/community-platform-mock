import { useMutation } from 'react-query';

import { api } from '../index';

interface CreatePostRequest {
  title: string;
  body: string;
  userId: number;
}

export const createPostAPI = (request: CreatePostRequest) => {
  return api.post('https://jsonplaceholder.typicode.com/posts', request);
};

export const useCreatePostAPI = () => {
  return useMutation('createPost', createPostAPI);
};
