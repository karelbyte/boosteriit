import Image from 'next/image';
import { FaMobileAlt } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import type { JSX } from 'react';

interface IItem {
  iconLeft: JSX.Element;
  textLef: string;
  iconRight: JSX.Element;
  textRight: string;
}

export default function ProfileOfOurExperts() {
  const skills: IItem[] = [
    {
      iconLeft: <FaMobileAlt />,
      textLef: 'Desarrollador Móvil',
      iconRight: <MdWeb />,
      textRight: 'Desarrollador Web',
    },
    {
      iconLeft: <FaMobileAlt />,
      textLef: 'Desarrollador Móvil',
      iconRight: <MdWeb />,
      textRight: 'Desarrollador Web',
    },
    {
      iconLeft: <FaMobileAlt />,
      textLef: 'Desarrollador Móvil',
      iconRight: <MdWeb />,
      textRight: 'Desarrollador Web',
    },
    {
      iconLeft: <FaMobileAlt />,
      textLef: 'Desarrollador Móvil',
      iconRight: <MdWeb />,
      textRight: 'Desarrollador Web',
    },
    {
      iconLeft: <FaMobileAlt />,
      textLef: 'Desarrollador Móvil',
      iconRight: <MdWeb />,
      textRight: 'Desarrollador Web',
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center py-6 px-8 sm:py-12 sm:px-10 lg:px-20">
      <p className="mb-12 font-bold text-xl lg:text-center lg:text-4xl ">
        Conoce el Perfil de Nuestros Expertos
      </p>
      <p className="mb-12 lg:w-10/12 xl:w-6/12 text-justify sm:text-center ">
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
            alt="marketplace."
          />
        </div>
        <div className="flex flex-col items-start">
          {skills &&
            skills.map((skill: IItem, index: number) => (
              <div key={index} className="flex flex-col sm:flex-row">
                <div className="flex m-2 sm:m-6 items-center">
                  <div className="p-4 text-[#00B8EC] border rounded-full mr-6 border-[#CCF1FB] bg-[#CCF1FB]">
                    {skill.iconLeft}
                  </div>
                  <p className="text-[#161616]">{skill.textLef}</p>
                </div>
                <div className="flex m-2 sm:m-6 items-center">
                  <div className="p-4 text-[#00B8EC] border rounded-full mr-6 border-[#CCF1FB] bg-[#CCF1FB]">
                    {skill.iconLeft}
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
