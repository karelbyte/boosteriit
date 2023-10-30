import Image from 'next/image';
import { JSX } from 'react';
export default function Logo(): JSX.Element {
  return (
    <a className="flex title-font font-medium items-center text-gray-900">
      <Image
        src="/assets/boosteriit.svg"
        width="150"
        height="140"
        priority
        alt="Boosteriit"
        className="w-auto"
      />
    </a>
  );
}
