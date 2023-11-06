import React, { JSX, MouseEventHandler } from "react";
import { useRouter } from 'next/navigation';
import { BsArrowLeftCircle } from 'react-icons/bs';
interface IBackProps {
  url: string;
  actionFn?: () => void | MouseEventHandler
}
export default function Back(props: IBackProps): JSX.Element {
  const { url, actionFn }: IBackProps = props;
  const router = useRouter();
  const goToUrl = () => {
    if (actionFn) actionFn()
    router.push(url);
  };
  return <BsArrowLeftCircle onClick={() => goToUrl()} className="cursor-pointer" />;
}
