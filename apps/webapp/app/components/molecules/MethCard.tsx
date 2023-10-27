import Image from 'next/image';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export interface IMethCard {
  imagePath: string;
  title: string;
  description: string;
}

export default function MethCard(props: IMethCard) {
  const { imagePath, title, description } = props;

  return (
    <div className="bg-white p-1 lg:p-4 flex flex-col w-full md:w-1/3 lg:w-1/3 sm:m-2.5">
      <div className="">
        <Image
          src={imagePath}
          width="100"
          height="140"
          className="w-auto "
          loading={'lazy'}
          alt="marketplace."
        />
      </div>
      <div className="lg:ml-4">
        <div className="flex items-center mb-5">
          <AiOutlineCheckCircle className="text-green-600" />
          <p className="ml-2 font-bold">{title}</p>
        </div>
        <p className=" mt-2 sm:w-10/12 lg:w-8/12 sm:ml-5 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
