import React, { JSX } from 'react';
import { useRouter } from 'next/navigation';
import { BsArrowLeftCircle } from 'react-icons/bs';
interface IBackProps {
  url: string;
}
export default function Back(props: IBackProps): JSX.Element {
  const { url }: IBackProps = props;
  const router = useRouter();
  const goToUrl = () => {
    router.push(url);
  };
  return <BsArrowLeftCircle onClick={() => goToUrl()} className="cursor-pointer" />;
}
