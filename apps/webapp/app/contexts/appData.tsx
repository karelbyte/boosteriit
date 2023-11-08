import React, { JSX } from 'react';
import { FaGuitar, FaHandHoldingHeart, FaMobileAlt } from 'react-icons/fa';
import { BiDesktop } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';
import { CiPlane } from 'react-icons/ci';
import { BsBuildings, BsCurrencyBitcoin } from 'react-icons/bs';
import { PiHamburgerBold } from 'react-icons/pi';
import {LiaHotelSolid} from 'react-icons/lia'

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
  subtitle: string,
  description: string;
  available: IAvailable[];
}
const industries: IIndustry[] = [
  {
    id: 'trips',
    icon: <CiPlane />,
    image: '',
    title: 'Viajes',
    subtitle: 'Reservas de viajes y hospedaje',
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
    icon: <BsCurrencyBitcoin />,
    image: '',
    title: 'Fintech',
    subtitle: 'Para compañías de tecnología financiera',
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
    id: 'realestate',
    icon: <BsBuildings />,
    image: '',
    title: 'Bienes y raíces',
    subtitle: 'Compra, venta y renta de inmuebles',
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
    id: 'Restaurant',
    icon: <PiHamburgerBold />,
    image: '',
    title: 'Restaurante',
    subtitle: 'Restaurante',
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
    id: 'healthcare',
    icon: <FaHandHoldingHeart />,
    image: '',
    title: 'Salud y cuidado',
    subtitle: 'Salud y cuidado',
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
    id: 'Entertainment',
    image: '',
    icon: <FaGuitar />,
    title: 'Entretenimiento',
    subtitle: 'Entretenimiento',
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
    id: 'hospitality',
    image: '',
    icon: <LiaHotelSolid />,
    title: 'Hoteleria',
    subtitle: 'Reservas de viajes y hospedaje',
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
  image: string;
  title: string;
  subtitle: string;
  description: string,
  price: number,
  timeStr: string,
  days: number
}
const modules: IModule[] = [
  {
    id: 'login_social_networks',
    image: '',
    title: 'Inicio de sesión, con app de google y redes sociales',
    subtitle: 'Con app de google y redes sociales',
    description: 'El módulo permite al usuario ingresar a una plataforma mediante su usuario o correo y una contraseña, o bien accediendo a través de su cuenta de google o redes sociales: facebook. Incluye el flujo de recuperación de contraseña',
    price: 20000,
    timeStr: 'Lista en: 12 días',
    days: 12,
  },
  {
    id: 'payment_management',
    image: '',
    title: 'Gestión de pagos',
    subtitle: 'Gestión de pagos',
    description: 'Gestión de pagos',
    price: 40000,
    timeStr: 'Lista en: 12 días',
    days: 12
  },
  {
    id: 'notifications',
    image: '',
    title: 'Notificaciones',
    subtitle: 'Notificaciones',
    description: 'Notificaciones',
    price: 15000,
    timeStr: 'Lista en: 8 días',
    days: 8
  },
  {
    id: 'customer_profile',
    image: '',
    title: 'Perfil de cliente',
    subtitle: 'Perfil de cliente',
    description: '',
    price: 28000,
    timeStr: 'Lista en: 15 días',
    days: 15
  },
  {
    id: 'geo',
    image: '',
    title: 'Geolocalización',
    subtitle: 'Geolocalización',
    description: 'Geolocalización',
    price: 50000,
    timeStr: 'Lista en: 20 días',
    days: 20
  },
  {
    id: 'checkin_checkout',
    image: '',
    title: 'Sistema Check In & Check Out',
    subtitle: 'Sistema Check In & Check Out',
    description: 'Sistema Check In & Check Out',
    price: 23000,
    timeStr: 'Lista en: 10 días',
    days: 10
  },
  {
    id: 'shopping_cart',
    image: '',
    title: 'Carrito de compra',
    subtitle: 'Carrito de compra',
    description: 'Carrito de compra',
    price: 28000,
    timeStr: 'Lista en: 10 días',
    days: 10
  },
  {
    id: 'online_reservation_system',
    image: '',
    title: 'Sistema de reservas en línea',
    subtitle: 'Sistema de reservas en línea',
    description: 'Sistema de reservas en línea',
    price: 30000,
    timeStr: 'Lista en: 20 días',
    days: 20
  },
  {
    id: 'menu_price_management',
    image: '',
    title: 'Gestión de menús y precios',
    subtitle: 'Gestión de menús y precios',
    description: 'Gestión de menús y precios',
    price: 23000,
    timeStr: 'Lista en: 10 días',
    days: 10
  },
  {
    id: 'inventory_supplier_control',
    image: '',
    title: 'Control de inventario y proveedores',
    subtitle: 'Control de inventario y proveedores',
    description: 'Control de inventario y proveedores',
    price: 18000,
    timeStr: 'Lista en: 15 días',
    days: 15
  },
  {
    id: 'help_module',
    image: '',
    title: 'Módulo de ayuda',
    subtitle: 'Módulo de ayuda',
    description: 'Módulo de ayuda',
    price: 30000,
    timeStr: 'Lista en: 10 días',
    days: 10
  },
  {
    id: 'home_delivery_system',
    image: '',
    title: 'Sistema de entrega a domicilio',
    subtitle: 'Sistema de entrega a domicilio',
    description: 'Sistema de entrega a domicilio',
    price: 35,
    timeStr: 'Lista en: 20 días',
    days: 20
  },
];

export { solutions, industries, modules };
