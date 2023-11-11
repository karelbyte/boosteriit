import React, { JSX } from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
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
  solutions: ISolutionAvailable[];
  sections: string[];
}
export const modules: IModule[] = [
  {
    id: 'login_social_networks',
    image: '',
    title: 'Inicio de sesión, con app de google y redes sociales',
    subtitle: 'Con app de google y redes sociales',
    description:
      'El módulo permite al usuario ingresar a una plataforma mediante su usuario o correo y una contraseña, o bien accediendo a través de su cuenta de google o redes sociales: facebook. Incluye el flujo de recuperación de contraseña',
    price: 20000,
    timeStr: 'Lista en: 12 días',
    days: 12,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'payment_management',
    image: '',
    title: 'Gestión de pagos',
    subtitle: 'Gestión de pagos',
    description: 'Gestión de pagos',
    price: 40000,
    timeStr: 'Lista en: 12 días',
    days: 12,
    solutions: [
      {
        id: 'desktop',
        icon: <BiDesktop />,
        title: 'App desktop',
      }
    ],
    sections: ['s2']
  },
  {
    id: 'notifications',
    image: '',
    title: 'Notificaciones',
    subtitle: 'Notificaciones',
    description: 'Notificaciones',
    price: 15000,
    timeStr: 'Lista en: 8 días',
    days: 8,
    solutions: [
      {
        id: 'web',
        icon: <MdWeb />,
        title: 'App web',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'customer_profile',
    image: '',
    title: 'Perfil de cliente',
    subtitle: 'Perfil de cliente',
    description: '',
    price: 28000,
    timeStr: 'Lista en: 15 días',
    days: 15,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'geo',
    image: '',
    title: 'Geolocalización',
    subtitle: 'Geolocalización',
    description: 'Geolocalización',
    price: 50000,
    timeStr: 'Lista en: 20 días',
    days: 20,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'checkin_checkout',
    image: '',
    title: 'Sistema Check In & Check Out',
    subtitle: 'Sistema Check In & Check Out',
    description: 'Sistema Check In & Check Out',
    price: 23000,
    timeStr: 'Lista en: 10 días',
    days: 10,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'shopping_cart',
    image: '',
    title: 'Carrito de compra',
    subtitle: 'Carrito de compra',
    description: 'Carrito de compra',
    price: 28000,
    timeStr: 'Lista en: 10 días',
    days: 10,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'online_reservation_system',
    image: '',
    title: 'Sistema de reservas en línea',
    subtitle: 'Sistema de reservas en línea',
    description: 'Sistema de reservas en línea',
    price: 30000,
    timeStr: 'Lista en: 20 días',
    days: 20,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'menu_price_management',
    image: '',
    title: 'Gestión de menús y precios',
    subtitle: 'Gestión de menús y precios',
    description: 'Gestión de menús y precios',
    price: 23000,
    timeStr: 'Lista en: 10 días',
    days: 10,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
  {
    id: 'inventory_supplier_control',
    image: '',
    title: 'Control de inventario y proveedores',
    subtitle: 'Control de inventario y proveedores',
    description: 'Control de inventario y proveedores',
    price: 18000,
    timeStr: 'Lista en: 15 días',
    days: 15,
    solutions: [
      {
        id: 'mobile',
        icon: <FaMobileAlt />,
        title: 'App móvil',
      }
    ],
    sections: ['s1']
  },
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
      }
    ],
    sections: ['s1']
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
      }
    ],
    sections: ['s1']
  },
];
