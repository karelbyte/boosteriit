import { ILink } from '../organisms/MainNavbar';
import { JSX } from 'react';
import Link from "next/link";
interface INavLinksProps {
  options: ILink[];
}
export default function NavLinks(props: INavLinksProps): JSX.Element {
  const { options }: INavLinksProps = props;

  return (
    <nav className="hidden sm:flex justify-center text-gray-600">
      {options &&
        options.map((option: ILink, index:number) => (
          <Link
            href={option.path}
            key={index}
            className="shrink-0 mr-0 md:mr-10 lg:mr-14 hover:text-boo-btn-bg cursor-pointer"
          >
            {option.title}
          </Link>
        ))}
    </nav>
  );
}
