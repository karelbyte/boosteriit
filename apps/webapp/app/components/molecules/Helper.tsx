import { JSX } from 'react';
import Image from 'next/image';

export default function Herper(): JSX.Element {
  return (
    <div className="hidden md:flex items-center fixed bottom-0 right-0 m-4 text-white rounded">
      <div className="flex flex-col bg-boo-gray-hard p-2 h-16 rounded-lg">
        <span>¿Tienes dudas?</span>
        <span>Obtén atención personalizada</span>
      </div>
      <Image
        src="/assets/helper.svg"
        width="150"
        height="140"
        priority
        alt="Boosteriit"
        className="w-auto"
      />
    </div>
  );
}
