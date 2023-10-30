import CreateNow from '../atoms/CreateNow';
import Logo from '../atoms/Logo';
import NavLinks from '../molecules/NavLinks';
import MobileNav from '../molecules/MobileNav';
import type {JSX} from 'react'
export interface ILink {
  id: string;
  title: string;
}
export default function Navbar(): JSX.Element {
  const links: ILink[] = [
    { id: 'industry', title: 'Industria' },
    { id: 'solutions', title: 'Arma tu solución' },
    { id: 'contact', title: 'Contacto' },
  ];

  return (
    <header className="text-gray-900 body-font">
      <div className="mx-auto flex items-center justify-between py-2 px-8 sm:py-4 sm:px-10 lg:px-20 md:flex-row   border-b-1 shadow-sm">
        <Logo />
        <NavLinks options={links} />
        <CreateNow mobileHidden customStyle="py-3.5 px-6" />
        <MobileNav options={links} />
      </div>
    </header>
  );
}
