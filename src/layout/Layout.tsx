import React, { ReactNode } from 'react';

import { PlusIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

type LayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const router = useRouter();

  return (
    <div className="relative w-full antialiased text-gray-700">
      {props.meta}

      <div className="flex flex-col min-h-screen mx-auto">
        <div className="flex flex-1">{props.children}</div>
      </div>

      <button
        onClick={() => router.push('/create')}
        className="absolute p-3 transition-all bg-purple-700 rounded-full hover:bg-purple-700/50 bottom-8 right-8"
      >
        <PlusIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};
