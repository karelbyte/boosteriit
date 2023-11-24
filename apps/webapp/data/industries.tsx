import React, { JSX } from 'react';
import { CiPlane } from 'react-icons/ci';
import { BsBuildings, BsCurrencyBitcoin } from 'react-icons/bs';
import { PiHamburgerBold } from 'react-icons/pi';
import { LiaHotelSolid } from 'react-icons/lia';
import { BiDesktop } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';
import { BiNetworkChart } from "react-icons/bi";
import { FaGuitar, FaHandHoldingHeart, FaMobileAlt } from 'react-icons/fa';
export interface IAvailable {
  id: string;
  icon: JSX.Element;
  title: string;
}
export interface IIndustry {
  id: string;
  icon: JSX.Element;
  imageBig: string;
  imageShort: string;
  imageMobile: string;
  title: string;
  subtitle: string;
  description: string;
  available: IAvailable[];
}
export const industries: readonly IIndustry[] = [
  Object.freeze({
    id: 'trips',
    icon: <CiPlane />,
    imageBig: './assets/industries/trips/image.svg',
    imageShort: '',
    imageMobile: '',
    title: 'Viajes',
    subtitle: 'Reservas de viajes y hospedaje',
    description:
      'Encontraras una aplicación base, diseñada para gestionar los pedidos de tus clientes y recibir el pago de sus consumos de forma automatizada y facil.',
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
  }),
  Object.freeze({
    id: 'fintech',
    icon: <BsCurrencyBitcoin />,
    imageBig: './assets/industries/fintech/image.svg',
    imageShort: '',
    imageMobile: '',
    title: 'Fintech',
    subtitle: 'Para compañías de tecnología financiera',
    description:
      'Encontrarás una aplicación base, diseñada para gestionar los créditos y sus procesos relacionados, así como recibir el pago de transacciones de forma automatizada y ágil.',
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
  }),
  Object.freeze({
    id: 'realestate',
    icon: <BsBuildings />,
    imageBig: './assets/industries/realestate/image.svg',
    imageShort: '',
    imageMobile: '',
    title: 'Bienes y raíces',
    subtitle: 'Compra, venta y renta de inmuebles',
    description:
      'Encontrarás una aplicación base, diseñada para mostrar las propiedades, dar seguimiento a prospectos y visitas, así como recibir el pago de transacciones de forma automatizada y ágil.',
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
  }),
  Object.freeze({
    id: 'restaurant',
    icon: <PiHamburgerBold />,
    imageBig: '/assets/industries/restaurant/image.svg',
    imageShort: '',
    imageMobile: '',
    title: 'Restaurante',
    subtitle: 'Restaurante',
    description:
      'Encontraras una aplicación base, diseñada para gestionar los pedidos de tus clientes y recibir el pago de sus consumos de forma automatizada y facil.',
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
  }),
  Object.freeze({
    id: 'entertainment',
    imageBig: '/assets/industries/entertainment/image.svg',
    imageShort: '',
    imageMobile: '',
    icon: <FaGuitar />,
    title: 'Comunicación y Entretenimiento',
    subtitle: 'Comunicación y Entretenimiento',
    description:
      'Encontrarás una aplicación base, diseñada para gestionar la publicación y venta de tus productos y servicios, así como recibir el pago de transacciones de forma automatizada y ágil.',
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
  }),
  Object.freeze({
    id: 'hospitality',
    imageBig: '/assets/industries/hospitality/image.svg',
    imageShort: '',
    imageMobile: '',
    icon: <LiaHotelSolid />,
    title: 'Hoteleria',
    subtitle: 'Reservas de viajes y hospedaje',
    description:
      'Encontrarás una aplicación base, diseñada para mostrar tus hoteles y la disponibilidad de habitaciones para reservas, así como recibir el pago de transacciones de forma automatizada y ágil.',
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
  }),
  Object.freeze({
    id: 'healthcare',
    icon: <FaHandHoldingHeart />,
    imageBig: '/assets/industries/healthcare/image.svg',
    imageShort: '',
    imageMobile: '',
    title: 'Salud y cuidado',
    subtitle: 'Salud y cuidado',
    description:
      'Encontrarás una aplicación base, diseñada para gestionar tus ubicaciones y servicios médicos al paciente, así como recibir el pago de transacciones de forma automatizada y ágil.',
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
  }),
  Object.freeze({
    id: 'fintech_crowdfunding',
    imageBig: '/assets/industries/crowdfunding/image.svg',
    imageShort: '',
    imageMobile: '',
    icon: <BiNetworkChart/>,
    title: 'Fintech Crowdfunding',
    subtitle: 'Fintech Crowdfunding diseñada para gestionar tus productos.',
    description:
      'Encontrarás una aplicación base, diseñada para gestionar tus productos, proyectos y financiamientos, así como recibir el pago de transacciones de forma automatizada y ágil.',
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
  }),
];
