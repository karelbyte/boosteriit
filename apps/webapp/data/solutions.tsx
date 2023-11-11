import React, { JSX } from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { BiDesktop } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';

// Data Solutions
export interface ISolution {
  id: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}
export const solutions: ISolution[] = [
  {
    id: 'mobile',
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


