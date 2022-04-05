import React from 'react';

import { SaveIcon } from '@heroicons/react/outline';
import { Formik, Form } from 'formik';

import { useCreatePost } from '@/containers/CreatePost/CreatePost.hooks';
import { InputField } from '@/globals/InputField/InputField';

export const CreatePost = () => {
  const { handleSubmit } = useCreatePost();

  return (
    <div className="grid w-full place-items-center">
      <Formik<Form.Post>
        initialValues={{ title: '', body: '', userId: 99 }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col w-full gap-4 px-8">
          <InputField
            name="title"
            label="Title"
            placeholder="Enter the title"
          />

          <InputField
            as="textarea"
            rows={8}
            name="body"
            label="Content"
            placeholder="Type in some markup to create a post content"
          />

          <InputField
            label="User ID"
            name="userId"
            type="text"
            placeholder="Type in user id for the author"
          />

          <button
            type="submit"
            className="flex gap-2 px-4 py-2 mx-auto text-white bg-purple-700 rounded-lg"
          >
            <SaveIcon width={20} height={20} />
            <span>Create Post</span>
          </button>
        </Form>
      </Formik>
    </div>
  );
};
