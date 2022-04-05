import { useRouter } from 'next/router';

import { useCreatePostAPI } from '../../api/post/createPost';

export const useCreatePost = () => {
  const { mutateAsync: createPost } = useCreatePostAPI();
  const router = useRouter();

  const handleSubmit = async (values: Form.Post) => {
    try {
      const result = await createPost(values);

      if (result.status === 201) {
        // eslint-disable-next-line no-alert
        alert('created a post successfully');
        router.push('/');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return { handleSubmit };
};
