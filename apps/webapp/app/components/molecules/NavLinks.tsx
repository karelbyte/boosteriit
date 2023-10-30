import { ILink } from '../organisms/Navbar';
import { JSX } from 'react';
interface INavLinksProps {
  options: ILink[];
}
export default function NavLinks(props: INavLinksProps): JSX.Element {
  const { options }: INavLinksProps = props;

  return (
    <nav className="hidden sm:flex text-gray-600">
      {options &&
        options.map((option: ILink) => (
          <a
            key={option.id}
            className="mr-5 md:mr-20 hover:text-gray-900 cursor-pointer"
          >
            {option.title}
          </a>
        ))}
    </nav>
  );
}
