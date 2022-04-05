import React from 'react';

import Link from 'next/link';

interface PostProps {
  title: string;
  body: string;
  id: string;
}

export const PostCard = ({ title, body, id }: PostProps) => {
  return (
    <Link passHref href={`/${id}`}>
      <article className="px-4 py-2 bg-white shadow-2xl">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2 text-sm">{body.slice(0, 170)}</p>
        <p className="text-xs text-right text-zinc-400">
          {new Date().toDateString()}
        </p>
      </article>
    </Link>
  );
};
