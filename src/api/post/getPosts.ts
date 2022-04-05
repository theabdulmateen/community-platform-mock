import { useQuery } from 'react-query';

import { api } from '../index';

export const getPosts = () => {
  return api.get('https://jsonplaceholder.typicode.com/posts');
};

export const usePosts = () => {
  return useQuery('posts', getPosts);
};
