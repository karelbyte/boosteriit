import React, { JSX } from "react";
import { FaMobileAlt } from 'react-icons/fa';
import { BiDesktop } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';
import { CiPlane } from "react-icons/ci";

// Data Solutions
export interface ISolution {
  id: string;
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
}
const solutions: ISolution[] = [
  {
    id: 'movil',
    icon: <FaMobileAlt />,
    title: 'Aplicación para móvil',
    subtitle: 'Aplicación móvil disponible en las tiendas de Apple y Google.',
  },
  {
    id: 'desktop',
    icon: <BiDesktop />,
    title: ' Aplicación para escritorio',
    subtitle:
      'Programa que se instala en tu ordenador, funciona sin conexión a internet.',
  },
  {
    id: 'web',
    icon: <MdWeb />,
    title: 'Aplicación web',
    subtitle:
      'Sitio web responsivo, se puede acceder desde cualquier dispositivo.',
  },
];

// Data Industries
export interface IAvailable {
  icon: JSX.Element;
  title: string;
}
export interface IIndustry {
  id: string;
  icon: JSX.Element;
  image: string;
  title: string;
  description: string;
  available: IAvailable[];
}
const industries: IIndustry[] = [
  {
    id: 'trips',
    icon: <CiPlane />,
    image: '',
    title: 'Viajes',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
  {
    id: 'fintech',
    icon: <CiPlane />,
    image: '',
    title: 'Fintech',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
];

// Data Modules
export interface IModule {
  id: string;
  icon: JSX.Element;
  image: string;
  title: string;
  description: string;
}
const modules: IModule[] = [
  {
    id: 'trips',
    icon: <CiPlane />,
    image: '',
    title: 'Viajes',
    description: 'Breve descripción de la industria de máximo 2 líneas',
  },
  {
    id: 'fintech',
    icon: <CiPlane />,
    image: '',
    title: 'Viajes',
    description: 'Breve descripción de la industria de máximo 2 líneas',
  },
];

export { solutions, industries, modules };
