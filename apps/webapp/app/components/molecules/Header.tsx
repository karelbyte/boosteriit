import type { JSX } from 'react';
import Back from '../atoms/Back';
import Logo from '../atoms/Logo';
export interface IHeader {
  title: string;
  children: JSX.Element;
  urlBack: string;
}
export default function Header(props: IHeader): JSX.Element {
  const { title, children, urlBack }: IHeader = props;
  return (
    <header className="text-gray-900 body-font fixed bg-white w-full z-50">
      <div className="mx-auto flex items-center justify-between sm:border-slate-700 py-2 px-8 sm:py-4 sm:px-10 lg:px-20 md:flex-row  border-b-1 shadow-sm">
        <div className="flex items-center gap-4">
          <Back url={urlBack} />
          <Logo />
        </div>
        <span className="hidden md:flex text-lg">{title}</span>
        <div className="hidden md:flex lg:w-4/12 2xl:w-2/12">{children}</div>
      </div>
    </header>
  );
}
