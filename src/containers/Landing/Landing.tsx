import React, { useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/outline';

import { usePosts } from '@/api/posts';
import { PostCard } from '@/components/Post/Post';

export const Landing = () => {
  const [slice, setSlice] = useState(3);

  const { data: postsData, isLoading } = usePosts();

  return (
    <div className="w-full px-4 pb-24 bg-zinc-50">
      <header className="px-4 mt-12">
        <h4 className="text-2xl font-semibold">Current Posts</h4>
      </header>

      <section className="flex flex-col gap-4 mt-4">
        {isLoading ? (
          <div className="grid min-h-[100px] w-full place-items-center">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {postsData?.data.slice(0, slice).map((post: any) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))}

            {postsData?.data?.length > slice && (
              <button
                onClick={() => setSlice((prev) => prev + 3)}
                className="flex items-center gap-2 px-4 py-2 mx-auto mt-4 text-white bg-purple-700 rounded-md"
              >
                <ChevronDownIcon width={20} height={20} />
                <span>Expand More</span>
              </button>
            )}
          </>
        )}
      </section>
    </div>
  );
};
