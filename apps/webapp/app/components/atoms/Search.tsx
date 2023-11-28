import React, { JSX } from 'react';
import { SlMagnifier } from 'react-icons/sl';
interface ISearchProps {
  placeholder: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}
export default function Search(props: ISearchProps): JSX.Element {
  const { placeholder, setTerm } = props;
  return (
    <div className="flex justify-end items-center relative w-full mb-2">
      <input
        placeholder={placeholder}
        className="border border-gray-200 rounded-lg p-2 w-full focus:outline-none focus:border-sky-500"
        onChange={(event) => setTerm(event.target.value)}
      />
      <SlMagnifier className="absolute mr-2 w-6 text-gray-300" />
    </div>
  );
}
