import Image from 'next/image';
import React, { JSX, useState } from 'react';
import { ILink } from '../organisms/Navbar';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Glue from '../organisms/Glue';
import Logo from '../atoms/Logo';
interface INavLinksProps {
  options: ILink[];
}

export default function MobileNav(props: INavLinksProps): JSX.Element {
  const { options }: INavLinksProps = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [active, setActive] = useState('Home');

  return (
    <div className="sm:hidden flex items-center">
      <AiOutlineMenu      onClick={() => openDrawer()}/>
      {isDrawerOpen && (
        <div className="bg-white h-screen w-full fixed top-0 left-0 transform transition-transform duration-300 ease-in-out z-20 p-8">
          <div className="flex items-center justify-between mb-3">
            <Logo/>
            <button
              onClick={closeDrawer}
              className=" top-4 right-4"
            >
              <AiOutlineClose />
            </button>
          </div>

          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {options.map((nav: ILink, index) => (
              <li
                key={nav.id}
                className={`flex justify-between w-full items-center font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-gray-900 ' : 'text-gray-600'
                } ${index === options.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <span>{nav.title}</span>
                <BsArrowRightShort className="text-[#00B8EC]" />
              </li>
            ))}
          </ul>
          <Glue />
        </div>
      )}
    </div>
  );
}
