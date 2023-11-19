import React, { JSX } from 'react';
import { BiDesktop } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import { CiPlane } from "react-icons/ci";

export interface IFeature {
  id: string;
  title: string;
  days: number;
  price: number;
}
export interface IIndustryTemplate {
  id: string;
  solution: string;
  industry: string;
  icon: JSX.Element;
  image: string;
  image_slide1: string;
  image_slide2: string;
  image_slide3: string;
  image_slide4: string;
  title: string;
  short: string;
  days: number;
  price: number;
  features: IFeature[];
}

const restaurant: IIndustryTemplate[] = [
  {
    id: 'template_web_restaurant',
    solution: 'web',
    industry: 'restaurant',
    icon: <MdWeb />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/industries/restaurant/image.svg',
    image_slide1: '/assets/industries/restaurant/rest1.svg',
    image_slide2: '/assets/industries/restaurant/rest2.svg',
    image_slide3: '/assets/industries/restaurant/rest3.svg',
    image_slide4: '/assets/industries/restaurant/rest4.svg',
    features: [
      {
        id: 'template_web_restaurant_social',
        title: 'Inicio de sesión con google o redes sociales',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_restaurant_catalogo',
        title: 'Catalogo de Restaurantes o sucursales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_restaurant_system',
        title: 'Sistema de reserva en linea',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_restaurant_table',
        title: 'Gestión de pedidos por mesa ',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_restaurant_profile',
        title: 'Perfil de Usuario',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_restaurant_menu',
        title: 'Gestion de menus y precios',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_restaurant_notification',
        title:
          'Notificaciones de Pedidos, Nuevos productos en el menu, Cuentas pagadas',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_restaurant_payment',
        title: 'Sistemas de Pagos',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_restaurant_sales',
        title: 'Módulo de reportes de venta',
        days: 75,
        price: 40000,
      },
    ],
  },
  {
    id: 'template_desktop_restaurant',
    solution: 'desktop',
    industry: 'restaurant',
    icon: <BiDesktop />,
    days: 73,
    price: 559000,
    title: 'Aplicación de escritorio',
    short: 'App escritorio',
    image: '/assets/industries/restaurant/image.svg',
    image_slide1: '/assets/industries/restaurant/rest1.svg',
    image_slide2: '/assets/industries/restaurant/rest2.svg',
    image_slide3: '/assets/industries/restaurant/rest3.svg',
    image_slide4: '/assets/industries/restaurant/rest4.svg',
    features: [
      {
        id: 'template_desktop_restaurant_social',
        title: 'Inicio de sesión con google o redes sociales',
        days: 40,
        price: 25000,
      },
      {
        id: 'template_desktop_restaurant_catalogo',
        title: 'Catalogo de Restaurantes o sucursales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desktop_restaurant_system',
        title: 'Sistema de reserva en linea',
        days: 80,
        price: 65000,
      },
      {
        id: 'template_desktop_restaurant_table',
        title: 'Gestión de pedidos por mesa ',
        days: 120,
        price: 60000,
      },
      {
        id: 'template_desktop_restaurant_profile',
        title: 'Perfil de Usuario',
        days: 40,
        price: 35000,
      },
      {
        id: 'template_desktop_restaurant_menu',
        title: 'Gestion de menus y precios',
        days: 60,
        price: 70000,
      },
      {
        id: 'template_desktop_restaurant_notification',
        title:
          'Notificaciones de Pedidos, Nuevos productos en el menu, Cuentas pagadas',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desktop_restaurant_payment',
        title: 'Sistemas de Pagos',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desktop_restaurant_sales',
        title: 'Módulo de reportes de venta',
        days: 75,
        price: 40000,
      },
    ],
  },
  {
    id: 'template_mobile_restaurant',
    industry: 'restaurant',
    solution: 'mobile',
    icon: <FaMobileAlt />,
    title: 'Aplicación Móvil',
    short: 'App movil',
    days: 50,
    price: 466200,
    image: '/assets/industries/restaurant/image.svg',
    image_slide1: '/assets/industries/restaurant/rest1.svg',
    image_slide2: '/assets/industries/restaurant/rest2.svg',
    image_slide3: '/assets/industries/restaurant/rest3.svg',
    image_slide4: '/assets/industries/restaurant/rest4.svg',
    features: [
      {
        id: 'template_mobile_restaurant_social',
        title: 'Inicio de sesión con google o redes sociales',
        days: 24,
        price: 25000,
      },
      {
        id: 'template_mobile_restaurant_catalogo',
        title: 'Catalogo de Restaurantes o sucursales',
        days: 48,
        price: 35000,
      },
      {
        id: 'template_mobile_restaurant_system',
        title: 'Sistema de reserva en linea',
        days: 60,
        price: 45000,
      },
      {
        id: 'template_mobile_restaurant_table',
        title: 'Gestión de pedidos por mesa ',
        days: 80,
        price: 40000,
      },
      {
        id: 'template_mobile_restaurant_profile',
        title: 'Perfil de Usuario',
        days: 24,
        price: 30000,
      },
      {
        id: 'template_mobile_restaurant_menu',
        title: 'Gestion de menus y precios',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mobile_restaurant_notification',
        title:
          'Notificaciones de Pedidos, Nuevos productos en el menu, Cuentas pagadas',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mobile_restaurant_payment',
        title: 'Sistemas de Pagos',
        days: 32,
        price: 38000,
      },
      {
        id: 'template_mobile_restaurant_sales',
        title: 'Módulo de reportes de venta',
        days: 55,
        price: 40000,
      },
    ],
  },
];

const trips: IIndustryTemplate[] = [
  {
    id: 'template_web_trips',
    solution: 'web',
    industry: 'trips',
    icon: <CiPlane />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/industries/trips/image.svg',
    image_slide1: '/assets/industries/trips/trip1.svg',
    image_slide2: '/assets/industries/trips/trip2.svg',
    image_slide3: '/assets/industries/trips/trip3.svg',
    image_slide4: '/assets/industries/trips/trip4.svg',
    features: [
      {
        id: 'template_web_trips_social',
        title: 'Home público con promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_trips_catalogo',
        title: 'Registro de usuario con correo electrónico o redes sociales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_trips_system',
        title: 'Gestión de Hoteles',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_trips_table',
        title: 'Gestión de Vuelos',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_trips_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_trips_menu',
        title: 'Carrito de compras',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_trips_notification',
        title:
          'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_trips_payment',
        title: 'Geolocalización del lugar, hotel o producto',
        days: 40,
        price: 45000,
      },
    ],
  },
]
export const industriesTemplate: IIndustryTemplate[] = [...restaurant, ...trips];
