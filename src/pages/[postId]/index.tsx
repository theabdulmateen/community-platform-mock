import React from 'react';

import { GetServerSideProps } from 'next';

import { getPostAPI } from '@/api/post/getPost';
import { PostDetails } from '@/containers/PostDetails/PostDetails';
import { Layout } from '@/layout/Layout';
import { Meta } from '@/layout/Meta';

interface PostDetailsPageProps {
  post: Form.Post;
}

export default function PostDetailsPage({ post }: PostDetailsPageProps) {
  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <PostDetails title={post.title} body={post.body} userId={post.userId} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const result = await getPostAPI({ postId: ctx.query.postId as string });

    return {
      props: {
        post: result.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
