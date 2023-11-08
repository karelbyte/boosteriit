import CreateNow from '../atoms/CreateNow';
import Logo from '../atoms/Logo';
import NavLinks from '../molecules/NavLinks';
import MobileNav from '../molecules/MobileNav';
import type { JSX } from 'react';
import ShoppingCartBtn from '../atoms/ShoppingCartBtn';
export interface ILink {
  path: string;
  title: string;
}
export default function MainNavbar(): JSX.Element {
  const links: ILink[] = [
    { path: '/industries', title: 'Industria' },
    { path: '/modules', title: 'Arma tu solución' },
    { path: '/contact', title: 'Contacto' },
  ];

  return (
    <header className="text-gray-900 body-font fixed bg-white w-full z-50">
      <div className="mx-auto flex items-center justify-between sm:border-slate-700 py-2 px-8 sm:py-4 sm:px-10 lg:px-20 md:flex-row border-b-1 shadow-sm">
        <MobileNav options={links} />
        <Logo />
        <NavLinks options={links} />
        <div className="flex items-center">
          <ShoppingCartBtn />
          <CreateNow mobileHidden customStyle="py-3.5 px-6" />
        </div>
      </div>
    </header>
  );
}
