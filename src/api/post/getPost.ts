import { api } from '../index';

interface GetPostAPIRequest {
  postId: string;
}

export const getPostAPI = ({ postId }: GetPostAPIRequest) => {
  return api.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};
