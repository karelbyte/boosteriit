import Image from 'next/image';
import { FaMobileAlt, FaHeadSideVirus, FaRegObjectGroup } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { BiDesktop } from 'react-icons/bi';
import { BsShieldCheck, BsCloudArrowDown } from 'react-icons/bs';
import { GoProjectSymlink } from 'react-icons/go';
import { TbShieldCog, TbUserHexagon } from 'react-icons/tb';
import type { JSX } from 'react';
interface IItem {
  iconLeft: JSX.Element;
  textLef: string;
  iconRight: JSX.Element;
  textRight: string;
}
export default function ProfileOfOurExperts(): JSX.Element {
  const skills: IItem[] = [
    {
      iconLeft: <FaMobileAlt />,
      textLef: 'Desarrollador Móvil',
      iconRight: <MdWeb />,
      textRight: 'Desarrollador Web',
    },
    {
      iconLeft: <BiDesktop />,
      textLef: 'Desarrollador Desktop',
      iconRight: <FaHeadSideVirus />,
      textRight: 'Machine Learning Engineer (IA)',
    },
    {
      iconLeft: <BsShieldCheck />,
      textLef: 'Arquitecto de Software',
      iconRight: <FaRegObjectGroup />,
      textRight: 'Diseñador Gráfico UX/UI',
    },
    {
      iconLeft: <GoProjectSymlink />,
      textLef: 'Project Manager',
      iconRight: <BsCloudArrowDown />,
      textRight: 'Analista de Sistema',
    },
    {
      iconLeft: <TbUserHexagon />,
      textLef: 'Lider Técnico',
      iconRight: <TbShieldCog />,
      textRight: 'Tester Ingeniero de Pruebas',
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center py-6 px-8 sm:py-12 sm:px-10 lg:px-20">
      <p className="mb-12 font-black text-xl lg:text-center lg:text-4xl ">
        Conoce el Perfil de Nuestros Expertos
      </p>
      <p className="mb-12 lg:w-11/12 xl:w-5/12 text-justify sm:text-center ">
        Nuestro equipo en Boosteriit está compuesto por profesionales altamente
        calificados y apasionados por la tecnología. Estos equipos trabajan en
        conjunto para ofrecer resultados sobresalientes.
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="lg:mr-24">
          <Image
            src="/assets/profiles/profile.svg"
            width="100"
            height="140"
            className="w-auto mt-4"
            priority
            alt="Boosteriit"
          />
        </div>
        <div className="flex flex-col items-start">
          {skills &&
            skills.map((skill: IItem, index: number) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row w-full justify-between"
              >
                <div className="flex m-2 sm:m-6 items-center lg:w-1/2">
                  <div className="p-4 text-xl text-boo-btn-bg border rounded-full mr-6 border-boo-blue-2 bg-boo-blue-2">
                    {skill.iconLeft}
                  </div>
                  <p className="text-[#161616]">{skill.textLef}</p>
                </div>
                <div className="flex m-2 sm:m-6 items-center lg:w-1/2">
                  <div className="p-4 text-xl text-boo-btn-bg border rounded-full mr-6 border-boo-blue-2 bg-boo-blue-2">
                    {skill.iconRight}
                  </div>
                  <p className="text-[#161616]">{skill.textRight}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
