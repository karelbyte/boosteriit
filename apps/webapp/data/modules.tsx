import React, { JSX } from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { ISolution } from "./solutions";
export interface ISolutionAvailable {
  id: string;
  icon: JSX.Element;
  title: string;
}
export interface IModule {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  timeStr: string;
  days: number;
  solutions: ISolution[];
  sections: string[];
  industries: string[]
}
export const modules: IModule[] = [
  {
    id: 'login_social_networks',
    image: '',
    title: 'Registro/Inicio de sesión con correo, google o redes sociales',
    subtitle: 'Inicio de sesión.',
    description:
      'Habilita el acceso a tu plataforma con alguna de las cuentas más populares en Internet',
    price: 20000,
    timeStr: 'Lista en: 12 días',
    days: 12,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['users'],
    industries: ['Restaurantero', 'Viajes Turísticos']
  },
  {
    id: 'restaurant_catalog',
    image: '',
    title: 'Catalogo de Restaurantes o sucursales',
    subtitle: 'Gestiona los establecimientos que tus clientes podrán elegir',
    description: 'Gestión de pagos',
    price: 40000,
    timeStr: 'Lista en: 12 días',
    days: 12,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['catalogs'],
    industries: ['Restaurantero']
  },
  {
    id: 'online_reservation_system',
    image: '',
    title: 'Sistema de reserva en linea',
    subtitle: 'Reserva en linea',
    description: 'Genera y gestiona las reservaciones de tus clientes',
    price: 15000,
    timeStr: 'Lista en: 8 días',
    days: 8,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['reservations_agendas_appointments'],
    industries: ['Restaurantero']
  },
  {
    id: 'table_order_management',
    image: '',
    title: 'Gestión de pedidos por mesa',
    subtitle: 'Pedidos',
    description: 'Organiza y controla los pedidos recibidos por mesa en cada establecimiento',
    price: 28000,
    timeStr: 'Lista en: 15 días',
    days: 15,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['orders'],
    industries: ['Restaurantero', 'Viajes Turísticos']
  },
  {
    id: 'user_profile',
    image: '',
    title: 'Perfil de Usuario',
    subtitle: 'Perfil de Usuario',
    description: 'Permite que tus usuarios personalicen su cuenta y capturen información que requieras',
    price: 50000,
    timeStr: 'Lista en: 20 días',
    days: 20,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['users'],
    industries: ['Restaurantero']
  },
  {
    id: 'menu_price_management',
    image: '',
    title: 'Gestion de menus y precios',
    subtitle: 'Gestion de menus y precios',
    description: 'Crea y personaliza los menús de tus establecimientos',
    price: 23000,
    timeStr: 'Lista en: 10 días',
    days: 10,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['catalogs'],
    industries: ['Restaurantero']
  },
  {
    id: 'payment_systems',
    image: '',
    title: 'Sistemas de Pagos',
    subtitle: 'Sistemas de Pagos',
    description: 'Recibe y gestiona los pagos realizados en tu plataforma',
    price: 28000,
    timeStr: 'Lista en: 10 días',
    days: 10,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['wallet_and_payments'],
    industries: ['Restaurantero']
  },
  {
    id: 'notifications_days',
    image: '',
    title: 'Notificaciones',
    subtitle: 'Notificaciones',
    description: 'Recibe notificaciones útiles para tu operación diaria',
    price: 30000,
    timeStr: 'Lista en: 20 días',
    days: 20,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['notifications'],
    industries: ['Restaurantero', 'Viajes Turísticos', 'Bienes Raíces', 'Hotelería', 'Fintech Crowdfunding', 'Comunicación y Entretenimiento']
  },
  {
    id: 'sales_reporting_module',
    image: '',
    title: 'Módulo de reportes de venta',
    subtitle: 'Reportes de venta',
    description: 'Genera reportes de ventas que te permitan medir tus resultados',
    price: 23000,
    timeStr: 'Lista en: 10 días',
    days: 10,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'Aplicación móvil',
        short: 'App móvil',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['reports'],
    industries: ['Restaurantero']
  },
  {
    id: 'user_administration_module',
    image: '',
    title: 'Módulo de Administración de Usuarios',
    subtitle: 'Administración de Usuarios',
    description: 'Gestiona y controla el acceso a tu plataforma',
    price: 18000,
    timeStr: 'Lista en: 15 días',
    days: 15,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'Aplicación web',
        short: 'App web',
        subtitle: ''
      },
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'Aplicación desktop',
        short: 'App desktop',
        subtitle: ''
      }
    ],
    sections: ['administration'],
    industries: ['Restaurantero', 'Hotelería']
  }, // se empiesa en el 11
  {
    id: 'help_module',
    image: '',
    title: 'Módulo de ayuda',
    subtitle: 'Módulo de ayuda',
    description: 'Módulo de ayuda',
    price: 30000,
    timeStr: 'Lista en: 10 días',
    days: 10,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
        short: 'App web',
        subtitle: ''
      }
    ],
    sections: ['s1'],
    industries: ['Restaurantero']
  },
  {
    id: 'home_delivery_system',
    image: '',
    title: 'Sistema de entrega a domicilio',
    subtitle: 'Sistema de entrega a domicilio',
    description: 'Sistema de entrega a domicilio',
    price: 35,
    timeStr: 'Lista en: 20 días',
    days: 20,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
        short: 'App web',
        subtitle: ''
      }
    ],
    sections: ['s1'],
    industries: ['Restaurantero']
  },
];
