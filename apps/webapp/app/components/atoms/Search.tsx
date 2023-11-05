import React, { JSX } from 'react';
import { SlMagnifier } from 'react-icons/sl';
interface ISearchProps {
  placeholder: string;
}
export default function Search(props: ISearchProps): JSX.Element {
  const { placeholder } = props;
  return (
    <div className="flex justify-end items-center relative w-full">
      <input
        placeholder={placeholder}
        className="border border-gray-200 rounded-lg p-2 w-full focus:outline-none focus:border-sky-500"
      />
      <SlMagnifier className="absolute mr-2 w-6" />
    </div>
  );
}
