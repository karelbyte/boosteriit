import React, { JSX } from 'react';
import { CiPlane } from 'react-icons/ci';
import { BsBuildings, BsCurrencyBitcoin } from 'react-icons/bs';
import { PiHamburgerBold } from 'react-icons/pi';
import {LiaHotelSolid} from 'react-icons/lia'
import { BiDesktop } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';
import { FaGuitar, FaHandHoldingHeart, FaMobileAlt } from 'react-icons/fa';
export interface IAvailable {
  id: string;
  icon: JSX.Element;
  title: string;
}
export interface IIndustry {
  id: string;
  icon: JSX.Element;
  image: string;
  title: string;
  subtitle: string,
  description: string;
  available: IAvailable[];
}
export const industries: IIndustry[] = [
  {
    id: 'trips',
    icon: <CiPlane />,
    image: '',
    title: 'Viajes',
    subtitle: 'Reservas de viajes y hospedaje',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
  {
    id: 'fintech',
    icon: <BsCurrencyBitcoin />,
    image: '',
    title: 'Fintech',
    subtitle: 'Para compañías de tecnología financiera',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
  {
    id: 'realestate',
    icon: <BsBuildings />,
    image: '',
    title: 'Bienes y raíces',
    subtitle: 'Compra, venta y renta de inmuebles',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
  {
    id: 'Restaurant',
    icon: <PiHamburgerBold />,
    image: '',
    title: 'Restaurante',
    subtitle: 'Restaurante',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
  {
    id: 'healthcare',
    icon: <FaHandHoldingHeart />,
    image: '',
    title: 'Salud y cuidado',
    subtitle: 'Salud y cuidado',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
  {
    id: 'entertainment',
    image: '',
    icon: <FaGuitar />,
    title: 'Entretenimiento',
    subtitle: 'Entretenimiento',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
  {
    id: 'hospitality',
    image: '',
    icon: <LiaHotelSolid />,
    title: 'Hoteleria',
    subtitle: 'Reservas de viajes y hospedaje',
    description: 'Breve descripción de la industria de máximo 2 líneas',
    available: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App de escritorio',
      },
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
      },
    ],
  },
];
