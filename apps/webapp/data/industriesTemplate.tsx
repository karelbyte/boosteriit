import React, { JSX } from 'react';
import { BiDesktop } from 'react-icons/bi';
import { MdWeb } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import { CiPlane } from 'react-icons/ci';

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

// esta full, con funcionalidad y extras
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

// faltan tiempo y costo, en los extras faltan tiempo y costo
const trips: IIndustryTemplate[] = [
  {
    id: 'template_web_trips',
    solution: 'web',
    industry: 'trips',
    icon: <MdWeb />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/templates/trips/image_web.svg',
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
        title: 'Notificaciones',
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
    icon: <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/templates/trips/image_desk.svg',
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
        title: 'Notificaciones',
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
    image: '/assets/templates/trips/image_mob.svg',
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
        title: 'Notificaciones',
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
];

// faltan tiempo y costo, en los extras faltan tiempo y costo
const realestate: IIndustryTemplate[] = [
  {
    id: 'template_web_realestate',
    solution: 'web',
    industry: 'realestate',
    icon: <MdWeb />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/templates/realestate/image_web.svg',
    image_slide1: '/assets/templates/realestate/realestate1_web.svg',
    image_slide2: '/assets/templates/realestate/realestate2_web.svg',
    image_slide3: '/assets/templates/realestate/realestate3_web.svg',
    image_slide4: '/assets/templates/realestate/realestate4_web.svg',
    features: [
      {
        id: 'template_web_realestate_realstate_user',
        title: 'Módulo de Administración de Usuario Inmobiliario',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_realestate_owner_user',
        title: 'Módulo de Administración y Validación de Usuario Propietario',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_realestate_tenant_user ',
        title: 'Módulo de Administración de Usuario Arrendatario',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_realestate_general_sales_closures',
        title:
          'Sistema de seguimiento de transacciones y cierres de ventas en general',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_realestate_rent',
        title: 'Sistema de pagos y apartados para renta',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_realestate_agend',
        title: 'Sistema de Agenda de visitas',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_realestate_properties',
        title: 'Módulo de gestión de Propiedades',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_realestate_crm_prospect',
        title: 'CRM - Seguimiento de Prospectos',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_realestate_crm_visit',
        title: 'CRM - Gestión de Asignación de Visitas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_realestate_notifications',
        title: 'Notificaciones',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_realestate_geo_properties',
        title: 'Geolocalización: Mapa de ubicación de propiedades',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_desk_realestate',
    solution: 'desktop',
    industry: 'realestate',
    icon: <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/templates/realestate/image_desk.svg',
    image_slide1: '/assets/templates/realestate/realestate1_desk.svg',
    image_slide2: '/assets/templates/realestate/realestate2_desk.svg',
    image_slide3: '/assets/templates/realestate/realestate3_desk.svg',
    image_slide4: '/assets/templates/realestate/realestate4_desk.svg',
    features: [
      {
        id: 'template_desktop_realestate_realstate_user',
        title: 'Módulo de Administración de Usuario Inmobiliario',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desktop_realestate_owner_user',
        title: 'Módulo de Administración y Validación de Usuario Propietario',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desktop_realestate_tenant_user ',
        title: 'Módulo de Administración de Usuario Arrendatario',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desktop_realestate_general_sales_closures',
        title:
          'Sistema de seguimiento de transacciones y cierres de ventas en general',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_desktop_realestate_rent',
        title: 'Sistema de pagos y apartados para renta',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desktop_realestate_agend',
        title: 'Sistema de Agenda de visitas',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_desktop_realestate_properties',
        title: 'Módulo de gestión de Propiedades',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desktop_realestate_crm_prospect',
        title: 'CRM - Seguimiento de Prospectos',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desktop_realestate_crm_visit',
        title: 'CRM - Gestión de Asignación de Visitas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desktop_realestate_notifications',
        title: 'Notificaciones',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desktop_realestate_geo_properties',
        title: 'Geolocalización: Mapa de ubicación de propiedades',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_mobile_realestate',
    solution: 'mobile',
    industry: 'realestate',
    icon: <FaMobileAlt />,
    title: 'Aplicación Movil',
    short: 'App movil',
    days: 66,
    price: 487500,
    image: '/assets/templates/realestate/image_mob.svg',
    image_slide1: '/assets/templates/realestate/realestate1_mob.svg',
    image_slide2: '/assets/templates/realestate/realestate2_mob.svg',
    image_slide3: '/assets/templates/realestate/realestate3_mob.svg',
    image_slide4: '/assets/templates/realestate/realestate4_mob.svg',
    features: [
      {
        id: 'template_mob_realestate_general_sales_closures',
        title:
          'Sistema de seguimiento de transacciones y cierres de ventas en general',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_mob_realestate_rent',
        title: 'Sistema de pagos y apartados para renta',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_realestate_agend',
        title: 'Sistema de Agenda de visitas',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_mob_realestate_properties',
        title: 'Módulo de gestión de Propiedades',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_realestate_crm_prospect',
        title: 'CRM - Seguimiento de Prospectos',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_realestate_crm_visit',
        title: 'CRM - Gestión de Asignación de Visitas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_realestate_notifications',
        title: 'Notificaciones',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_realestate_geo_properties',
        title: 'Geolocalización: Mapa de ubicación de propiedades',
        days: 40,
        price: 45000,
      },
    ],
  },
];

// faltan tiempo y costo, en los extras faltan tiempo y costo
const hospitality: IIndustryTemplate[] = [
  {
    id: 'template_web_hospitality',
    solution: 'web',
    industry: 'hospitality',
    icon: <MdWeb />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/templates/hospitality/image_web.svg',
    image_slide1: '/assets/templates/hospitality/hospitality1_web.svg',
    image_slide2: '/assets/templates/hospitality/hospitality2_web.svg',
    image_slide3: '/assets/templates/hospitality/hospitality3_web.svg',
    image_slide4: '/assets/templates/hospitality/hospitality4_web.svg',
    features: [
      {
        id: 'template_web_hospitality_promotions',
        title: 'Pagina inicial con Promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_hospitality_catalogo',
        title: 'Catálogo de Hoteles y Habitaciones',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_hospitality_system',
        title: 'Sistema de reservas y administración de habitaciones',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_hospitality_checkIn',
        title: 'Sistema CheckIn & CheckOut',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_hospitality_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_hospitality_cart_pay',
        title: 'Sistema de Pagos',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_hospitality_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_hospitality_user_admin',
        title: 'Sistema de Administración de Usuarios',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_hospitality_admin_info',
        title: 'Sistema de análisis y generación de informes',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_hospitality_geo_hotels',
        title: 'Geolocalización de Hoteles',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_desk_hospitality',
    solution: 'desktop',
    industry: 'hospitality',
    icon: <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/templates/hospitality/image_desk.svg',
    image_slide1: '/assets/templates/hospitality/hospitality1_desk.svg',
    image_slide2: '/assets/templates/hospitality/hospitality2_desk.svg',
    image_slide3: '/assets/templates/hospitality/hospitality3_desk.svg',
    image_slide4: '/assets/templates/hospitality/hospitality4_desk.svg',
    features: [
      {
        id: 'template_desk_hospitality_promotions',
        title: 'Pagina inicial con Promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desk_hospitality_catalogo',
        title: 'Catálogo de Hoteles y Habitaciones',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desk_hospitality_system',
        title: 'Sistema de reservas y administración de habitaciones',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desk_hospitality_checkIn',
        title: 'Sistema CheckIn & CheckOut',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_desk_hospitality_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desk_hospitality_cart_pay',
        title: 'Sistema de Pagos',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_desk_hospitality_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desk_hospitality_user_admin',
        title: 'Sistema de Administración de Usuarios',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desk_hospitality_admin_info',
        title: 'Sistema de análisis y generación de informes',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desk_hospitality_geo_hotels',
        title: 'Geolocalización de Hoteles',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_mobile_hospitality',
    solution: 'mobile',
    industry: 'hospitality',
    icon: <FaMobileAlt />,
    title: 'Aplicación Movil',
    short: 'App movil',
    days: 66,
    price: 487500,
    image: '/assets/templates/hospitality/image_mob.svg',
    image_slide1: '/assets/templates/hospitality/hospitality1_mob.svg',
    image_slide2: '/assets/templates/hospitality/hospitality2_mob.svg',
    image_slide3: '/assets/templates/hospitality/hospitality3_mob.svg',
    image_slide4: '/assets/templates/hospitality/hospitality4_mob.svg',
    features: [
      {
        id: 'template_mob_hospitality_promotions',
        title: 'Pagina inicial con Promociones',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_mob_hospitality_catalogo',
        title: 'Catálogo de Hoteles y Habitaciones',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_hospitality_system',
        title: 'Sistema de reservas y administración de habitaciones',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_mob_hospitality_checkIn',
        title: 'Sistema CheckIn & CheckOut',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_mob_hospitality_profile',
        title: 'Gestión de Paquetes Turísticos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_hospitality_cart_pay',
        title: 'Sistema de Pagos',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_mob_hospitality_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_hospitality_geo_hotels',
        title: 'Geolocalización de Hoteles',
        days: 40,
        price: 45000,
      },
    ],
  },
];

// faltan tiempo y costo, en los extras faltan tiempo y costo
const healthcare: IIndustryTemplate[] = [
  {
    id: 'template_web_healthcare',
    solution: 'web',
    industry: 'healthcare',
    icon: <MdWeb />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/templates/healthcare/image_web.svg',
    image_slide1: '/assets/templates/healthcare/healthcare1_web.svg',
    image_slide2: '/assets/templates/healthcare/healthcare2_web.svg',
    image_slide3: '/assets/templates/healthcare/healthcare3_web.svg',
    image_slide4: '/assets/templates/healthcare/healthcare4_web.svg',
    features: [
      {
        id: 'template_web_healthcare_doctors_services',
        title: 'Catálogo de Hospitales, Doctores y Servicios',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_healthcare_agent',
        title: 'Sistema de Agenda de Citas',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_healthcare_pay',
        title: 'Sistema de Pagos',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_healthcare_patient_reminders',
        title:
          'Solución de seguimiento de la salud del paciente y recordatorios',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_healthcare_documentation',
        title: 'Sistema de Carga y Descarga de Documentación',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_healthcare_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_healthcare_file_medical',
        title: 'Módulo de gestión de historias clínicas y expedientes médicos',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_healthcare_profile_medical',
        title: 'Sistema de perfil de paciente',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_desk_healthcare',
    solution: 'desktop',
    industry: 'healthcare',
    icon: <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/templates/healthcare/image_desk.svg',
    image_slide1: '/assets/templates/healthcare/healthcare1_desk.svg',
    image_slide2: '/assets/templates/healthcare/healthcare2_desk.svg',
    image_slide3: '/assets/templates/healthcare/healthcare3_desk.svg',
    image_slide4: '/assets/templates/healthcare/healthcare4_desk.svg',
    features: [
      {
        id: 'template_desktop_healthcare_doctors_services',
        title: 'Catálogo de Hospitales, Doctores y Servicios',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desktop_healthcare_agent',
        title: 'Sistema de Agenda de Citas',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desktop_healthcare_pay',
        title: 'Sistema de Pagos',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desktop_healthcare_patient_reminders',
        title:
          'Solución de seguimiento de la salud del paciente y recordatorios',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desktop_healthcare_documentation',
        title: 'Sistema de Carga y Descarga de Documentación',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desktop_healthcare_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desktop_healthcare_file_medical',
        title: 'Módulo de gestión de historias clínicas y expedientes médicos',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desktop_healthcare_profile_medical',
        title: 'Sistema de perfil de paciente',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_mobile_healthcare',
    solution: 'mobile',
    industry: 'healthcare',
    icon: <FaMobileAlt />,
    title: 'Aplicación Movil',
    short: 'App movil',
    days: 66,
    price: 487500,
    image: '/assets/templates/healthcare/image_mob.svg',
    image_slide1: '/assets/templates/healthcare/healthcare1_mob.svg',
    image_slide2: '/assets/templates/healthcare/healthcare2_mob.svg',
    image_slide3: '/assets/templates/healthcare/healthcare3_mob.svg',
    image_slide4: '/assets/templates/healthcare/healthcare4_mob.svg',
    features: [
      {
        id: 'template_mob_healthcare_doctors_services',
        title: 'Catálogo de Hospitales, Doctores y Servicios',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_mob_healthcare_agent',
        title: 'Sistema de Agenda de Citas',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_healthcare_pay',
        title: 'Sistema de Pagos',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_mob_healthcare_patient_reminders',
        title:
          'Solución de seguimiento de la salud del paciente y recordatorios',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_healthcare_documentation',
        title: 'Sistema de Carga y Descarga de Documentación',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_healthcare_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_healthcare_profile_medical',
        title: 'Sistema de perfil de paciente',
        days: 40,
        price: 45000,
      },
    ],
  },
];

// faltan tiempo y costo, en los extras faltan tiempo y costo
const entertainment: IIndustryTemplate[] = [
  {
    id: 'template_web_entertainment',
    solution: 'web',
    industry: 'entertainment',
    icon: <MdWeb />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/templates/entertainment/image_web.svg',
    image_slide1: '/assets/templates/entertainment/entertainment1_web.svg',
    image_slide2: '/assets/templates/entertainment/entertainment2_web.svg',
    image_slide3: '/assets/templates/entertainment/entertainment3_web.svg',
    image_slide4: '/assets/templates/entertainment/entertainment4_web.svg',
    features: [
      {
        id: 'template_web_entertainment_services',
        title: 'E-Commerce para productos y servicios',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_entertainment_media',
        title: 'SIstema de gestión de contenidos y publicaciones multimedia',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_entertainment_pay',
        title: 'Sistema de pagos',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_entertainment_documents',
        title: 'Sistema de Carga y Descarga de Documentación',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_entertainment_notifications',
        title: 'Notificaciones',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_entertainment_view',
        title: 'Visor de videos',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_entertainment_live_broadcast',
        title: 'Herramienta de programación y transmisión en vivo',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_entertainment_subscriptions',
        title: 'Plataforma de gestión de suscripciones y membresías',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_entertainment_producers',
        title: 'Panel de control para creadores de contenido y productores',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_desk_entertainment',
    solution: 'desktop',
    industry: 'entertainment',
    icon: <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/templates/entertainment/image_desk.svg',
    image_slide1: '/assets/templates/entertainment/entertainment1_desk.svg',
    image_slide2: '/assets/templates/entertainment/entertainment2_desk.svg',
    image_slide3: '/assets/templates/entertainment/entertainment3_desk.svg',
    image_slide4: '/assets/templates/entertainment/entertainment4_desk.svg',
    features: [
      {
        id: 'template_desktop_entertainment_services',
        title: 'E-Commerce para productos y servicios',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desktop_entertainment_media',
        title: 'SIstema de gestión de contenidos y publicaciones multimedia',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desktop_entertainment_pay',
        title: 'Sistema de pagos',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desktop_entertainment_documents',
        title: 'Sistema de Carga y Descarga de Documentación',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_desktop_entertainment_notifications',
        title: 'Notificaciones',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desktop_entertainment_view',
        title: 'Visor de videos',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_desktop_entertainment_live_broadcast',
        title: 'Herramienta de programación y transmisión en vivo',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desktop_entertainment_subscriptions',
        title: 'Plataforma de gestión de suscripciones y membresías',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desktop_entertainment_producers',
        title: 'Panel de control para creadores de contenido y productores',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_mobile_entertainment',
    solution: 'mobile',
    industry: 'entertainment',
    icon: <FaMobileAlt />,
    title: 'Aplicación Movil',
    short: 'App movil',
    days: 66,
    price: 487500,
    image: '/assets/templates/entertainment/image_mob.svg',
    image_slide1: '/assets/templates/entertainment/entertainment1_mob.svg',
    image_slide2: '/assets/templates/entertainment/entertainment2_mob.svg',
    image_slide3: '/assets/templates/entertainment/entertainment3_mob.svg',
    image_slide4: '/assets/templates/entertainment/entertainment4_mob.svg',
    features: [
      {
        id: 'template_mob_entertainment_services',
        title: 'E-Commerce para productos y servicios',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_mob_entertainment_media',
        title: 'SIstema de gestión de contenidos y publicaciones multimedia',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_entertainment_pay',
        title: 'Sistema de pagos',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_mob_entertainment_documents',
        title: 'Sistema de Carga y Descarga de Documentación',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_mob_entertainment_notifications',
        title: 'Notificaciones',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_entertainment_view',
        title: 'Visor de videos',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_mob_entertainment_live_broadcast',
        title: 'Herramienta de programación y transmisión en vivo',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_entertainment_subscriptions',
        title: 'Plataforma de gestión de suscripciones y membresías',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_entertainment_producers',
        title: 'Panel de control para creadores de contenido y productores',
        days: 40,
        price: 45000,
      },
    ],
  },
];

// faltan tiempo y costo, en los extras faltan tiempo y costo
const fintech: IIndustryTemplate[] = [
  {
    id: 'template_web_fintech',
    solution: 'web',
    industry: 'fintech',
    icon: <MdWeb />,
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
        id: 'template_web_fintech_revenues',
        title: 'Administración de Ingresos y Egresos',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_fintech_credits',
        title: 'Sistema de gestión de créditos',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_fintech_credits_information',
        title:
          'Sistema para solicitud de crédito: Requisitos, documentación e información',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_fintech_file_client',
        title: 'Expediente de Cliente',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_fintech_account',
        title: 'Estado de cuenta',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_fintech_pay_flow',
        title: 'Tabla de amortización (Flujo de Pagos)',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_fintech_support',
        title: 'Plataforma de atención al cliente y soporte técnico',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_fintech_debt_recovery',
        title: 'Herramienta de gestión de cobros y recuperación de deudas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_fintech_system_pay',
        title: 'Sistemas de Pago',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_fintech_capital_liquidation',
        title:
          'Sistema de Cálculo financiero para abonos a capital y liquidación',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_fintech_status_formalities',
        title: 'Estatus de trámites',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_fintech_credits_made',
        title: 'Estatus de créditos efectuados',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_desk_fintech',
    solution: 'desktop',
    industry: 'fintech',
    icon: <BiDesktop />,
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
        id: 'template_desk_fintech_revenues',
        title: 'Administración de Ingresos y Egresos',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desk_fintech_credits',
        title: 'Sistema de gestión de créditos',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desk_fintech_credits_information',
        title:
          'Sistema para solicitud de crédito: Requisitos, documentación e información',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_file_client',
        title: 'Expediente de Cliente',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_desk_fintech_account',
        title: 'Estado de cuenta',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desk_fintech_pay_flow',
        title: 'Tabla de amortización (Flujo de Pagos)',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_desk_fintech_support',
        title: 'Plataforma de atención al cliente y soporte técnico',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desk_fintech_debt_recovery',
        title: 'Herramienta de gestión de cobros y recuperación de deudas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_system_pay',
        title: 'Sistemas de Pago',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_capital_liquidation',
        title:
          'Sistema de Cálculo financiero para abonos a capital y liquidación',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_status_formalities',
        title: 'Estatus de trámites',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_credits_made',
        title: 'Estatus de créditos efectuados',
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
        id: 'template_mob_fintech_revenues',
        title: 'Administración de Ingresos y Egresos',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_mob_fintech_credits',
        title: 'Sistema de gestión de créditos',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_fintech_credits_information',
        title:
          'Sistema para solicitud de crédito: Requisitos, documentación e información',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_mob_fintech_file_client',
        title: 'Expediente de Cliente',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_mob_fintech_account',
        title: 'Estado de cuenta',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_fintech_pay_flow',
        title: 'Tabla de amortización (Flujo de Pagos)',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_mob_fintech_support',
        title: 'Plataforma de atención al cliente y soporte técnico',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_fintech_debt_recovery',
        title: 'Herramienta de gestión de cobros y recuperación de deudas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_fintech_system_pay',
        title: 'Sistemas de Pago',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_fintech_capital_liquidation',
        title:
          'Sistema de Cálculo financiero para abonos a capital y liquidación',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_fintech_status_formalities',
        title: 'Estatus de trámites',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_mob_fintech_credits_made',
        title: 'Estatus de créditos efectuados',
        days: 40,
        price: 45000,
      },
    ],
  },
];

const fintech_crowdfunding: IIndustryTemplate[] = [
  {
    id: 'template_web_fintech_crowdfunding',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    icon: <MdWeb />,
    title: 'Aplicación web',
    short: 'App web',
    days: 66,
    price: 487500,
    image: '/assets/templates/fintech_crowdfunding/image_web.svg',
    image_slide1:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding1_web.svg',
    image_slide2:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding2_web.svg',
    image_slide3:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding3_web.svg',
    image_slide4:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding4_web.svg',
    features: [
      {
        id: 'template_web_fintech_crowdfunding_products',
        title: 'Gestión de Catálogo de productos',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_web_fintech_crowdfunding_document',
        title: 'Sistema de Subida de Requisitos: Documentación e información',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_web_fintech_crowdfunding_project',
        title: 'Estatus de proyectos autorizados',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_web_fintech_crowdfunding_wallet',
        title: 'Wallet',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_web_fintech_crowdfunding_pay',
        title: 'Pasarela de Pagos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_web_fintech_crowdfunding_account',
        title: 'Módulo de gestión de cuentas bancarias',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_web_fintech_crowdfunding_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_web_fintech_crowdfunding_investment',
        title: 'Estatus de inversiones realizadas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_fintech_crowdfunding_risk',
        title: 'Sistema de análisis de riesgo',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_web_fintech_crowdfunding_financial',
        title:
          'Sistema de análisis de datos y generación de informes financieros',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_desk_fintech_crowdfunding',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    icon: <BiDesktop />,
    title: 'Aplicación Escritorio',
    short: 'App escritorio',
    days: 66,
    price: 487500,
    image: '/assets/templates/fintech_crowdfunding/image_desk.svg',
    image_slide1:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding1_desk.svg',
    image_slide2:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding2_desk.svg',
    image_slide3:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding3_desk.svg',
    image_slide4:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding4_desk.svg',
    features: [
      {
        id: 'template_desk_fintech_crowdfunding_products',
        title: 'Gestión de Catálogo de productos',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_document',
        title: 'Sistema de Subida de Requisitos: Documentación e información',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_project',
        title: 'Estatus de proyectos autorizados',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_wallet',
        title: 'Wallet',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_desk_fintech_crowdfunding_pay',
        title: 'Pasarela de Pagos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_account',
        title: 'Módulo de gestión de cuentas bancarias',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_investment',
        title: 'Estatus de inversiones realizadas',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_risk',
        title: 'Sistema de análisis de riesgo',
        days: 40,
        price: 45000,
      },
      {
        id: 'template_desk_fintech_crowdfunding_financial',
        title:
          'Sistema de análisis de datos y generación de informes financieros',
        days: 40,
        price: 45000,
      },
    ],
  },
  {
    id: 'template_mobile_fintech_crowdfunding',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    icon: <FaMobileAlt />,
    title: 'Aplicación Movil',
    short: 'App movil',
    days: 66,
    price: 487500,
    image: '/assets/templates/fintech_crowdfunding/image_mob.svg',
    image_slide1:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding1_mob.svg',
    image_slide2:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding2_mob.svg',
    image_slide3:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding3_mob.svg',
    image_slide4:
      '/assets/templates/fintech_crowdfunding/fintech_crowdfunding4_mob.svg',
    features: [
      {
        id: 'template_mob_fintech_crowdfunding_products',
        title: 'Gestión de Catálogo de productos',
        days: 30,
        price: 25000,
      },
      {
        id: 'template_mob_fintech_crowdfunding_document',
        title: 'Sistema de Subida de Requisitos: Documentación e información',
        days: 80,
        price: 50000,
      },
      {
        id: 'template_mob_fintech_crowdfunding_project',
        title: 'Estatus de proyectos autorizados',
        days: 80,
        price: 45000,
      },
      {
        id: 'template_mob_fintech_crowdfunding_wallet',
        title: 'Wallet',
        days: 80,
        price: 50000,
      },

      {
        id: 'template_mob_fintech_crowdfunding_pay',
        title: 'Pasarela de Pagos',
        days: 40,
        price: 30000,
      },
      {
        id: 'template_mob_fintech_crowdfunding_account',
        title: 'Módulo de gestión de cuentas bancarias',
        days: 60,
        price: 50000,
      },
      {
        id: 'template_mob_fintech_crowdfunding_notification',
        title: 'Notificaciones',
        days: 40,
        price: 40000,
      },
      {
        id: 'template_mob_fintech_crowdfunding_investment',
        title: 'Estatus de inversiones realizadas',
        days: 40,
        price: 45000,
      },
    ],
  },
];
export const industriesTemplate: IIndustryTemplate[] = [
  ...restaurant,
  ...trips,
  ...fintech,
  ...realestate,
  ...hospitality,
  ...healthcare,
  ...entertainment,
  ...fintech_crowdfunding,
];
