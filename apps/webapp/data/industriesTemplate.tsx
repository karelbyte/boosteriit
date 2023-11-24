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
    image: '/assets/templates/restaurant/image_web.svg',
    image_slide1: '/assets/templates/restaurant/rest1_web.svg',
    image_slide2: '/assets/templates/restaurant/rest2_web.svg',
    image_slide3: '/assets/templates/restaurant/rest3_web.svg',
    image_slide4: '/assets/templates/restaurant/rest4_web.svg',
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
    image: '/assets/templates/restaurant/image_desk.svg',
    image_slide1: '/assets/templates/restaurant/rest1_desk.svg',
    image_slide2: '/assets/templates/restaurant/rest2_desk.svg',
    image_slide3: '/assets/templates/restaurant/rest3_desk.svg',
    image_slide4: '/assets/templates/restaurant/rest4_desk.svg',
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
    image: '/assets/templates/restaurant/image_mob.svg',
    image_slide1: '/assets/templates/restaurant/rest1_mob.svg',
    image_slide2: '/assets/templates/restaurant/rest2_mob.svg',
    image_slide3: '/assets/templates/restaurant/rest3_mob.svg',
    image_slide4: '/assets/templates/restaurant/rest4_mob.svg',
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
    image: '/assets/template/trips/image_web.svg',
    image_slide1: '/assets/templates/trips/trip1_web.svg',
    image_slide2: '/assets/templates/trips/trip2_web.svg',
    image_slide3: '/assets/templates/trips/trip3_web.svg',
    image_slide4: '/assets/templates/trips/trip4_web.svg',
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
  {
    id: 'template_desk_trips',
    solution: 'desktop',
    industry: 'trips',
    icon:  <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/template/trips/image_desk.svg',
    image_slide1: '/assets/templates/trips/trip1_desk.svg',
    image_slide2: '/assets/templates/trips/trip2_desk.svg',
    image_slide3: '/assets/templates/trips/trip3_desk.svg',
    image_slide4: '/assets/templates/trips/trip4_desk.svg',
    features: [
      {
        id: 'template_desk_trips_social',
        title: 'Home público con promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desk_trips_catalogo',
        title: 'Registro de usuario con correo electrónico o redes sociales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desk_trips_system',
        title: 'Gestión de Hoteles',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desk_trips_table',
        title: 'Gestión de Vuelos',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_desk_trips_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desk_trips_menu',
        title: 'Carrito de compras',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_desk_trips_notification',
        title:
          'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desk_trips_payment',
        title: 'Geolocalización del lugar, hotel o producto',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_mobile_trips',
    solution: 'mobile',
    industry: 'trips',
    icon: <FaMobileAlt />,
    title: 'Aplicación Movil',
    short: 'App movil',
    days: 66,
    price: 487500,
    image: '/assets/template/trips/image_mob.svg',
    image_slide1: '/assets/templates/trips/trip1_mob.svg',
    image_slide2: '/assets/templates/trips/trip2_mob.svg',
    image_slide3: '/assets/templates/trips/trip3_mob.svg',
    image_slide4: '/assets/templates/trips/trip4_mob.svg',
    features: [
      {
        id: 'template_mob_trips_social',
        title: 'Home público con promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_mob_trips_catalogo',
        title: 'Registro de usuario con correo electrónico o redes sociales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_trips_system',
        title: 'Gestión de Hoteles',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_mob_trips_table',
        title: 'Gestión de Vuelos',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_mob_trips_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_trips_menu',
        title: 'Carrito de compras',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_mob_trips_notification',
        title:
          'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_trips_payment',
        title: 'Geolocalización del lugar, hotel o producto',
        days: 40,
        price: 45000,
      },
    ],
  },
]

const fintech: IIndustryTemplate[] = [
  {
    id: 'template_web_fintech',
    solution: 'web',
    industry: 'fintech',
    icon: <CiPlane />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/templates/fintech/image_web.svg',
    image_slide1: '/assets/templates/fintech/fintech1_web.svg',
    image_slide2: '/assets/templates/fintech/fintech2_web.svg',
    image_slide3: '/assets/templates/fintech/fintech3_web.svg',
    image_slide4: '/assets/templates/fintech/fintech4_web.svg',
    features: [
      {
        id: 'template_web_fintech_social',
        title: 'Home público con promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_fintech_catalogo',
        title: 'Registro de usuario con correo electrónico o redes sociales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_fintech_system',
        title: 'Gestión de Hoteles',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_fintech_table',
        title: 'Gestión de Vuelos',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_fintech_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_fintech_menu',
        title: 'Carrito de compras',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_fintech_notification',
        title:
          'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_fintech_payment',
        title: 'Geolocalización del lugar, hotel o producto',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_desk_fintech',
    solution: 'desktop',
    industry: 'fintech',
    icon:  <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/templates/fintech/image_desk.svg',
    image_slide1: '/assets/templates/fintech/fintech1_desk.svg',
    image_slide2: '/assets/templates/fintech/fintech2_desk.svg',
    image_slide3: '/assets/templates/fintech/fintech3_desk.svg',
    image_slide4: '/assets/templates/fintech/fintech4_desk.svg',
    features: [
      {
        id: 'template_desk_fintech_social',
        title: 'Home público con promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desk_fintech_catalogo',
        title: 'Registro de usuario con correo electrónico o redes sociales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desk_fintech_system',
        title: 'Gestión de Hoteles',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_table',
        title: 'Gestión de Vuelos',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_desk_fintech_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desk_fintech_menu',
        title: 'Carrito de compras',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_desk_fintech_notification',
        title:
          'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desk_fintech_payment',
        title: 'Geolocalización del lugar, hotel o producto',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_mobile_fintech',
    solution: 'mobile',
    industry: 'fintech',
    icon: <FaMobileAlt />,
    title: 'Aplicación Movil',
    short: 'App movil',
    days: 66,
    price: 487500,
    image: '/assets/templates/fintech/image_mob.svg',
    image_slide1: '/assets/templates/fintech/fintech1_mob.svg',
    image_slide2: '/assets/templates/fintech/fintech2_mob.svg',
    image_slide3: '/assets/templates/fintech/fintech3_mob.svg',
    image_slide4: '/assets/templates/fintech/fintech4_mob.svg',
    features: [
      {
        id: 'template_mob_fintech_social',
        title: 'Home público con promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_mob_fintech_catalogo',
        title: 'Registro de usuario con correo electrónico o redes sociales',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_fintech_system',
        title: 'Gestión de Hoteles',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_mob_fintech_table',
        title: 'Gestión de Vuelos',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_mob_fintech_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_fintech_menu',
        title: 'Carrito de compras',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_mob_fintech_notification',
        title:
          'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_fintech_payment',
        title: 'Geolocalización del lugar, hotel o producto',
        days: 40,
        price: 45000,
      },
    ],
  },
]
export const industriesTemplate: IIndustryTemplate[] = [...restaurant, ...trips, ...fintech];
