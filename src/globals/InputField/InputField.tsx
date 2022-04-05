import React from 'react';

import { Field } from 'formik';

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  as?: string;
  rows?: number;
}

export const InputField = ({
  label,
  name,
  placeholder,
  type = 'text',
  as = 'input',
  rows = 8,
}: InputFieldProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <Field
        as={as}
        rows={rows}
        className="px-4 py-2 border rounded-md border-zinc-400 "
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};
