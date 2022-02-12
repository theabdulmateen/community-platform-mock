import React from 'react';

import { Landing } from '@/containers/Landing/Landing';
import { Layout } from '@/layout/Layout';
import { Meta } from '@/layout/Meta';

export default function LandingPage() {
  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Landing />
    </Layout>
  );
}
