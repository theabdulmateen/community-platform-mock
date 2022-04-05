import { useQuery } from 'react-query';

import { api } from '../index';

export const getComments = () => {
  return api.get('https://jsonplaceholder.typicode.com/comments');
};

export const useComments = () => {
  return useQuery('comments', getComments);
};
