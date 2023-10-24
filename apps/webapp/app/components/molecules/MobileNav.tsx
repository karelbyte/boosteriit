import Image from 'next/image';
import { useState } from 'react';
import { ILink } from '../organisms /Navbar';

interface INavLinksProps {
  options: ILink[];
}
export default function MobileNav(props: INavLinksProps) {
  const { options } = props;

  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Image
        src={toggle ? '/assets/x.svg' : '/assets/menu.svg'}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle(!toggle)}
        width="50"
        height="40"
      />
      <div
        className={`${
          !toggle ? 'hidden' : 'flex'
        } p-6 bg-white absolute top-12 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {options.map((nav: ILink, index) => (
            <li
              key={nav.id}
              className={` font-medium cursor-pointer text-[16px] ${
                active === nav.title ? 'text-gray-900 ' : 'text-gray-600'
              } ${index === options.length - 1 ? 'mb-0' : 'mb-4'}`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
