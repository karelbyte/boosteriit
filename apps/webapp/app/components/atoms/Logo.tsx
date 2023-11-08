import Image from 'next/image';
import { JSX } from 'react';
import Link from "next/link";
export default function Logo(): JSX.Element {
  return (
    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900">
      <Image
        src="/assets/boosteriit.svg"
        width="150"
        height="140"
        priority
        alt="Boosteriit"
        className="w-auto"

      />
    </Link>
  );
}
