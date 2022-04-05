import React, { useState } from 'react';

import { DocumentAddIcon } from '@heroicons/react/outline';

import { useCreateComment } from '@/api/comments/createComment';
import { useComments } from '@/api/comments/getComments';
import { queryClient } from '@/api/index';

type PostDetailsProps = Form.Post;

export const PostDetails = ({ title, body, userId }: PostDetailsProps) => {
  const [commentInput, setCommentInput] = useState('');

  const { mutateAsync: createComment } = useCreateComment();
  const { data: commentsData, isLoading } = useComments();

  const handleSubmit = async () => {
    try {
      const result = await createComment({ comment: commentInput, userId: 99 });

      if (result.status === 201) {
        // eslint-disable-next-line no-alert
        alert('created a comment successfully');
        setCommentInput('');
        queryClient.invalidateQueries('comments');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <article className="flex flex-col w-full px-4 pb-24 bg-zinc-50">
      <header className="px-4 mt-12">
        <h4 className="text-2xl font-black leading-6">{title}</h4>
      </header>

      <section className="flex flex-col gap-4 px-4 mt-4">
        <p>{body}</p>

        <p className="mt-4 text-lg font-bold text-zinc-500">By #{userId}</p>
      </section>

      <section className="pt-4 mt-auto">
        <textarea
          rows={4}
          name="comment"
          placeholder="What did you think, leave your comment here."
          className="w-full px-4 py-2 border rounded-lg border-zinc-200"
          value={commentInput}
          onChange={(e) => setCommentInput(e.currentTarget.value)}
        />

        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-4 py-2 mx-auto mt-4 text-white bg-purple-700 rounded-md"
        >
          <DocumentAddIcon width={20} height={20} />

          <span>Comment</span>
        </button>

        <section>
          {isLoading && (
            <div className="grid min-h-[100px] w-full place-items-center">
              <p>Loading...</p>
            </div>
          )}

          <div className="flex flex-col gap-4 mt-8">
            {commentsData?.data?.slice(0, 5).map((comment: any) => (
              <div
                key={comment.id}
                className="px-4 py-2 bg-white rounded-lg shadow-xl"
              >
                <p className="text-sm">{comment.body}</p>
                <p className="font-semibold ">By {comment.name}</p>
                <p className="text-xs text-right text-zinc-500/70">
                  {comment.email}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </article>
  );
};
