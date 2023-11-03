import { ILink } from '../organisms/Navbar';
import { JSX } from 'react';
interface INavLinksProps {
  options: ILink[];
}
export default function NavLinks(props: INavLinksProps): JSX.Element {
  const { options }: INavLinksProps = props;

  return (
    <nav className="hidden  sm:flex justify-center text-gray-600">
      {options &&
        options.map((option: ILink) => (
          <a
            key={option.id}
            className="shrink-0 mr-0 md:mr-10 lg:mr-14 hover:text-gray-900 cursor-pointer"
          >
            {option.title}
          </a>
        ))}
    </nav>
  );
}
