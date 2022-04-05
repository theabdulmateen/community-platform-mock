import React from 'react';

import { CreatePost } from '@/containers/CreatePost/CreatePost';
import { Layout } from '@/layout/Layout';
import { Meta } from '@/layout/Meta';

export default function CreatePostPage() {
  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <CreatePost />
    </Layout>
  );
}
