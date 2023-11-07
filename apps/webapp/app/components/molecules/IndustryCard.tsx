import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import { JSX } from 'react';
export interface IMethCard {
  imagePath: string;
  title: string;
  description: string;
}
export default function IndustryCard(props: IMethCard): JSX.Element {
  const { imagePath, title, description }: IMethCard = props;

  return (
    <div className="bg-white p-0 xl:p-4 flex flex-col w-full md:w-1/3 lg:w-1/3 sm:m-2.5">
      <div className="">
        <Image
          src={imagePath}
          width="100"
          height="140"
          className="w-auto"
          alt="Boosteriit"
          loading={'lazy'}
        />
      </div>
      <div className="lg:ml-4 p-2">
        <div className="flex items-center mb-5 mt-6">
          <BsCheckCircleFill className="text-green-600" />
          <p className="ml-2 font-bold">{title}</p>
        </div>
        <p className="mt-2 text-justify text-[#686767]">{description}</p>
      </div>
    </div>
  );
}
