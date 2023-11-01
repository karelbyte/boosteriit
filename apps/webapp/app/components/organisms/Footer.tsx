import Logo from '../atoms/Logo';
import { JSX } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoInstagram } from 'react-icons/bi';
export default function Footer(): JSX.Element {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between border-t border-gray-200 pt-4 px-8 sm:py-12 sm:px-10 lg:px-20">
        <div className="-ml-2 sm:ml-0 w-full md:w-1/4">
          <Logo />
        </div>
        <div className="flex flex-col justify-start w-full md:w-1/4">
          <a className="mb-2 md:mr-20 hover:text-gray-900 cursor-pointer">
            Industria
          </a>
          <a className="mb-4 md:mr-20 hover:text-gray-900 cursor-pointer">
            Arma tu solución
          </a>
        </div>
        <div className="flex flex-col justify-start w-full md:w-1/4">
          <span className="mb-2">Contacto:</span>
          <span className="mb-2">admin@boosteriit.com</span>
          <span className="mb-4">(+52) 53 312 309 8902</span>
        </div>
        <div className="flex flex-col justify-start w-full md:w-1/4">
          <span className="mb-4">Encuéntranos en:</span>
          <div className="flex">
            <AiFillLinkedin className="mr-6" />
            <BiLogoInstagram className="mr-6" />
            <FaFacebookF />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border-t justify-center border-gray-200 mt-6 py-3 mx-8 sm:mx-2 lg:mx-20">
        <div className="text-sm md:text-md mb-4 sm:mb-0">© 2023 Boosteriit todos los derechos reservados</div>
        <div className="mx-0 sm:mx-12 text-sm md:text-md mb-4 sm:mb-0">Términos y condiciones</div>
        <div className="text-sm md:text-md mb-[5rem]">Política de privacidad</div>
      </div>
    </>
  );
}
