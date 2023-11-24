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
    "id": "1_web_users",
    "image": "",
    "title": "Registro/Inicio de sesión con correo, google o redes sociales",
    "subtitle": "Registro/Inicio de sesión con correo, google o redes sociales",
    "description": "Habilita el acceso a tu plataforma con alguna de las cuentas más populares en Internet",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos"
    ]
  },
  {
    "id": "1_desktop_users",
    "image": "",
    "title": "Registro/Inicio de sesión con correo, google o redes sociales",
    "subtitle": "Registro/Inicio de sesión con correo, google o redes sociales",
    "description": "Habilita el acceso a tu plataforma con alguna de las cuentas más populares en Internet",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos"
    ]
  },
  {
    "id": "1_mobile_users",
    "image": "",
    "title": "Registro/Inicio de sesión con correo, google o redes sociales",
    "subtitle": "Registro/Inicio de sesión con correo, google o redes sociales",
    "description": "Habilita el acceso a tu plataforma con alguna de las cuentas más populares en Internet",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos"
    ]
  },
  {
    "id": "2_web_catalogs",
    "image": "",
    "title": "Catalogo de Restaurantes o sucursales",
    "subtitle": "Catalogo de Restaurantes o sucursales",
    "description": "Gestiona los establecimientos que tus clientes podrán elegir",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "2_desktop_catalogs",
    "image": "",
    "title": "Catalogo de Restaurantes o sucursales",
    "subtitle": "Catalogo de Restaurantes o sucursales",
    "description": "Gestiona los establecimientos que tus clientes podrán elegir",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "2_mobile_catalogs",
    "image": "",
    "title": "Catalogo de Restaurantes o sucursales",
    "subtitle": "Catalogo de Restaurantes o sucursales",
    "description": "Gestiona los establecimientos que tus clientes podrán elegir",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "3_web_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de reserva en linea",
    "subtitle": "Sistema de reserva en linea",
    "description": "Genera y gestiona las reservaciones de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "3_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de reserva en linea",
    "subtitle": "Sistema de reserva en linea",
    "description": "Genera y gestiona las reservaciones de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "3_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de reserva en linea",
    "subtitle": "Sistema de reserva en linea",
    "description": "Genera y gestiona las reservaciones de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "4_web_orders",
    "image": "",
    "title": "Gestión de pedidos por mesa ",
    "subtitle": "Gestión de pedidos por mesa ",
    "description": "Organiza y controla los pedidos recibidos por mesa en cada establecimiento",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "4_desktop_orders",
    "image": "",
    "title": "Gestión de pedidos por mesa ",
    "subtitle": "Gestión de pedidos por mesa ",
    "description": "Organiza y controla los pedidos recibidos por mesa en cada establecimiento",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "4_mobile_orders",
    "image": "",
    "title": "Gestión de pedidos por mesa ",
    "subtitle": "Gestión de pedidos por mesa ",
    "description": "Organiza y controla los pedidos recibidos por mesa en cada establecimiento",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "5_web_users",
    "image": "",
    "title": "Perfil de Usuario",
    "subtitle": "Perfil de Usuario",
    "description": "Permite que tus usuarios personalicen su cuenta y capturen información que requieras",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "5_desktop_users",
    "image": "",
    "title": "Perfil de Usuario",
    "subtitle": "Perfil de Usuario",
    "description": "Permite que tus usuarios personalicen su cuenta y capturen información que requieras",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "5_mobile_users",
    "image": "",
    "title": "Perfil de Usuario",
    "subtitle": "Perfil de Usuario",
    "description": "Permite que tus usuarios personalicen su cuenta y capturen información que requieras",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "6_web_catalogs",
    "image": "",
    "title": "Gestion de menus y precios",
    "subtitle": "Gestion de menus y precios",
    "description": "Crea y personaliza los menús de tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "6_desktop_catalogs",
    "image": "",
    "title": "Gestion de menus y precios",
    "subtitle": "Gestion de menus y precios",
    "description": "Crea y personaliza los menús de tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "6_mobile_catalogs",
    "image": "",
    "title": "Gestion de menus y precios",
    "subtitle": "Gestion de menus y precios",
    "description": "Crea y personaliza los menús de tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "7_web_wallet_and_payments",
    "image": "",
    "title": "Sistemas de Pagos",
    "subtitle": "Sistemas de Pagos",
    "description": "Recibe y gestiona los pagos realizados en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "7_desktop_wallet_and_payments",
    "image": "",
    "title": "Sistemas de Pagos",
    "subtitle": "Sistemas de Pagos",
    "description": "Recibe y gestiona los pagos realizados en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "7_mobile_wallet_and_payments",
    "image": "",
    "title": "Sistemas de Pagos",
    "subtitle": "Sistemas de Pagos",
    "description": "Recibe y gestiona los pagos realizados en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "8_web_notifications",
    "image": "",
    "title": "Notificaciones",
    "subtitle": "Notificaciones",
    "description": "Recibe notificaciones útiles para tu operación diaria",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "notifications"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Fintech Crowdfunding",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "8_desktop_notifications",
    "image": "",
    "title": "Notificaciones",
    "subtitle": "Notificaciones",
    "description": "Recibe notificaciones útiles para tu operación diaria",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "notifications"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Fintech Crowdfunding",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "8_mobile_notifications",
    "image": "",
    "title": "Notificaciones",
    "subtitle": "Notificaciones",
    "description": "Recibe notificaciones útiles para tu operación diaria",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "notifications"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Fintech Crowdfunding",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "9_web_reports",
    "image": "",
    "title": "Módulo de reportes de venta",
    "subtitle": "Módulo de reportes de venta",
    "description": "Genera reportes de ventas que te permitan medir tus resultados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reports"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "9_desktop_reports",
    "image": "",
    "title": "Módulo de reportes de venta",
    "subtitle": "Módulo de reportes de venta",
    "description": "Genera reportes de ventas que te permitan medir tus resultados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reports"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "9_mobile_reports",
    "image": "",
    "title": "Módulo de reportes de venta",
    "subtitle": "Módulo de reportes de venta",
    "description": "Genera reportes de ventas que te permitan medir tus resultados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reports"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "10_web_administration",
    "image": "",
    "title": "Módulo de Administración de Usuarios",
    "subtitle": "Módulo de Administración de Usuarios",
    "description": "Gestiona y controla el acceso a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Restaurantero",
      "Hotelería"
    ]
  },
  {
    "id": "10_desktop_administration",
    "image": "",
    "title": "Módulo de Administración de Usuarios",
    "subtitle": "Módulo de Administración de Usuarios",
    "description": "Gestiona y controla el acceso a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Restaurantero",
      "Hotelería"
    ]
  },
  {
    "id": "11_web_administration",
    "image": "",
    "title": "Módulo de Administración de Roles",
    "subtitle": "Módulo de Administración de Roles",
    "description": "Gestiona o personaliza los roles asignados a los usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "11_desktop_administration",
    "image": "",
    "title": "Módulo de Administración de Roles",
    "subtitle": "Módulo de Administración de Roles",
    "description": "Gestiona o personaliza los roles asignados a los usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "12_web_staff",
    "image": "",
    "title": "Gestion de Personal",
    "subtitle": "Gestion de Personal",
    "description": "Administra tu plantilla laboral en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "staff"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "12_desktop_staff",
    "image": "",
    "title": "Gestion de Personal",
    "subtitle": "Gestion de Personal",
    "description": "Administra tu plantilla laboral en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "staff"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "12_mobile_staff",
    "image": "",
    "title": "Gestion de Personal",
    "subtitle": "Gestion de Personal",
    "description": "Administra tu plantilla laboral en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "staff"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "13_web_orders",
    "image": "",
    "title": "Módulo de Entregas a Domicilio",
    "subtitle": "Módulo de Entregas a Domicilio",
    "description": "Gestiona y supervisa la entrega de pedidos a domicilio",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "13_desktop_orders",
    "image": "",
    "title": "Módulo de Entregas a Domicilio",
    "subtitle": "Módulo de Entregas a Domicilio",
    "description": "Gestiona y supervisa la entrega de pedidos a domicilio",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "13_mobile_orders",
    "image": "",
    "title": "Módulo de Entregas a Domicilio",
    "subtitle": "Módulo de Entregas a Domicilio",
    "description": "Gestiona y supervisa la entrega de pedidos a domicilio",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "14_web_inventories",
    "image": "",
    "title": "Módulo de Control de Inventarios",
    "subtitle": "Módulo de Control de Inventarios",
    "description": "Mantén bajo control tu inventario",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "inventories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "14_desktop_inventories",
    "image": "",
    "title": "Módulo de Control de Inventarios",
    "subtitle": "Módulo de Control de Inventarios",
    "description": "Mantén bajo control tu inventario",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "inventories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "15_web_suppliers",
    "image": "",
    "title": "Módulo de Control de Proveedores",
    "subtitle": "Módulo de Control de Proveedores",
    "description": "Gestiona y mantén al día tu relación con proveedores",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "suppliers"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "15_desktop_suppliers",
    "image": "",
    "title": "Módulo de Control de Proveedores",
    "subtitle": "Módulo de Control de Proveedores",
    "description": "Gestiona y mantén al día tu relación con proveedores",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "suppliers"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "16_web_administration",
    "image": "",
    "title": "Mapa virtual de mesas en establecimiento",
    "subtitle": "Mapa virtual de mesas en establecimiento",
    "description": "Visualiza la distribucion de mesas en tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "16_desktop_administration",
    "image": "",
    "title": "Mapa virtual de mesas en establecimiento",
    "subtitle": "Mapa virtual de mesas en establecimiento",
    "description": "Visualiza la distribucion de mesas en tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "16_mobile_administration",
    "image": "",
    "title": "Mapa virtual de mesas en establecimiento",
    "subtitle": "Mapa virtual de mesas en establecimiento",
    "description": "Visualiza la distribucion de mesas en tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "17_web_customer_service",
    "image": "",
    "title": "Módulo de Calificación de Servicio y Cocina",
    "subtitle": "Módulo de Calificación de Servicio y Cocina",
    "description": "Evalúa y mejora el servicio en tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "17_desktop_customer_service",
    "image": "",
    "title": "Módulo de Calificación de Servicio y Cocina",
    "subtitle": "Módulo de Calificación de Servicio y Cocina",
    "description": "Evalúa y mejora el servicio en tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "17_mobile_customer_service",
    "image": "",
    "title": "Módulo de Calificación de Servicio y Cocina",
    "subtitle": "Módulo de Calificación de Servicio y Cocina",
    "description": "Evalúa y mejora el servicio en tus establecimientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "18_web_customer_service",
    "image": "",
    "title": "Módulo Recomendación de Platillos",
    "subtitle": "Módulo Recomendación de Platillos",
    "description": "Permite que tus usuarios califiquen los platillos del menú y recomiéndalos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "18_desktop_customer_service",
    "image": "",
    "title": "Módulo Recomendación de Platillos",
    "subtitle": "Módulo Recomendación de Platillos",
    "description": "Permite que tus usuarios califiquen los platillos del menú y recomiéndalos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "18_mobile_customer_service",
    "image": "",
    "title": "Módulo Recomendación de Platillos",
    "subtitle": "Módulo Recomendación de Platillos",
    "description": "Permite que tus usuarios califiquen los platillos del menú y recomiéndalos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "19_web_histories",
    "image": "",
    "title": "Módulo Historial de Visitas",
    "subtitle": "Módulo Historial de Visitas",
    "description": "Consulta estadísticas sobre las visitas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "19_desktop_histories",
    "image": "",
    "title": "Módulo Historial de Visitas",
    "subtitle": "Módulo Historial de Visitas",
    "description": "Consulta estadísticas sobre las visitas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "19_mobile_histories",
    "image": "",
    "title": "Módulo Historial de Visitas",
    "subtitle": "Módulo Historial de Visitas",
    "description": "Consulta estadísticas sobre las visitas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "20_web_histories",
    "image": "",
    "title": "Módulo Historial de Consumo",
    "subtitle": "Módulo Historial de Consumo",
    "description": "Consulta estadísticas de consumo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "20_desktop_histories",
    "image": "",
    "title": "Módulo Historial de Consumo",
    "subtitle": "Módulo Historial de Consumo",
    "description": "Consulta estadísticas de consumo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "20_mobile_histories",
    "image": "",
    "title": "Módulo Historial de Consumo",
    "subtitle": "Módulo Historial de Consumo",
    "description": "Consulta estadísticas de consumo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "21_web_help_support",
    "image": "",
    "title": "Módulo de Ayuda y Soporte",
    "subtitle": "Módulo de Ayuda y Soporte",
    "description": "Incorpora una línea de ayuda y soporte a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos"
    ]
  },
  {
    "id": "21_desktop_help_support",
    "image": "",
    "title": "Módulo de Ayuda y Soporte",
    "subtitle": "Módulo de Ayuda y Soporte",
    "description": "Incorpora una línea de ayuda y soporte a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos"
    ]
  },
  {
    "id": "21_mobile_help_support",
    "image": "",
    "title": "Módulo de Ayuda y Soporte",
    "subtitle": "Módulo de Ayuda y Soporte",
    "description": "Incorpora una línea de ayuda y soporte a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos"
    ]
  },
  {
    "id": "22_web_clarifications",
    "image": "",
    "title": "Módulo de aclaraciones",
    "subtitle": "Módulo de aclaraciones",
    "description": "Gestiona los reclamos de tus clientes por medio de aclaraciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "clarifications"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Crowdfunding",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "22_desktop_clarifications",
    "image": "",
    "title": "Módulo de aclaraciones",
    "subtitle": "Módulo de aclaraciones",
    "description": "Gestiona los reclamos de tus clientes por medio de aclaraciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "clarifications"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Crowdfunding",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "22_mobile_clarifications",
    "image": "",
    "title": "Módulo de aclaraciones",
    "subtitle": "Módulo de aclaraciones",
    "description": "Gestiona los reclamos de tus clientes por medio de aclaraciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "clarifications"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Crowdfunding",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "23_web_geolocation",
    "image": "",
    "title": "Geolocalización con Google Map",
    "subtitle": "Geolocalización con Google Map",
    "description": "Permite que tus usuarios localicen sus objetivos con un clic",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "geolocation"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería"
    ]
  },
  {
    "id": "23_desktop_geolocation",
    "image": "",
    "title": "Geolocalización con Google Map",
    "subtitle": "Geolocalización con Google Map",
    "description": "Permite que tus usuarios localicen sus objetivos con un clic",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "geolocation"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería"
    ]
  },
  {
    "id": "23_mobile_geolocation",
    "image": "",
    "title": "Geolocalización con Google Map",
    "subtitle": "Geolocalización con Google Map",
    "description": "Permite que tus usuarios localicen sus objetivos con un clic",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "geolocation"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería"
    ]
  },
  {
    "id": "24_web_wallet_and_payments",
    "image": "",
    "title": "Punto de venta",
    "subtitle": "Punto de venta",
    "description": "Agrega las bondades del punto de venta a tu plataforma ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "24_desktop_wallet_and_payments",
    "image": "",
    "title": "Punto de venta",
    "subtitle": "Punto de venta",
    "description": "Agrega las bondades del punto de venta a tu plataforma ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Restaurantero"
    ]
  },
  {
    "id": "25_web_billing",
    "image": "",
    "title": "Sistema de Facturación",
    "subtitle": "Sistema de Facturación",
    "description": "Genera y administra tus facturas por medio de una integración con el SAT",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "billing"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Crowdfunding",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "25_desktop_billing",
    "image": "",
    "title": "Sistema de Facturación",
    "subtitle": "Sistema de Facturación",
    "description": "Genera y administra tus facturas por medio de una integración con el SAT",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "billing"
    ],
    "industries": [
      "Restaurantero",
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Crowdfunding",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "26_web_promotions",
    "image": "",
    "title": "Home público con promociones",
    "subtitle": "Home público con promociones",
    "description": "Publica tus promociones y atrae a tu clientes potenciales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Viajes Turísticos",
      "Hotelería"
    ]
  },
  {
    "id": "26_desktop_promotions",
    "image": "",
    "title": "Home público con promociones",
    "subtitle": "Home público con promociones",
    "description": "Publica tus promociones y atrae a tu clientes potenciales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Viajes Turísticos",
      "Hotelería"
    ]
  },
  {
    "id": "26_mobile_promotions",
    "image": "",
    "title": "Home público con promociones",
    "subtitle": "Home público con promociones",
    "description": "Publica tus promociones y atrae a tu clientes potenciales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Viajes Turísticos",
      "Hotelería"
    ]
  },
  {
    "id": "27_web_catalogs",
    "image": "",
    "title": "Gestión de Hoteles",
    "subtitle": "Gestión de Hoteles",
    "description": "Gestiona los hoteles que tus clientes podrán reservar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "27_desktop_catalogs",
    "image": "",
    "title": "Gestión de Hoteles",
    "subtitle": "Gestión de Hoteles",
    "description": "Gestiona los hoteles que tus clientes podrán reservar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "27_mobile_catalogs",
    "image": "",
    "title": "Gestión de Hoteles",
    "subtitle": "Gestión de Hoteles",
    "description": "Gestiona los hoteles que tus clientes podrán reservar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "28_web_catalogs",
    "image": "",
    "title": "Gestión de Vuelos",
    "subtitle": "Gestión de Vuelos",
    "description": "Gestiona los vuelos que tus clientes podrán reservar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "28_desktop_catalogs",
    "image": "",
    "title": "Gestión de Vuelos",
    "subtitle": "Gestión de Vuelos",
    "description": "Gestiona los vuelos que tus clientes podrán reservar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "28_mobile_catalogs",
    "image": "",
    "title": "Gestión de Vuelos",
    "subtitle": "Gestión de Vuelos",
    "description": "Gestiona los vuelos que tus clientes podrán reservar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "29_web_catalogs",
    "image": "",
    "title": "Gestión de Paquetes Turísticos",
    "subtitle": "Gestión de Paquetes Turísticos",
    "description": "Gestiona los destinos con paquetes turísticos que tus clientes podrán disfrutar ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "29_desktop_catalogs",
    "image": "",
    "title": "Gestión de Paquetes Turísticos",
    "subtitle": "Gestión de Paquetes Turísticos",
    "description": "Gestiona los destinos con paquetes turísticos que tus clientes podrán disfrutar ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "29_mobile_catalogs",
    "image": "",
    "title": "Gestión de Paquetes Turísticos",
    "subtitle": "Gestión de Paquetes Turísticos",
    "description": "Gestiona los destinos con paquetes turísticos que tus clientes podrán disfrutar ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "30_web_purchasing_process",
    "image": "",
    "title": "Carrito de compras",
    "subtitle": "Carrito de compras",
    "description": "Lleva de la mano a tu cliente en su proceso de compra",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "purchasing_process"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "30_desktop_purchasing_process",
    "image": "",
    "title": "Carrito de compras",
    "subtitle": "Carrito de compras",
    "description": "Lleva de la mano a tu cliente en su proceso de compra",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "purchasing_process"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "30_mobile_purchasing_process",
    "image": "",
    "title": "Carrito de compras",
    "subtitle": "Carrito de compras",
    "description": "Lleva de la mano a tu cliente en su proceso de compra",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "purchasing_process"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "31_web_wallet_and_payments",
    "image": "",
    "title": "Sistema de gestión de pagos",
    "subtitle": "Sistema de gestión de pagos",
    "description": "Recibe y gestiona los pagos de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Viajes Turísticos",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "31_desktop_wallet_and_payments",
    "image": "",
    "title": "Sistema de gestión de pagos",
    "subtitle": "Sistema de gestión de pagos",
    "description": "Recibe y gestiona los pagos de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Viajes Turísticos",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "31_mobile_wallet_and_payments",
    "image": "",
    "title": "Sistema de gestión de pagos",
    "subtitle": "Sistema de gestión de pagos",
    "description": "Recibe y gestiona los pagos de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Viajes Turísticos",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "32_web_recommendations",
    "image": "",
    "title": "Sistema de Recomendación y Comisión",
    "subtitle": "Sistema de Recomendación y Comisión",
    "description": "Gestiona las recomendaciones y prémialas con una comisión",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "recommendations"
    ],
    "industries": [
      "Viajes Turísticos",
      "Bienes Raíces",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "32_desktop_recommendations",
    "image": "",
    "title": "Sistema de Recomendación y Comisión",
    "subtitle": "Sistema de Recomendación y Comisión",
    "description": "Gestiona las recomendaciones y prémialas con una comisión",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "recommendations"
    ],
    "industries": [
      "Viajes Turísticos",
      "Bienes Raíces",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "32_mobile_recommendations",
    "image": "",
    "title": "Sistema de Recomendación y Comisión",
    "subtitle": "Sistema de Recomendación y Comisión",
    "description": "Gestiona las recomendaciones y prémialas con una comisión",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "recommendations"
    ],
    "industries": [
      "Viajes Turísticos",
      "Bienes Raíces",
      "Fintech Créditos",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "33_web_histories",
    "image": "",
    "title": "Historial de compras",
    "subtitle": "Historial de compras",
    "description": "Permite la consulta de compras realizadas por tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "33_desktop_histories",
    "image": "",
    "title": "Historial de compras",
    "subtitle": "Historial de compras",
    "description": "Permite la consulta de compras realizadas por tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "33_mobile_histories",
    "image": "",
    "title": "Historial de compras",
    "subtitle": "Historial de compras",
    "description": "Permite la consulta de compras realizadas por tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "34_web_customer_service",
    "image": "",
    "title": "Módulo de retroalimentación y reseñas de viajes",
    "subtitle": "Módulo de retroalimentación y reseñas de viajes",
    "description": "Incorpora retroalimentaciones y reseñas por parte de tus clientes que promocionen tus productos y servicios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "34_desktop_customer_service",
    "image": "",
    "title": "Módulo de retroalimentación y reseñas de viajes",
    "subtitle": "Módulo de retroalimentación y reseñas de viajes",
    "description": "Incorpora retroalimentaciones y reseñas por parte de tus clientes que promocionen tus productos y servicios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "34_mobile_customer_service",
    "image": "",
    "title": "Módulo de retroalimentación y reseñas de viajes",
    "subtitle": "Módulo de retroalimentación y reseñas de viajes",
    "description": "Incorpora retroalimentaciones y reseñas por parte de tus clientes que promocionen tus productos y servicios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "35_web_reservations_agendas_appointments",
    "image": "",
    "title": "Módulo de gestión de transporte terrestre",
    "subtitle": "Módulo de gestión de transporte terrestre",
    "description": "Agrega la posibilidad de contratar transportes terrestres dentro de tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "35_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Módulo de gestión de transporte terrestre",
    "subtitle": "Módulo de gestión de transporte terrestre",
    "description": "Agrega la posibilidad de contratar transportes terrestres dentro de tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "35_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Módulo de gestión de transporte terrestre",
    "subtitle": "Módulo de gestión de transporte terrestre",
    "description": "Agrega la posibilidad de contratar transportes terrestres dentro de tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "36_web_catalogs",
    "image": "",
    "title": "Sistema para integrar actividades o tours",
    "subtitle": "Sistema para integrar actividades o tours",
    "description": "Integra experiencias y tours que tus clientes podrán disfrutar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "36_desktop_catalogs",
    "image": "",
    "title": "Sistema para integrar actividades o tours",
    "subtitle": "Sistema para integrar actividades o tours",
    "description": "Integra experiencias y tours que tus clientes podrán disfrutar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "36_mobile_catalogs",
    "image": "",
    "title": "Sistema para integrar actividades o tours",
    "subtitle": "Sistema para integrar actividades o tours",
    "description": "Integra experiencias y tours que tus clientes podrán disfrutar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "37_web_metrics_statistics",
    "image": "",
    "title": "Módulo de análisis de tendencias y preferencias de viajeros",
    "subtitle": "Módulo de análisis de tendencias y preferencias de viajeros",
    "description": "Agrega herramientas que te ayudarán a comprender tendencias de navegación y compra para mejorar tus servicios y promociones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "37_desktop_metrics_statistics",
    "image": "",
    "title": "Módulo de análisis de tendencias y preferencias de viajeros",
    "subtitle": "Módulo de análisis de tendencias y preferencias de viajeros",
    "description": "Agrega herramientas que te ayudarán a comprender tendencias de navegación y compra para mejorar tus servicios y promociones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "37_mobile_metrics_statistics",
    "image": "",
    "title": "Módulo de análisis de tendencias y preferencias de viajeros",
    "subtitle": "Módulo de análisis de tendencias y preferencias de viajeros",
    "description": "Agrega herramientas que te ayudarán a comprender tendencias de navegación y compra para mejorar tus servicios y promociones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "38_web_promotions",
    "image": "",
    "title": "Filtrar promociones con Inteligencia Artificial",
    "subtitle": "Filtrar promociones con Inteligencia Artificial",
    "description": "Incorpora las bondades de la Inteligencia Artificial al momento de mostrar las promociones a tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "38_desktop_promotions",
    "image": "",
    "title": "Filtrar promociones con Inteligencia Artificial",
    "subtitle": "Filtrar promociones con Inteligencia Artificial",
    "description": "Incorpora las bondades de la Inteligencia Artificial al momento de mostrar las promociones a tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "38_mobile_promotions",
    "image": "",
    "title": "Filtrar promociones con Inteligencia Artificial",
    "subtitle": "Filtrar promociones con Inteligencia Artificial",
    "description": "Incorpora las bondades de la Inteligencia Artificial al momento de mostrar las promociones a tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "39_web_crm",
    "image": "",
    "title": "CRM",
    "subtitle": "CRM",
    "description": "Gestiona la relación con tus clientes e incrementa tus leads",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Crowdfunding",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "39_desktop_crm",
    "image": "",
    "title": "CRM",
    "subtitle": "CRM",
    "description": "Gestiona la relación con tus clientes e incrementa tus leads",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Viajes Turísticos",
      "Bienes Raíces",
      "Hotelería",
      "Salud y Cuidado",
      "Fintech Crowdfunding",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "40_web_reservations_agendas_appointments",
    "image": "",
    "title": "Motor de reservaciones",
    "subtitle": "Motor de reservaciones",
    "description": "Incorpora un motor de reservaciones que gestione la contratación y disponibilidad para los viajes de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "40_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Motor de reservaciones",
    "subtitle": "Motor de reservaciones",
    "description": "Incorpora un motor de reservaciones que gestione la contratación y disponibilidad para los viajes de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "40_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Motor de reservaciones",
    "subtitle": "Motor de reservaciones",
    "description": "Incorpora un motor de reservaciones que gestione la contratación y disponibilidad para los viajes de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Viajes Turísticos"
    ]
  },
  {
    "id": "41_web_administration",
    "image": "",
    "title": "Módulo de Administración de Usuario Inmobiliario",
    "subtitle": "Módulo de Administración de Usuario Inmobiliario",
    "description": "Gestiona y controla el acceso de usuarios inmobiliarios en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "41_desktop_administration",
    "image": "",
    "title": "Módulo de Administración de Usuario Inmobiliario",
    "subtitle": "Módulo de Administración de Usuario Inmobiliario",
    "description": "Gestiona y controla el acceso de usuarios inmobiliarios en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "42_web_administration",
    "image": "",
    "title": "Módulo de Administración y Validación de Usuario Propietario",
    "subtitle": "Módulo de Administración y Validación de Usuario Propietario",
    "description": "Gestiona el acceso de usuarios propietarios y valida su información en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "42_desktop_administration",
    "image": "",
    "title": "Módulo de Administración y Validación de Usuario Propietario",
    "subtitle": "Módulo de Administración y Validación de Usuario Propietario",
    "description": "Gestiona el acceso de usuarios propietarios y valida su información en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "43_web_administration",
    "image": "",
    "title": "Módulo de Administración de Usuario Arrendatario",
    "subtitle": "Módulo de Administración de Usuario Arrendatario",
    "description": "Gestiona y controla el acceso de usuarios arrendatarios en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "43_desktop_administration",
    "image": "",
    "title": "Módulo de Administración de Usuario Arrendatario",
    "subtitle": "Módulo de Administración de Usuario Arrendatario",
    "description": "Gestiona y controla el acceso de usuarios arrendatarios en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "44_web_accounting_finance",
    "image": "",
    "title": "Sistema de seguimiento de transacciones y cierres de ventas en general",
    "subtitle": "Sistema de seguimiento de transacciones y cierres de ventas en general",
    "description": "Da seguimiento a las transacciones relacionadas con ventas en general",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "44_desktop_accounting_finance",
    "image": "",
    "title": "Sistema de seguimiento de transacciones y cierres de ventas en general",
    "subtitle": "Sistema de seguimiento de transacciones y cierres de ventas en general",
    "description": "Da seguimiento a las transacciones relacionadas con ventas en general",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "44_mobile_accounting_finance",
    "image": "",
    "title": "Sistema de seguimiento de transacciones y cierres de ventas en general",
    "subtitle": "Sistema de seguimiento de transacciones y cierres de ventas en general",
    "description": "Da seguimiento a las transacciones relacionadas con ventas en general",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "45_web_wallet_and_payments",
    "image": "",
    "title": "Sistema de pagos y apartados para renta",
    "subtitle": "Sistema de pagos y apartados para renta",
    "description": "Recibe y gestiona los pagos relacionados a compras y apartados para renta",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "45_desktop_wallet_and_payments",
    "image": "",
    "title": "Sistema de pagos y apartados para renta",
    "subtitle": "Sistema de pagos y apartados para renta",
    "description": "Recibe y gestiona los pagos relacionados a compras y apartados para renta",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "45_mobile_wallet_and_payments",
    "image": "",
    "title": "Sistema de pagos y apartados para renta",
    "subtitle": "Sistema de pagos y apartados para renta",
    "description": "Recibe y gestiona los pagos relacionados a compras y apartados para renta",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "46_web_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de Agenda de visitas",
    "subtitle": "Sistema de Agenda de visitas",
    "description": "Mantén un registro organizado y coordinado de las visitas programadas por tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "46_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de Agenda de visitas",
    "subtitle": "Sistema de Agenda de visitas",
    "description": "Mantén un registro organizado y coordinado de las visitas programadas por tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "46_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de Agenda de visitas",
    "subtitle": "Sistema de Agenda de visitas",
    "description": "Mantén un registro organizado y coordinado de las visitas programadas por tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "47_web_catalogs",
    "image": "",
    "title": "Módulo de gestión de Propiedades",
    "subtitle": "Módulo de gestión de Propiedades",
    "description": "Administra las propiedades y mantén al día tus registros",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "47_desktop_catalogs",
    "image": "",
    "title": "Módulo de gestión de Propiedades",
    "subtitle": "Módulo de gestión de Propiedades",
    "description": "Administra las propiedades y mantén al día tus registros",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "47_mobile_catalogs",
    "image": "",
    "title": "Módulo de gestión de Propiedades",
    "subtitle": "Módulo de gestión de Propiedades",
    "description": "Administra las propiedades y mantén al día tus registros",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "48_web_crm",
    "image": "",
    "title": "CRM - Seguimiento de Prospectos",
    "subtitle": "CRM - Seguimiento de Prospectos",
    "description": "Gestiona la relación con tus prospectos e incrementa tus leads",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "48_desktop_crm",
    "image": "",
    "title": "CRM - Seguimiento de Prospectos",
    "subtitle": "CRM - Seguimiento de Prospectos",
    "description": "Gestiona la relación con tus prospectos e incrementa tus leads",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "48_mobile_crm",
    "image": "",
    "title": "CRM - Seguimiento de Prospectos",
    "subtitle": "CRM - Seguimiento de Prospectos",
    "description": "Gestiona la relación con tus prospectos e incrementa tus leads",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "49_web_crm",
    "image": "",
    "title": "CRM - Gestión de Asignación de Visitas",
    "subtitle": "CRM - Gestión de Asignación de Visitas",
    "description": "Organiza tu proceso de visitas y asígnalas a tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "49_desktop_crm",
    "image": "",
    "title": "CRM - Gestión de Asignación de Visitas",
    "subtitle": "CRM - Gestión de Asignación de Visitas",
    "description": "Organiza tu proceso de visitas y asígnalas a tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "49_mobile_crm",
    "image": "",
    "title": "CRM - Gestión de Asignación de Visitas",
    "subtitle": "CRM - Gestión de Asignación de Visitas",
    "description": "Organiza tu proceso de visitas y asígnalas a tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "50_web_users",
    "image": "",
    "title": "Tarjetas digitales para colaboradores",
    "subtitle": "Tarjetas digitales para colaboradores",
    "description": "Permite que tus colaboradores generen sus tarjetas digitales de presentación ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "50_desktop_users",
    "image": "",
    "title": "Tarjetas digitales para colaboradores",
    "subtitle": "Tarjetas digitales para colaboradores",
    "description": "Permite que tus colaboradores generen sus tarjetas digitales de presentación ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "50_mobile_users",
    "image": "",
    "title": "Tarjetas digitales para colaboradores",
    "subtitle": "Tarjetas digitales para colaboradores",
    "description": "Permite que tus colaboradores generen sus tarjetas digitales de presentación ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "51_web_metrics_statistics",
    "image": "",
    "title": "Herramienta de análisis de mercado inmobiliario",
    "subtitle": "Herramienta de análisis de mercado inmobiliario",
    "description": "Impulsa tu negocio con análisis del mercado inmobiliario, descubriendo tendencias que te ayudarán a tomar decisiones estratégicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "51_desktop_metrics_statistics",
    "image": "",
    "title": "Herramienta de análisis de mercado inmobiliario",
    "subtitle": "Herramienta de análisis de mercado inmobiliario",
    "description": "Impulsa tu negocio con análisis del mercado inmobiliario, descubriendo tendencias que te ayudarán a tomar decisiones estratégicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "51_mobile_metrics_statistics",
    "image": "",
    "title": "Herramienta de análisis de mercado inmobiliario",
    "subtitle": "Herramienta de análisis de mercado inmobiliario",
    "description": "Impulsa tu negocio con análisis del mercado inmobiliario, descubriendo tendencias que te ayudarán a tomar decisiones estratégicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "52_web_administration",
    "image": "",
    "title": "Sistema de administración de contratos y documentación de arrendamiento y venta",
    "subtitle": "Sistema de administración de contratos y documentación de arrendamiento y venta",
    "description": "Administra y almacena los contratos y documentación necesaria para tus procesos operativos del día a día",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "52_desktop_administration",
    "image": "",
    "title": "Sistema de administración de contratos y documentación de arrendamiento y venta",
    "subtitle": "Sistema de administración de contratos y documentación de arrendamiento y venta",
    "description": "Administra y almacena los contratos y documentación necesaria para tus procesos operativos del día a día",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "53_web_administration",
    "image": "",
    "title": "Solución de evaluación de propiedades y valoración",
    "subtitle": "Solución de evaluación de propiedades y valoración",
    "description": "Agrega procesos de evaluación y valoración de propiedades que te ayuden a organizar y agilizar tu operación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "53_desktop_administration",
    "image": "",
    "title": "Solución de evaluación de propiedades y valoración",
    "subtitle": "Solución de evaluación de propiedades y valoración",
    "description": "Agrega procesos de evaluación y valoración de propiedades que te ayuden a organizar y agilizar tu operación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "53_mobile_administration",
    "image": "",
    "title": "Solución de evaluación de propiedades y valoración",
    "subtitle": "Solución de evaluación de propiedades y valoración",
    "description": "Agrega procesos de evaluación y valoración de propiedades que te ayuden a organizar y agilizar tu operación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "54_web_catalogs",
    "image": "",
    "title": "Herramienta de tours virtuales",
    "subtitle": "Herramienta de tours virtuales",
    "description": "Permite que tus usuarios conozcan y amen las propiedades por medio de tours virtuales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "54_desktop_catalogs",
    "image": "",
    "title": "Herramienta de tours virtuales",
    "subtitle": "Herramienta de tours virtuales",
    "description": "Permite que tus usuarios conozcan y amen las propiedades por medio de tours virtuales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "54_mobile_catalogs",
    "image": "",
    "title": "Herramienta de tours virtuales",
    "subtitle": "Herramienta de tours virtuales",
    "description": "Permite que tus usuarios conozcan y amen las propiedades por medio de tours virtuales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "55_web_administration",
    "image": "",
    "title": "Módulo de gestión de mantenimiento y reparaciones de propiedades",
    "subtitle": "Módulo de gestión de mantenimiento y reparaciones de propiedades",
    "description": "Mantén en buen estado tus propiedades planeando el debido mantenimiento y reparación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "55_desktop_administration",
    "image": "",
    "title": "Módulo de gestión de mantenimiento y reparaciones de propiedades",
    "subtitle": "Módulo de gestión de mantenimiento y reparaciones de propiedades",
    "description": "Mantén en buen estado tus propiedades planeando el debido mantenimiento y reparación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "55_mobile_administration",
    "image": "",
    "title": "Módulo de gestión de mantenimiento y reparaciones de propiedades",
    "subtitle": "Módulo de gestión de mantenimiento y reparaciones de propiedades",
    "description": "Mantén en buen estado tus propiedades planeando el debido mantenimiento y reparación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "56_web_crm",
    "image": "",
    "title": "CRM - Reporte de visitas",
    "subtitle": "CRM - Reporte de visitas",
    "description": "Digitaliza los reportes de visitas por parte de tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "56_desktop_crm",
    "image": "",
    "title": "CRM - Reporte de visitas",
    "subtitle": "CRM - Reporte de visitas",
    "description": "Digitaliza los reportes de visitas por parte de tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "56_mobile_crm",
    "image": "",
    "title": "CRM - Reporte de visitas",
    "subtitle": "CRM - Reporte de visitas",
    "description": "Digitaliza los reportes de visitas por parte de tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "57_web_crm",
    "image": "",
    "title": "CRM - Presupuestos",
    "subtitle": "CRM - Presupuestos",
    "description": "Realiza presupuestos y compártelos con tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "57_desktop_crm",
    "image": "",
    "title": "CRM - Presupuestos",
    "subtitle": "CRM - Presupuestos",
    "description": "Realiza presupuestos y compártelos con tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "57_mobile_crm",
    "image": "",
    "title": "CRM - Presupuestos",
    "subtitle": "CRM - Presupuestos",
    "description": "Realiza presupuestos y compártelos con tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "58_web_crm",
    "image": "",
    "title": "CRM - Comisiones ganadas",
    "subtitle": "CRM - Comisiones ganadas",
    "description": "Sumariza las comisiones ganadas por tus agentes y motívalos a dar su máximo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "58_desktop_crm",
    "image": "",
    "title": "CRM - Comisiones ganadas",
    "subtitle": "CRM - Comisiones ganadas",
    "description": "Sumariza las comisiones ganadas por tus agentes y motívalos a dar su máximo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "58_mobile_crm",
    "image": "",
    "title": "CRM - Comisiones ganadas",
    "subtitle": "CRM - Comisiones ganadas",
    "description": "Sumariza las comisiones ganadas por tus agentes y motívalos a dar su máximo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "59_web_crm",
    "image": "",
    "title": "CRM - Negocios ganados",
    "subtitle": "CRM - Negocios ganados",
    "description": "Genera un reporte de los negocios logrados y dimensiona tus ganancias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "59_desktop_crm",
    "image": "",
    "title": "CRM - Negocios ganados",
    "subtitle": "CRM - Negocios ganados",
    "description": "Genera un reporte de los negocios logrados y dimensiona tus ganancias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "59_mobile_crm",
    "image": "",
    "title": "CRM - Negocios ganados",
    "subtitle": "CRM - Negocios ganados",
    "description": "Genera un reporte de los negocios logrados y dimensiona tus ganancias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "crm"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "60_web_promotions",
    "image": "",
    "title": "Plataforma de marketing inmobiliario y promoción de propiedades",
    "subtitle": "Plataforma de marketing inmobiliario y promoción de propiedades",
    "description": "Crea contenido y promociona tus propiedades para agilizar su adquisición",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "60_desktop_promotions",
    "image": "",
    "title": "Plataforma de marketing inmobiliario y promoción de propiedades",
    "subtitle": "Plataforma de marketing inmobiliario y promoción de propiedades",
    "description": "Crea contenido y promociona tus propiedades para agilizar su adquisición",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "60_mobile_promotions",
    "image": "",
    "title": "Plataforma de marketing inmobiliario y promoción de propiedades",
    "subtitle": "Plataforma de marketing inmobiliario y promoción de propiedades",
    "description": "Crea contenido y promociona tus propiedades para agilizar su adquisición",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Bienes Raíces"
    ]
  },
  {
    "id": "61_web_catalogs",
    "image": "",
    "title": "Catálogo de Hoteles y Habitaciones",
    "subtitle": "Catálogo de Hoteles y Habitaciones",
    "description": "Muestra tus hoteles y tipos de habitaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "61_desktop_catalogs",
    "image": "",
    "title": "Catálogo de Hoteles y Habitaciones",
    "subtitle": "Catálogo de Hoteles y Habitaciones",
    "description": "Muestra tus hoteles y tipos de habitaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "61_mobile_catalogs",
    "image": "",
    "title": "Catálogo de Hoteles y Habitaciones",
    "subtitle": "Catálogo de Hoteles y Habitaciones",
    "description": "Muestra tus hoteles y tipos de habitaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "62_web_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de reservas y administración de habitaciones",
    "subtitle": "Sistema de reservas y administración de habitaciones",
    "description": "Gestiona y controla las reservaciones así como la disponibilidad de habitaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "62_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de reservas y administración de habitaciones",
    "subtitle": "Sistema de reservas y administración de habitaciones",
    "description": "Gestiona y controla las reservaciones así como la disponibilidad de habitaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "62_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de reservas y administración de habitaciones",
    "subtitle": "Sistema de reservas y administración de habitaciones",
    "description": "Gestiona y controla las reservaciones así como la disponibilidad de habitaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "63_web_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema CheckIn & CheckOut",
    "subtitle": "Sistema CheckIn & CheckOut",
    "description": "Automatiza los procesos de CheckIn y CheckOut en tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "63_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema CheckIn & CheckOut",
    "subtitle": "Sistema CheckIn & CheckOut",
    "description": "Automatiza los procesos de CheckIn y CheckOut en tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "63_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema CheckIn & CheckOut",
    "subtitle": "Sistema CheckIn & CheckOut",
    "description": "Automatiza los procesos de CheckIn y CheckOut en tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "64_web_reports",
    "image": "",
    "title": "Sistema de análisis y generación de informes",
    "subtitle": "Sistema de análisis y generación de informes",
    "description": "Monitorea el desempeño de tus hoteles y genera informes útiles para decisiones estratégicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reports"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "64_desktop_reports",
    "image": "",
    "title": "Sistema de análisis y generación de informes",
    "subtitle": "Sistema de análisis y generación de informes",
    "description": "Monitorea el desempeño de tus hoteles y genera informes útiles para decisiones estratégicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reports"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "65_web_orders",
    "image": "",
    "title": "Sistema de Pedidos a Habitación",
    "subtitle": "Sistema de Pedidos a Habitación",
    "description": "Automatiza la solicitud y atención de servicios a la habitación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "65_desktop_orders",
    "image": "",
    "title": "Sistema de Pedidos a Habitación",
    "subtitle": "Sistema de Pedidos a Habitación",
    "description": "Automatiza la solicitud y atención de servicios a la habitación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "65_mobile_orders",
    "image": "",
    "title": "Sistema de Pedidos a Habitación",
    "subtitle": "Sistema de Pedidos a Habitación",
    "description": "Automatiza la solicitud y atención de servicios a la habitación",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "orders"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "66_web_customer_service",
    "image": "",
    "title": "Sistema de Quejas y Sugerencias",
    "subtitle": "Sistema de Quejas y Sugerencias",
    "description": "Mejora tus procesos al gestionar las quejas y sugerencias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "66_desktop_customer_service",
    "image": "",
    "title": "Sistema de Quejas y Sugerencias",
    "subtitle": "Sistema de Quejas y Sugerencias",
    "description": "Mejora tus procesos al gestionar las quejas y sugerencias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "66_mobile_customer_service",
    "image": "",
    "title": "Sistema de Quejas y Sugerencias",
    "subtitle": "Sistema de Quejas y Sugerencias",
    "description": "Mejora tus procesos al gestionar las quejas y sugerencias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "67_web_administration",
    "image": "",
    "title": "Herramienta de gestión de eventos y conferencias",
    "subtitle": "Herramienta de gestión de eventos y conferencias",
    "description": "Incorpora la programación y gestión de eventos y conferencias en tus salas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "67_desktop_administration",
    "image": "",
    "title": "Herramienta de gestión de eventos y conferencias",
    "subtitle": "Herramienta de gestión de eventos y conferencias",
    "description": "Incorpora la programación y gestión de eventos y conferencias en tus salas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "67_mobile_administration",
    "image": "",
    "title": "Herramienta de gestión de eventos y conferencias",
    "subtitle": "Herramienta de gestión de eventos y conferencias",
    "description": "Incorpora la programación y gestión de eventos y conferencias en tus salas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "68_web_accounting_finance",
    "image": "",
    "title": "Plataforma de contabilidad y gestión financiera",
    "subtitle": "Plataforma de contabilidad y gestión financiera",
    "description": "Controla en un solo lugar la contabilidad y aspectos financieros de tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "68_desktop_accounting_finance",
    "image": "",
    "title": "Plataforma de contabilidad y gestión financiera",
    "subtitle": "Plataforma de contabilidad y gestión financiera",
    "description": "Controla en un solo lugar la contabilidad y aspectos financieros de tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "69_web_staff",
    "image": "",
    "title": "Módulo de gestión de recursos humanos",
    "subtitle": "Módulo de gestión de recursos humanos",
    "description": "Administra tu plantilla laboral en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "staff"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "69_desktop_staff",
    "image": "",
    "title": "Módulo de gestión de recursos humanos",
    "subtitle": "Módulo de gestión de recursos humanos",
    "description": "Administra tu plantilla laboral en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "staff"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "70_web_reservations_agendas_appointments",
    "image": "",
    "title": "Solución para la gestión de Spa y Bienestar",
    "subtitle": "Solución para la gestión de Spa y Bienestar",
    "description": "Integra la elección de servicios de Spa y Bienestar ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "70_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Solución para la gestión de Spa y Bienestar",
    "subtitle": "Solución para la gestión de Spa y Bienestar",
    "description": "Integra la elección de servicios de Spa y Bienestar ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "70_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Solución para la gestión de Spa y Bienestar",
    "subtitle": "Solución para la gestión de Spa y Bienestar",
    "description": "Integra la elección de servicios de Spa y Bienestar ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "71_web_inventories",
    "image": "",
    "title": "Sistema de inventarios",
    "subtitle": "Sistema de inventarios",
    "description": "Mantén bajo control tu inventario",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "inventories"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "71_desktop_inventories",
    "image": "",
    "title": "Sistema de inventarios",
    "subtitle": "Sistema de inventarios",
    "description": "Mantén bajo control tu inventario",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "inventories"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "72_web_promotions",
    "image": "",
    "title": "Sistema de promociones para distintos usuarios",
    "subtitle": "Sistema de promociones para distintos usuarios",
    "description": "Segmenta y publica tus promociones para atraer a tu clientes potenciales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "72_desktop_promotions",
    "image": "",
    "title": "Sistema de promociones para distintos usuarios",
    "subtitle": "Sistema de promociones para distintos usuarios",
    "description": "Segmenta y publica tus promociones para atraer a tu clientes potenciales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "72_mobile_promotions",
    "image": "",
    "title": "Sistema de promociones para distintos usuarios",
    "subtitle": "Sistema de promociones para distintos usuarios",
    "description": "Segmenta y publica tus promociones para atraer a tu clientes potenciales",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "promotions"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "73_web_catalogs",
    "image": "",
    "title": "Administración de alimentos y bebidas",
    "subtitle": "Administración de alimentos y bebidas",
    "description": "Gestiona los menús de tus hoteles según disponibilidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "73_desktop_catalogs",
    "image": "",
    "title": "Administración de alimentos y bebidas",
    "subtitle": "Administración de alimentos y bebidas",
    "description": "Gestiona los menús de tus hoteles según disponibilidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "73_mobile_catalogs",
    "image": "",
    "title": "Administración de alimentos y bebidas",
    "subtitle": "Administración de alimentos y bebidas",
    "description": "Gestiona los menús de tus hoteles según disponibilidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "74_web_administration",
    "image": "",
    "title": "Sistema de gestión de mantenimiento y limpieza",
    "subtitle": "Sistema de gestión de mantenimiento y limpieza",
    "description": "Gestiona los servicios de mantenimiento y limpieza en tus diferentes ubicaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "74_desktop_administration",
    "image": "",
    "title": "Sistema de gestión de mantenimiento y limpieza",
    "subtitle": "Sistema de gestión de mantenimiento y limpieza",
    "description": "Gestiona los servicios de mantenimiento y limpieza en tus diferentes ubicaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "74_mobile_administration",
    "image": "",
    "title": "Sistema de gestión de mantenimiento y limpieza",
    "subtitle": "Sistema de gestión de mantenimiento y limpieza",
    "description": "Gestiona los servicios de mantenimiento y limpieza en tus diferentes ubicaciones",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "75_web_customer_service",
    "image": "",
    "title": "Plataforma de administración de relaciones con los clientes",
    "subtitle": "Plataforma de administración de relaciones con los clientes",
    "description": "Agrega herramientas que te ayudarán a gestionar las relaciones con tus clientes para ofrecer atención de calidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "75_desktop_customer_service",
    "image": "",
    "title": "Plataforma de administración de relaciones con los clientes",
    "subtitle": "Plataforma de administración de relaciones con los clientes",
    "description": "Agrega herramientas que te ayudarán a gestionar las relaciones con tus clientes para ofrecer atención de calidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "customer_service"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "76_web_histories",
    "image": "",
    "title": "Historial de reservas",
    "subtitle": "Historial de reservas",
    "description": "Obtén un histórico de reservas que te ayudará a medir el desempeño y atender cualquier aclaración con respecto a las reservaciones en tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "76_desktop_histories",
    "image": "",
    "title": "Historial de reservas",
    "subtitle": "Historial de reservas",
    "description": "Obtén un histórico de reservas que te ayudará a medir el desempeño y atender cualquier aclaración con respecto a las reservaciones en tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "76_mobile_histories",
    "image": "",
    "title": "Historial de reservas",
    "subtitle": "Historial de reservas",
    "description": "Obtén un histórico de reservas que te ayudará a medir el desempeño y atender cualquier aclaración con respecto a las reservaciones en tus hoteles",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "histories"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "77_web_reservations_agendas_appointments",
    "image": "",
    "title": "Reservas en otros Hoteles que no sean de la empresa",
    "subtitle": "Reservas en otros Hoteles que no sean de la empresa",
    "description": "Incorpora hoteles externos para incrementar tu capacidad de atención al cliente ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "77_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Reservas en otros Hoteles que no sean de la empresa",
    "subtitle": "Reservas en otros Hoteles que no sean de la empresa",
    "description": "Incorpora hoteles externos para incrementar tu capacidad de atención al cliente ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "77_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Reservas en otros Hoteles que no sean de la empresa",
    "subtitle": "Reservas en otros Hoteles que no sean de la empresa",
    "description": "Incorpora hoteles externos para incrementar tu capacidad de atención al cliente ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Hotelería"
    ]
  },
  {
    "id": "78_web_erp",
    "image": "",
    "title": "ERP",
    "subtitle": "ERP",
    "description": "Integra a tu solución la posibilidad de gestionar las actividades empresariales diarias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "erp"
    ],
    "industries": [
      "Hotelería",
      "Salud y Cuidado"
    ]
  },
  {
    "id": "78_desktop_erp",
    "image": "",
    "title": "ERP",
    "subtitle": "ERP",
    "description": "Integra a tu solución la posibilidad de gestionar las actividades empresariales diarias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "erp"
    ],
    "industries": [
      "Hotelería",
      "Salud y Cuidado"
    ]
  },
  {
    "id": "79_web_catalogs",
    "image": "",
    "title": "Catálogo de Hospitales, Doctores y Servicios",
    "subtitle": "Catálogo de Hospitales, Doctores y Servicios",
    "description": "Muestra los hospitales, expertos en medicina y servicios disponibles en un solo lugar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "79_desktop_catalogs",
    "image": "",
    "title": "Catálogo de Hospitales, Doctores y Servicios",
    "subtitle": "Catálogo de Hospitales, Doctores y Servicios",
    "description": "Muestra los hospitales, expertos en medicina y servicios disponibles en un solo lugar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "79_mobile_catalogs",
    "image": "",
    "title": "Catálogo de Hospitales, Doctores y Servicios",
    "subtitle": "Catálogo de Hospitales, Doctores y Servicios",
    "description": "Muestra los hospitales, expertos en medicina y servicios disponibles en un solo lugar",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "80_web_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de Agenda de citas",
    "subtitle": "Sistema de Agenda de citas",
    "description": "Mantén un registro organizado y coordinado de las citas programadas por tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Salud y Cuidado",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "80_desktop_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de Agenda de citas",
    "subtitle": "Sistema de Agenda de citas",
    "description": "Mantén un registro organizado y coordinado de las citas programadas por tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Salud y Cuidado",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "80_mobile_reservations_agendas_appointments",
    "image": "",
    "title": "Sistema de Agenda de citas",
    "subtitle": "Sistema de Agenda de citas",
    "description": "Mantén un registro organizado y coordinado de las citas programadas por tus agentes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "reservations_agendas_appointments"
    ],
    "industries": [
      "Salud y Cuidado",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "81_web_metrics_statistics",
    "image": "",
    "title": "Solución de seguimiento de la salud del paciente y recordatorios",
    "subtitle": "Solución de seguimiento de la salud del paciente y recordatorios",
    "description": "Mide y califica la salud de tus clientes, e implementa recordatorios para mantener su progreso",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "81_desktop_metrics_statistics",
    "image": "",
    "title": "Solución de seguimiento de la salud del paciente y recordatorios",
    "subtitle": "Solución de seguimiento de la salud del paciente y recordatorios",
    "description": "Mide y califica la salud de tus clientes, e implementa recordatorios para mantener su progreso",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "81_mobile_metrics_statistics",
    "image": "",
    "title": "Solución de seguimiento de la salud del paciente y recordatorios",
    "subtitle": "Solución de seguimiento de la salud del paciente y recordatorios",
    "description": "Mide y califica la salud de tus clientes, e implementa recordatorios para mantener su progreso",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "82_web_documentation",
    "image": "",
    "title": "Sistema de Carga y Descarga de Documentación",
    "subtitle": "Sistema de Carga y Descarga de Documentación",
    "description": "Cuenta con un soporte documental en la nube para tener a la mano archivos y expedientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "documentation"
    ],
    "industries": [
      "Salud y Cuidado",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "82_desktop_documentation",
    "image": "",
    "title": "Sistema de Carga y Descarga de Documentación",
    "subtitle": "Sistema de Carga y Descarga de Documentación",
    "description": "Cuenta con un soporte documental en la nube para tener a la mano archivos y expedientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "documentation"
    ],
    "industries": [
      "Salud y Cuidado",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "82_mobile_documentation",
    "image": "",
    "title": "Sistema de Carga y Descarga de Documentación",
    "subtitle": "Sistema de Carga y Descarga de Documentación",
    "description": "Cuenta con un soporte documental en la nube para tener a la mano archivos y expedientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "documentation"
    ],
    "industries": [
      "Salud y Cuidado",
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "83_web_administration",
    "image": "",
    "title": "Módulo de gestión de historias clínicas y expedientes médicos",
    "subtitle": "Módulo de gestión de historias clínicas y expedientes médicos",
    "description": "Gestiona la información clínica de tus clientes para mantener un registro oportuno y al día",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "83_desktop_administration",
    "image": "",
    "title": "Módulo de gestión de historias clínicas y expedientes médicos",
    "subtitle": "Módulo de gestión de historias clínicas y expedientes médicos",
    "description": "Gestiona la información clínica de tus clientes para mantener un registro oportuno y al día",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "84_web_users",
    "image": "",
    "title": "Sistema de perfil de paciente",
    "subtitle": "Sistema de perfil de paciente",
    "description": "Asegura que cuentas con toda la información del paciente para simplificar procesos de captura y atención",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "84_desktop_users",
    "image": "",
    "title": "Sistema de perfil de paciente",
    "subtitle": "Sistema de perfil de paciente",
    "description": "Asegura que cuentas con toda la información del paciente para simplificar procesos de captura y atención",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "84_mobile_users",
    "image": "",
    "title": "Sistema de perfil de paciente",
    "subtitle": "Sistema de perfil de paciente",
    "description": "Asegura que cuentas con toda la información del paciente para simplificar procesos de captura y atención",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "users"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "85_web_catalogs",
    "image": "",
    "title": "Catálogo de medicamentos y productos de farmacia",
    "subtitle": "Catálogo de medicamentos y productos de farmacia",
    "description": "Agrega la compra de productos farmacéuticos en caso de que también seas un proveedor",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "85_desktop_catalogs",
    "image": "",
    "title": "Catálogo de medicamentos y productos de farmacia",
    "subtitle": "Catálogo de medicamentos y productos de farmacia",
    "description": "Agrega la compra de productos farmacéuticos en caso de que también seas un proveedor",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "85_mobile_catalogs",
    "image": "",
    "title": "Catálogo de medicamentos y productos de farmacia",
    "subtitle": "Catálogo de medicamentos y productos de farmacia",
    "description": "Agrega la compra de productos farmacéuticos en caso de que también seas un proveedor",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "86_web_videoconferencing_multimedia",
    "image": "",
    "title": "Sistema de videoconferencia",
    "subtitle": "Sistema de videoconferencia",
    "description": "Implementa sistemas de comunicación por audio y video para conectar a pacientes y médicos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "86_desktop_videoconferencing_multimedia",
    "image": "",
    "title": "Sistema de videoconferencia",
    "subtitle": "Sistema de videoconferencia",
    "description": "Implementa sistemas de comunicación por audio y video para conectar a pacientes y médicos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "86_mobile_videoconferencing_multimedia",
    "image": "",
    "title": "Sistema de videoconferencia",
    "subtitle": "Sistema de videoconferencia",
    "description": "Implementa sistemas de comunicación por audio y video para conectar a pacientes y médicos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "87_web_catalogs",
    "image": "",
    "title": "Gestión de colaboradores de hospitales o clínicas",
    "subtitle": "Gestión de colaboradores de hospitales o clínicas",
    "description": "Integra a colaboradores estratégicos en hospitales y clínicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "87_desktop_catalogs",
    "image": "",
    "title": "Gestión de colaboradores de hospitales o clínicas",
    "subtitle": "Gestión de colaboradores de hospitales o clínicas",
    "description": "Integra a colaboradores estratégicos en hospitales y clínicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "88_web_integrations",
    "image": "",
    "title": "Sistema interconectado con alguna Farmacia o Proveedor de productos",
    "subtitle": "Sistema interconectado con alguna Farmacia o Proveedor de productos",
    "description": "Integra la compra de productos farmacéuticos con un proveedor confiable",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "integrations"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "88_desktop_integrations",
    "image": "",
    "title": "Sistema interconectado con alguna Farmacia o Proveedor de productos",
    "subtitle": "Sistema interconectado con alguna Farmacia o Proveedor de productos",
    "description": "Integra la compra de productos farmacéuticos con un proveedor confiable",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "integrations"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "88_mobile_integrations",
    "image": "",
    "title": "Sistema interconectado con alguna Farmacia o Proveedor de productos",
    "subtitle": "Sistema interconectado con alguna Farmacia o Proveedor de productos",
    "description": "Integra la compra de productos farmacéuticos con un proveedor confiable",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "integrations"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "89_web_integrations",
    "image": "",
    "title": "Sistema de integración de dispositivos médicos y tecnologías de salud",
    "subtitle": "Sistema de integración de dispositivos médicos y tecnologías de salud",
    "description": "Conecta tus dispositivos inteligentes para obtener mediciones e integrarlas al seguimiento del paciente ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "integrations"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "89_desktop_integrations",
    "image": "",
    "title": "Sistema de integración de dispositivos médicos y tecnologías de salud",
    "subtitle": "Sistema de integración de dispositivos médicos y tecnologías de salud",
    "description": "Conecta tus dispositivos inteligentes para obtener mediciones e integrarlas al seguimiento del paciente ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "integrations"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "89_mobile_integrations",
    "image": "",
    "title": "Sistema de integración de dispositivos médicos y tecnologías de salud",
    "subtitle": "Sistema de integración de dispositivos médicos y tecnologías de salud",
    "description": "Conecta tus dispositivos inteligentes para obtener mediciones e integrarlas al seguimiento del paciente ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "integrations"
    ],
    "industries": [
      "Salud y Cuidado"
    ]
  },
  {
    "id": "90_web_catalogs",
    "image": "",
    "title": "Gestión de Catálogo de productos",
    "subtitle": "Gestión de Catálogo de productos",
    "description": "Configura y gestiona los productos y servicios en tu catálogo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "90_desktop_catalogs",
    "image": "",
    "title": "Gestión de Catálogo de productos",
    "subtitle": "Gestión de Catálogo de productos",
    "description": "Configura y gestiona los productos y servicios en tu catálogo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "90_mobile_catalogs",
    "image": "",
    "title": "Gestión de Catálogo de productos",
    "subtitle": "Gestión de Catálogo de productos",
    "description": "Configura y gestiona los productos y servicios en tu catálogo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "91_web_kyc",
    "image": "",
    "title": "Sistema de Subida de Requisitos: Documentación e información",
    "subtitle": "Sistema de Subida de Requisitos: Documentación e información",
    "description": "Automatiza el proceso de KYC y asegura que los candidatos e inversores cumplen con la debida diligencia",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "kyc"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "91_desktop_kyc",
    "image": "",
    "title": "Sistema de Subida de Requisitos: Documentación e información",
    "subtitle": "Sistema de Subida de Requisitos: Documentación e información",
    "description": "Automatiza el proceso de KYC y asegura que los candidatos e inversores cumplen con la debida diligencia",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "kyc"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "91_mobile_kyc",
    "image": "",
    "title": "Sistema de Subida de Requisitos: Documentación e información",
    "subtitle": "Sistema de Subida de Requisitos: Documentación e información",
    "description": "Automatiza el proceso de KYC y asegura que los candidatos e inversores cumplen con la debida diligencia",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "kyc"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "92_web_catalogs",
    "image": "",
    "title": "Estatus de proyectos autorizados",
    "subtitle": "Estatus de proyectos autorizados",
    "description": "Da un seguimiento oportuno a los proyectos autorizados por medio eun flujo controlado de estados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "92_desktop_catalogs",
    "image": "",
    "title": "Estatus de proyectos autorizados",
    "subtitle": "Estatus de proyectos autorizados",
    "description": "Da un seguimiento oportuno a los proyectos autorizados por medio eun flujo controlado de estados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "92_mobile_catalogs",
    "image": "",
    "title": "Estatus de proyectos autorizados",
    "subtitle": "Estatus de proyectos autorizados",
    "description": "Da un seguimiento oportuno a los proyectos autorizados por medio eun flujo controlado de estados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "93_web_wallet_and_payments",
    "image": "",
    "title": "Módulo de gestión de cuentas bancarias",
    "subtitle": "Módulo de gestión de cuentas bancarias",
    "description": "Registra y mantén seguras las cuentas bancarias empleadas en las transacciones financieras",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "93_desktop_wallet_and_payments",
    "image": "",
    "title": "Módulo de gestión de cuentas bancarias",
    "subtitle": "Módulo de gestión de cuentas bancarias",
    "description": "Registra y mantén seguras las cuentas bancarias empleadas en las transacciones financieras",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "93_mobile_wallet_and_payments",
    "image": "",
    "title": "Módulo de gestión de cuentas bancarias",
    "subtitle": "Módulo de gestión de cuentas bancarias",
    "description": "Registra y mantén seguras las cuentas bancarias empleadas en las transacciones financieras",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "94_web_catalogs",
    "image": "",
    "title": "Estatus de inversiones realizadas",
    "subtitle": "Estatus de inversiones realizadas",
    "description": "Permite a tus inversores conocer el estado de sus financiamientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "94_desktop_catalogs",
    "image": "",
    "title": "Estatus de inversiones realizadas",
    "subtitle": "Estatus de inversiones realizadas",
    "description": "Permite a tus inversores conocer el estado de sus financiamientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "94_mobile_catalogs",
    "image": "",
    "title": "Estatus de inversiones realizadas",
    "subtitle": "Estatus de inversiones realizadas",
    "description": "Permite a tus inversores conocer el estado de sus financiamientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "catalogs"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "95_web_metrics_statistics",
    "image": "",
    "title": "Sistema de análisis de riesgo",
    "subtitle": "Sistema de análisis de riesgo",
    "description": "Analiza y advierte oportunamente los riesgos en los proyectos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "95_desktop_metrics_statistics",
    "image": "",
    "title": "Sistema de análisis de riesgo",
    "subtitle": "Sistema de análisis de riesgo",
    "description": "Analiza y advierte oportunamente los riesgos en los proyectos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "metrics_statistics"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "96_web_accounting_finance",
    "image": "",
    "title": "Sistema de análisis de datos y generación de informes financieros",
    "subtitle": "Sistema de análisis de datos y generación de informes financieros",
    "description": "Monitorea el desempeño de tus finanzas y genera informes útiles para decisiones estratégicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "96_desktop_accounting_finance",
    "image": "",
    "title": "Sistema de análisis de datos y generación de informes financieros",
    "subtitle": "Sistema de análisis de datos y generación de informes financieros",
    "description": "Monitorea el desempeño de tus finanzas y genera informes útiles para decisiones estratégicas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "97_web_help_support",
    "image": "",
    "title": "Plataforma de educación financiera y asesoramiento",
    "subtitle": "Plataforma de educación financiera y asesoramiento",
    "description": "Capacita a tus usuarios en términos de educación financiera y proporciona asesoramiento ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "97_desktop_help_support",
    "image": "",
    "title": "Plataforma de educación financiera y asesoramiento",
    "subtitle": "Plataforma de educación financiera y asesoramiento",
    "description": "Capacita a tus usuarios en términos de educación financiera y proporciona asesoramiento ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "97_mobile_help_support",
    "image": "",
    "title": "Plataforma de educación financiera y asesoramiento",
    "subtitle": "Plataforma de educación financiera y asesoramiento",
    "description": "Capacita a tus usuarios en términos de educación financiera y proporciona asesoramiento ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "98_web_help_support",
    "image": "",
    "title": "Herramienta de gestión de ayuda",
    "subtitle": "Herramienta de gestión de ayuda",
    "description": "Incorpora una línea de ayuda y soporte a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "98_desktop_help_support",
    "image": "",
    "title": "Herramienta de gestión de ayuda",
    "subtitle": "Herramienta de gestión de ayuda",
    "description": "Incorpora una línea de ayuda y soporte a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "98_mobile_help_support",
    "image": "",
    "title": "Herramienta de gestión de ayuda",
    "subtitle": "Herramienta de gestión de ayuda",
    "description": "Incorpora una línea de ayuda y soporte a tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "99_web_administration",
    "image": "",
    "title": "Herramienta de presentación de proyectos",
    "subtitle": "Herramienta de presentación de proyectos",
    "description": "Integra un proceso guiado para captura y validación de proyectos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "99_desktop_administration",
    "image": "",
    "title": "Herramienta de presentación de proyectos",
    "subtitle": "Herramienta de presentación de proyectos",
    "description": "Integra un proceso guiado para captura y validación de proyectos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "99_mobile_administration",
    "image": "",
    "title": "Herramienta de presentación de proyectos",
    "subtitle": "Herramienta de presentación de proyectos",
    "description": "Integra un proceso guiado para captura y validación de proyectos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "100_web_administration",
    "image": "",
    "title": "Herramienta de seguimiento y gestión de campañas",
    "subtitle": "Herramienta de seguimiento y gestión de campañas",
    "description": "Agrega un puntual proceso de seguimiento para la obtención de recursos por medio de campañas hacia inversionistas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "100_desktop_administration",
    "image": "",
    "title": "Herramienta de seguimiento y gestión de campañas",
    "subtitle": "Herramienta de seguimiento y gestión de campañas",
    "description": "Agrega un puntual proceso de seguimiento para la obtención de recursos por medio de campañas hacia inversionistas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "100_mobile_administration",
    "image": "",
    "title": "Herramienta de seguimiento y gestión de campañas",
    "subtitle": "Herramienta de seguimiento y gestión de campañas",
    "description": "Agrega un puntual proceso de seguimiento para la obtención de recursos por medio de campañas hacia inversionistas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "101_web_wallet_and_payments",
    "image": "",
    "title": "Herramienta de procesamiento de transacciones seguras",
    "subtitle": "Herramienta de procesamiento de transacciones seguras",
    "description": "Agrega una capa de seguridad en el proceso de transacciones en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "101_desktop_wallet_and_payments",
    "image": "",
    "title": "Herramienta de procesamiento de transacciones seguras",
    "subtitle": "Herramienta de procesamiento de transacciones seguras",
    "description": "Agrega una capa de seguridad en el proceso de transacciones en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "101_mobile_wallet_and_payments",
    "image": "",
    "title": "Herramienta de procesamiento de transacciones seguras",
    "subtitle": "Herramienta de procesamiento de transacciones seguras",
    "description": "Agrega una capa de seguridad en el proceso de transacciones en la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "102_web_administration",
    "image": "",
    "title": "Panel de control de inversores y patrocinadores",
    "subtitle": "Panel de control de inversores y patrocinadores",
    "description": "Integra un módulo para inversores que permita gestionar sus participaciones en proyectos y sus financiamientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "102_desktop_administration",
    "image": "",
    "title": "Panel de control de inversores y patrocinadores",
    "subtitle": "Panel de control de inversores y patrocinadores",
    "description": "Integra un módulo para inversores que permita gestionar sus participaciones en proyectos y sus financiamientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "102_mobile_administration",
    "image": "",
    "title": "Panel de control de inversores y patrocinadores",
    "subtitle": "Panel de control de inversores y patrocinadores",
    "description": "Integra un módulo para inversores que permita gestionar sus participaciones en proyectos y sus financiamientos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "103_web_administration",
    "image": "",
    "title": "Módulo de evaluación de proyectos",
    "subtitle": "Módulo de evaluación de proyectos",
    "description": "Gestiona la validación de proyectos para asegurar que sean viables y con un nivel aceptable de riesgo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "103_desktop_administration",
    "image": "",
    "title": "Módulo de evaluación de proyectos",
    "subtitle": "Módulo de evaluación de proyectos",
    "description": "Gestiona la validación de proyectos para asegurar que sean viables y con un nivel aceptable de riesgo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "103_mobile_administration",
    "image": "",
    "title": "Módulo de evaluación de proyectos",
    "subtitle": "Módulo de evaluación de proyectos",
    "description": "Gestiona la validación de proyectos para asegurar que sean viables y con un nivel aceptable de riesgo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "104_web_help_support",
    "image": "",
    "title": "Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)",
    "subtitle": "Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)",
    "description": "Integra las bondades de la asesoría legal en procedimientos administrativos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding",
      "Fintech Créditos"
    ]
  },
  {
    "id": "104_desktop_help_support",
    "image": "",
    "title": "Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)",
    "subtitle": "Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)",
    "description": "Integra las bondades de la asesoría legal en procedimientos administrativos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding",
      "Fintech Créditos"
    ]
  },
  {
    "id": "104_mobile_help_support",
    "image": "",
    "title": "Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)",
    "subtitle": "Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)",
    "description": "Integra las bondades de la asesoría legal en procedimientos administrativos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Crowdfunding",
      "Fintech Créditos"
    ]
  },
  {
    "id": "105_web_security",
    "image": "",
    "title": "Servidores / Golden Copy",
    "subtitle": "Servidores / Golden Copy",
    "description": "Implementa una arquitectura segura que proteja la privacidad, integridad y disponibilidad de los datos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "security"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "105_desktop_security",
    "image": "",
    "title": "Servidores / Golden Copy",
    "subtitle": "Servidores / Golden Copy",
    "description": "Implementa una arquitectura segura que proteja la privacidad, integridad y disponibilidad de los datos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "security"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "105_mobile_security",
    "image": "",
    "title": "Servidores / Golden Copy",
    "subtitle": "Servidores / Golden Copy",
    "description": "Implementa una arquitectura segura que proteja la privacidad, integridad y disponibilidad de los datos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "security"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "106_web_wallet_and_payments",
    "image": "",
    "title": "Wallet",
    "subtitle": "Wallet",
    "description": "Incopora las bondades de una wallet para el fondeo y retiro de fondos entre los involucrados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "106_desktop_wallet_and_payments",
    "image": "",
    "title": "Wallet",
    "subtitle": "Wallet",
    "description": "Incopora las bondades de una wallet para el fondeo y retiro de fondos entre los involucrados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "106_mobile_wallet_and_payments",
    "image": "",
    "title": "Wallet",
    "subtitle": "Wallet",
    "description": "Incopora las bondades de una wallet para el fondeo y retiro de fondos entre los involucrados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "107_web_wallet_and_payments",
    "image": "",
    "title": "Pasarela de pago",
    "subtitle": "Pasarela de pago",
    "description": "Facilita las transacciones financieras entre los participantes ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "107_desktop_wallet_and_payments",
    "image": "",
    "title": "Pasarela de pago",
    "subtitle": "Pasarela de pago",
    "description": "Facilita las transacciones financieras entre los participantes ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "107_mobile_wallet_and_payments",
    "image": "",
    "title": "Pasarela de pago",
    "subtitle": "Pasarela de pago",
    "description": "Facilita las transacciones financieras entre los participantes ",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "wallet_and_payments"
    ],
    "industries": [
      "Fintech Crowdfunding"
    ]
  },
  {
    "id": "108_web_accounting_finance",
    "image": "",
    "title": "Administración de Ingresos y Egresos",
    "subtitle": "Administración de Ingresos y Egresos",
    "description": "Organiza tus entradas y salidas de recursos manteniendo tus finanzas y capacidad de deuda en buen estado",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "108_desktop_accounting_finance",
    "image": "",
    "title": "Administración de Ingresos y Egresos",
    "subtitle": "Administración de Ingresos y Egresos",
    "description": "Organiza tus entradas y salidas de recursos manteniendo tus finanzas y capacidad de deuda en buen estado",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "108_mobile_accounting_finance",
    "image": "",
    "title": "Administración de Ingresos y Egresos",
    "subtitle": "Administración de Ingresos y Egresos",
    "description": "Organiza tus entradas y salidas de recursos manteniendo tus finanzas y capacidad de deuda en buen estado",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "accounting_finance"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "109_web_credits",
    "image": "",
    "title": "Sistema de gestión de créditos",
    "subtitle": "Sistema de gestión de créditos",
    "description": "Gestiona y controla los créditos que tus clientes aperturen desde la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "109_desktop_credits",
    "image": "",
    "title": "Sistema de gestión de créditos",
    "subtitle": "Sistema de gestión de créditos",
    "description": "Gestiona y controla los créditos que tus clientes aperturen desde la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "109_mobile_credits",
    "image": "",
    "title": "Sistema de gestión de créditos",
    "subtitle": "Sistema de gestión de créditos",
    "description": "Gestiona y controla los créditos que tus clientes aperturen desde la plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "110_web_credits",
    "image": "",
    "title": "Sistema para solicitud de crédito: Requisitos, documentación e información",
    "subtitle": "Sistema para solicitud de crédito: Requisitos, documentación e información",
    "description": "Ejecuta un proceso guiado para completar los requisitos de una solicitud de crédito por parte de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "110_desktop_credits",
    "image": "",
    "title": "Sistema para solicitud de crédito: Requisitos, documentación e información",
    "subtitle": "Sistema para solicitud de crédito: Requisitos, documentación e información",
    "description": "Ejecuta un proceso guiado para completar los requisitos de una solicitud de crédito por parte de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "110_mobile_credits",
    "image": "",
    "title": "Sistema para solicitud de crédito: Requisitos, documentación e información",
    "subtitle": "Sistema para solicitud de crédito: Requisitos, documentación e información",
    "description": "Ejecuta un proceso guiado para completar los requisitos de una solicitud de crédito por parte de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "111_web_kyc",
    "image": "",
    "title": "Expediente de Cliente",
    "subtitle": "Expediente de Cliente",
    "description": "Consulta y mantén al día los expedientes de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "kyc"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "111_desktop_kyc",
    "image": "",
    "title": "Expediente de Cliente",
    "subtitle": "Expediente de Cliente",
    "description": "Consulta y mantén al día los expedientes de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "kyc"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "111_mobile_kyc",
    "image": "",
    "title": "Expediente de Cliente",
    "subtitle": "Expediente de Cliente",
    "description": "Consulta y mantén al día los expedientes de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "kyc"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "112_web_credits",
    "image": "",
    "title": "Estado de cuenta",
    "subtitle": "Estado de cuenta",
    "description": "Mantén informados a tus clientes y a tu empresa al habilitar la consulta de estados de cuenta de los créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "112_desktop_credits",
    "image": "",
    "title": "Estado de cuenta",
    "subtitle": "Estado de cuenta",
    "description": "Mantén informados a tus clientes y a tu empresa al habilitar la consulta de estados de cuenta de los créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "112_mobile_credits",
    "image": "",
    "title": "Estado de cuenta",
    "subtitle": "Estado de cuenta",
    "description": "Mantén informados a tus clientes y a tu empresa al habilitar la consulta de estados de cuenta de los créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "113_web_credits",
    "image": "",
    "title": "Tabla de amortización (Flujo de Pagos)",
    "subtitle": "Tabla de amortización (Flujo de Pagos)",
    "description": "Obtén las tablas de amortización de los créditos y controla los pagos que requieres de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "113_desktop_credits",
    "image": "",
    "title": "Tabla de amortización (Flujo de Pagos)",
    "subtitle": "Tabla de amortización (Flujo de Pagos)",
    "description": "Obtén las tablas de amortización de los créditos y controla los pagos que requieres de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "113_mobile_credits",
    "image": "",
    "title": "Tabla de amortización (Flujo de Pagos)",
    "subtitle": "Tabla de amortización (Flujo de Pagos)",
    "description": "Obtén las tablas de amortización de los créditos y controla los pagos que requieres de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "114_web_help_support",
    "image": "",
    "title": "Plataforma de atención al cliente y soporte técnico",
    "subtitle": "Plataforma de atención al cliente y soporte técnico",
    "description": "Incorpora diferentes canales de atención al cliente y soporte en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "114_desktop_help_support",
    "image": "",
    "title": "Plataforma de atención al cliente y soporte técnico",
    "subtitle": "Plataforma de atención al cliente y soporte técnico",
    "description": "Incorpora diferentes canales de atención al cliente y soporte en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "114_mobile_help_support",
    "image": "",
    "title": "Plataforma de atención al cliente y soporte técnico",
    "subtitle": "Plataforma de atención al cliente y soporte técnico",
    "description": "Incorpora diferentes canales de atención al cliente y soporte en tu plataforma",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "help_support"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "115_web_credits",
    "image": "",
    "title": "Herramienta de gestión de cobros y recuperación de deudas",
    "subtitle": "Herramienta de gestión de cobros y recuperación de deudas",
    "description": "Mantén bajo control el cobro y recuperación de deudas de tus créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "115_desktop_credits",
    "image": "",
    "title": "Herramienta de gestión de cobros y recuperación de deudas",
    "subtitle": "Herramienta de gestión de cobros y recuperación de deudas",
    "description": "Mantén bajo control el cobro y recuperación de deudas de tus créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "115_mobile_credits",
    "image": "",
    "title": "Herramienta de gestión de cobros y recuperación de deudas",
    "subtitle": "Herramienta de gestión de cobros y recuperación de deudas",
    "description": "Mantén bajo control el cobro y recuperación de deudas de tus créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "116_web_credits",
    "image": "",
    "title": "Sistema de Cálculo financiero para abonos a capital y liquidación",
    "subtitle": "Sistema de Cálculo financiero para abonos a capital y liquidación",
    "description": "Realiza fácilmente cálculos financieros tomando en cuenta abonos a capital y liquidación de créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "116_desktop_credits",
    "image": "",
    "title": "Sistema de Cálculo financiero para abonos a capital y liquidación",
    "subtitle": "Sistema de Cálculo financiero para abonos a capital y liquidación",
    "description": "Realiza fácilmente cálculos financieros tomando en cuenta abonos a capital y liquidación de créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "116_mobile_credits",
    "image": "",
    "title": "Sistema de Cálculo financiero para abonos a capital y liquidación",
    "subtitle": "Sistema de Cálculo financiero para abonos a capital y liquidación",
    "description": "Realiza fácilmente cálculos financieros tomando en cuenta abonos a capital y liquidación de créditos",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "117_web_credits",
    "image": "",
    "title": "Estatus de trámites",
    "subtitle": "Estatus de trámites",
    "description": "Consulta y da seguimiento al estado de los trámites realizados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "117_desktop_credits",
    "image": "",
    "title": "Estatus de trámites",
    "subtitle": "Estatus de trámites",
    "description": "Consulta y da seguimiento al estado de los trámites realizados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "117_mobile_credits",
    "image": "",
    "title": "Estatus de trámites",
    "subtitle": "Estatus de trámites",
    "description": "Consulta y da seguimiento al estado de los trámites realizados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "118_web_credits",
    "image": "",
    "title": "Estatus de créditos efectuados",
    "subtitle": "Estatus de créditos efectuados",
    "description": "Consulta y da seguimiento al estado de los créditos efectuados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "118_desktop_credits",
    "image": "",
    "title": "Estatus de créditos efectuados",
    "subtitle": "Estatus de créditos efectuados",
    "description": "Consulta y da seguimiento al estado de los créditos efectuados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "118_mobile_credits",
    "image": "",
    "title": "Estatus de créditos efectuados",
    "subtitle": "Estatus de créditos efectuados",
    "description": "Consulta y da seguimiento al estado de los créditos efectuados",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "119_web_credits",
    "image": "",
    "title": "Generar un semáforo de salud financiera para otras instituciones crediticias",
    "subtitle": "Generar un semáforo de salud financiera para otras instituciones crediticias",
    "description": "Coloca en tu plataforma un semáforo que te permita validar la salud financiera de tus clientes en otras instituciones crediticias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "119_desktop_credits",
    "image": "",
    "title": "Generar un semáforo de salud financiera para otras instituciones crediticias",
    "subtitle": "Generar un semáforo de salud financiera para otras instituciones crediticias",
    "description": "Coloca en tu plataforma un semáforo que te permita validar la salud financiera de tus clientes en otras instituciones crediticias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "119_mobile_credits",
    "image": "",
    "title": "Generar un semáforo de salud financiera para otras instituciones crediticias",
    "subtitle": "Generar un semáforo de salud financiera para otras instituciones crediticias",
    "description": "Coloca en tu plataforma un semáforo que te permita validar la salud financiera de tus clientes en otras instituciones crediticias",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "credits"
    ],
    "industries": [
      "Fintech Créditos"
    ]
  },
  {
    "id": "120_web_purchasing_process",
    "image": "",
    "title": "E-Commerce para productos y servicios",
    "subtitle": "E-Commerce para productos y servicios",
    "description": "Muestra tu catálogo de productos y servicios y detona el proceso de compra de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "purchasing_process"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "120_desktop_purchasing_process",
    "image": "",
    "title": "E-Commerce para productos y servicios",
    "subtitle": "E-Commerce para productos y servicios",
    "description": "Muestra tu catálogo de productos y servicios y detona el proceso de compra de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "purchasing_process"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "120_mobile_purchasing_process",
    "image": "",
    "title": "E-Commerce para productos y servicios",
    "subtitle": "E-Commerce para productos y servicios",
    "description": "Muestra tu catálogo de productos y servicios y detona el proceso de compra de tus clientes",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "purchasing_process"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "121_web_communication",
    "image": "",
    "title": "Sistema de gestión de contenidos y publicaciones multimedia",
    "subtitle": "Sistema de gestión de contenidos y publicaciones multimedia",
    "description": "Mantén al día tus canales de comunicación al compartir contenido multimedia con un solo clic",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "121_desktop_communication",
    "image": "",
    "title": "Sistema de gestión de contenidos y publicaciones multimedia",
    "subtitle": "Sistema de gestión de contenidos y publicaciones multimedia",
    "description": "Mantén al día tus canales de comunicación al compartir contenido multimedia con un solo clic",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "121_mobile_communication",
    "image": "",
    "title": "Sistema de gestión de contenidos y publicaciones multimedia",
    "subtitle": "Sistema de gestión de contenidos y publicaciones multimedia",
    "description": "Mantén al día tus canales de comunicación al compartir contenido multimedia con un solo clic",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "122_web_videoconferencing_multimedia",
    "image": "",
    "title": "Visor de videos",
    "subtitle": "Visor de videos",
    "description": "Incorpora un reproductor de videos amigable para mostrar contenido a tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "122_desktop_videoconferencing_multimedia",
    "image": "",
    "title": "Visor de videos",
    "subtitle": "Visor de videos",
    "description": "Incorpora un reproductor de videos amigable para mostrar contenido a tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "122_mobile_videoconferencing_multimedia",
    "image": "",
    "title": "Visor de videos",
    "subtitle": "Visor de videos",
    "description": "Incorpora un reproductor de videos amigable para mostrar contenido a tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "123_web_videoconferencing_multimedia",
    "image": "",
    "title": "Herramienta de programación y transmisión en vivo",
    "subtitle": "Herramienta de programación y transmisión en vivo",
    "description": "Gestiona tu propio canal de videos y transmite programas en vivo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "123_desktop_videoconferencing_multimedia",
    "image": "",
    "title": "Herramienta de programación y transmisión en vivo",
    "subtitle": "Herramienta de programación y transmisión en vivo",
    "description": "Gestiona tu propio canal de videos y transmite programas en vivo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "123_mobile_videoconferencing_multimedia",
    "image": "",
    "title": "Herramienta de programación y transmisión en vivo",
    "subtitle": "Herramienta de programación y transmisión en vivo",
    "description": "Gestiona tu propio canal de videos y transmite programas en vivo",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "videoconferencing_multimedia"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "124_web_administration",
    "image": "",
    "title": "Plataforma de gestión de suscripciones y membresías",
    "subtitle": "Plataforma de gestión de suscripciones y membresías",
    "description": "Gestiona la relación con tus usuarios por medio de suscripciones y membresías, mostrando sus características disponibles así como promociones incluidas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "124_desktop_administration",
    "image": "",
    "title": "Plataforma de gestión de suscripciones y membresías",
    "subtitle": "Plataforma de gestión de suscripciones y membresías",
    "description": "Gestiona la relación con tus usuarios por medio de suscripciones y membresías, mostrando sus características disponibles así como promociones incluidas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "124_mobile_administration",
    "image": "",
    "title": "Plataforma de gestión de suscripciones y membresías",
    "subtitle": "Plataforma de gestión de suscripciones y membresías",
    "description": "Gestiona la relación con tus usuarios por medio de suscripciones y membresías, mostrando sus características disponibles así como promociones incluidas",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "125_web_communication",
    "image": "",
    "title": "Panel de control para creadores de contenido y productores",
    "subtitle": "Panel de control para creadores de contenido y productores",
    "description": "Supervisa y gestiona la disponibilidad y uso de tu contenido",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "125_desktop_communication",
    "image": "",
    "title": "Panel de control para creadores de contenido y productores",
    "subtitle": "Panel de control para creadores de contenido y productores",
    "description": "Supervisa y gestiona la disponibilidad y uso de tu contenido",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "125_mobile_communication",
    "image": "",
    "title": "Panel de control para creadores de contenido y productores",
    "subtitle": "Panel de control para creadores de contenido y productores",
    "description": "Supervisa y gestiona la disponibilidad y uso de tu contenido",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "126_web_communication",
    "image": "",
    "title": "Módulo de análisis de audiencia y datos de usuarios",
    "subtitle": "Módulo de análisis de audiencia y datos de usuarios",
    "description": "Obtén métricas y estadísticas de usuarios y audiencia para tomar decisiones estratégicas en tu negocio",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "126_desktop_communication",
    "image": "",
    "title": "Módulo de análisis de audiencia y datos de usuarios",
    "subtitle": "Módulo de análisis de audiencia y datos de usuarios",
    "description": "Obtén métricas y estadísticas de usuarios y audiencia para tomar decisiones estratégicas en tu negocio",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "126_mobile_communication",
    "image": "",
    "title": "Módulo de análisis de audiencia y datos de usuarios",
    "subtitle": "Módulo de análisis de audiencia y datos de usuarios",
    "description": "Obtén métricas y estadísticas de usuarios y audiencia para tomar decisiones estratégicas en tu negocio",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "127_web_administration",
    "image": "",
    "title": "Solución de control de derechos de autor y licencias de contenido",
    "subtitle": "Solución de control de derechos de autor y licencias de contenido",
    "description": "Controla los derechos de tu contenido y asegura que no sea reproducido por alguien más",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "127_desktop_administration",
    "image": "",
    "title": "Solución de control de derechos de autor y licencias de contenido",
    "subtitle": "Solución de control de derechos de autor y licencias de contenido",
    "description": "Controla los derechos de tu contenido y asegura que no sea reproducido por alguien más",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "127_mobile_administration",
    "image": "",
    "title": "Solución de control de derechos de autor y licencias de contenido",
    "subtitle": "Solución de control de derechos de autor y licencias de contenido",
    "description": "Controla los derechos de tu contenido y asegura que no sea reproducido por alguien más",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "128_web_communication",
    "image": "",
    "title": "Herramienta de interacción y compromiso con la audiencia",
    "subtitle": "Herramienta de interacción y compromiso con la audiencia",
    "description": "Agrega el potencial de interactuar con tu audiencia y genera lealtad de tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "128_desktop_communication",
    "image": "",
    "title": "Herramienta de interacción y compromiso con la audiencia",
    "subtitle": "Herramienta de interacción y compromiso con la audiencia",
    "description": "Agrega el potencial de interactuar con tu audiencia y genera lealtad de tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "128_mobile_communication",
    "image": "",
    "title": "Herramienta de interacción y compromiso con la audiencia",
    "subtitle": "Herramienta de interacción y compromiso con la audiencia",
    "description": "Agrega el potencial de interactuar con tu audiencia y genera lealtad de tus usuarios",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "129_web_administration",
    "image": "",
    "title": "Plataforma de gestión de eventos y boletos de entretenimiento",
    "subtitle": "Plataforma de gestión de eventos y boletos de entretenimiento",
    "description": "Programa eventos y gestiona la venta de boletos según disponibilidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "129_desktop_administration",
    "image": "",
    "title": "Plataforma de gestión de eventos y boletos de entretenimiento",
    "subtitle": "Plataforma de gestión de eventos y boletos de entretenimiento",
    "description": "Programa eventos y gestiona la venta de boletos según disponibilidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "129_mobile_administration",
    "image": "",
    "title": "Plataforma de gestión de eventos y boletos de entretenimiento",
    "subtitle": "Plataforma de gestión de eventos y boletos de entretenimiento",
    "description": "Programa eventos y gestiona la venta de boletos según disponibilidad",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "administration"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "130_web_communication",
    "image": "",
    "title": "Sistemas de alguna Red social no configurada",
    "subtitle": "Sistemas de alguna Red social no configurada",
    "description": "Agrega una red social a tu plataforma e intégrala a nuestro motor de gestión y publicación de contenido",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "web",
        "icon": <MdWeb />,
        "title": "Aplicación web",
        "short": "App web",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "130_desktop_communication",
    "image": "",
    "title": "Sistemas de alguna Red social no configurada",
    "subtitle": "Sistemas de alguna Red social no configurada",
    "description": "Agrega una red social a tu plataforma e intégrala a nuestro motor de gestión y publicación de contenido",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "desktop",
        "icon": <BiDesktop />,
        "title": "Aplicación desktop",
        "short": "App desktop",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  },
  {
    "id": "130_mobile_communication",
    "image": "",
    "title": "Sistemas de alguna Red social no configurada",
    "subtitle": "Sistemas de alguna Red social no configurada",
    "description": "Agrega una red social a tu plataforma e intégrala a nuestro motor de gestión y publicación de contenido",
    "price": 10000,
    "timeStr": "Lista en: 12 días",
    "days": 12,
    "solutions": [
      {
        "id": "mobile",
        "icon": <FaMobileAlt />,
        "title": "Aplicación móvil",
        "short": "App móvil",
        "subtitle": ""
      }
    ],
    "sections": [
      "communication"
    ],
    "industries": [
      "Comunicación y Entretenimiento"
    ]
  }
];
