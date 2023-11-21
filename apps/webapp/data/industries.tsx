import React, { JSX } from 'react';
import { CiPlane } from 'react-icons/ci';
import { BsBuildings, BsCurrencyBitcoin } from 'react-icons/bs';
import { PiHamburgerBold } from 'react-icons/pi';
import { LiaHotelSolid } from 'react-icons/lia';
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
  subtitle: string;
  description: string;
  available: IAvailable[];
}
export const industries: readonly IIndustry[] = [
  Object.freeze({
    id: 'trips',
    icon: <CiPlane />,
    image: '',
    title: 'Viajes',
    subtitle: 'Reservas de viajes y hospedaje',
    description:
      'Encontrarás una aplicación base, diseñada para gestionar los viajes de tus clientes y recibir el pago de tus productos y servicios de forma automatizada y ágil.',
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
    image: '',
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
    image: '',
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
    image: '/assets/industries/restaurant/rest1.svg',
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
    id: 'healthcare',
    icon: <FaHandHoldingHeart />,
    image: '',
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
    id: 'entertainment',
    image: '',
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
    image: '',
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
];
