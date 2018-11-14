import React from 'react';

export default function Label({ inputFor = '', text }) {
  return (
    <label
      htmlFor={inputFor}
      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
    >
      {text}
    </label>
  );
}
