import Logo from '../atoms/Logo';
import { JSX } from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoInstagram } from 'react-icons/bi';
import Link from 'next/link';
export default function Footer(): JSX.Element {
  return (
    <div className="pt-6 border-t w-full bg-[#121843] text-white">
      <div className="flex flex-col md:flex-row justify-between border-gray-200 px-8 sm:py-12 sm:px-10 lg:px-20">
        <div className="mb-6 md:mb-0 -ml-2 sm:ml-0 w-full md:w-1/4">
          <Logo />
        </div>
        <div className="flex flex-col justify-start w-full md:w-1/4">
          <Link
            href={'/industries'}
            className="mb-2 md:mr-20 hover:text-boo-btn-bg cursor-pointer"
          >
            Industria
          </Link>
          <Link
            href={'/modules'}
            className="mb-4 md:mr-20 hover:text-boo-btn-bg cursor-pointer"
          >
            Arma tu solución
          </Link>
        </div>
        <div className="flex flex-col justify-start w-full md:w-1/4">
          <span className="mb-2">Contacto:</span>
          <span className="mb-2">admin@boosteriit.com</span>
          <span className="mb-4">(+52) 53 312 309 8902</span>
        </div>
        <div className="flex flex-col justify-start w-full md:w-1/4">
          <span className="mb-4">Encuéntranos en:</span>
          <div className="flex">
            <BiLogoLinkedin className="mr-6" />
            <BiLogoInstagram className="mr-6" />
            <FaFacebookF />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border-t justify-center border-gray-200 mt-6 py-3 mx-8 sm:mx-2 lg:mx-20">
        <div className="text-sm md:text-md mb-4 sm:mb-0">
          © 2023 Boosteriit todos los derechos reservados
        </div>
        <div className="mx-0 sm:mx-12 text-sm md:text-md mb-4 sm:mb-0">
          <Link
            href={'/terms-conditions'}
            className="mb-4 md:mr-20 hover:text-boo-btn-bg cursor-pointer"
          >
            Términos y condiciones
          </Link>
        </div>
        <div className="text-sm md:text-md mb-[2rem]">
          {' '}
          <Link
            href={'/privacy-notice'}
            className="mb-4 md:mr-20 hover:text-boo-btn-bg cursor-pointer"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </div>
  );
}
