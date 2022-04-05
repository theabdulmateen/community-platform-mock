import { useMutation } from 'react-query';

import { api } from '../index';

interface CreateCommentRequest {
  comment: string;
  userId: number;
}

export const createCommentAPI = (request: CreateCommentRequest) => {
  return api.post('https://jsonplaceholder.typicode.com/comments', request);
};

export const useCreateComment = () => {
  return useMutation('createComment', createCommentAPI);
};
