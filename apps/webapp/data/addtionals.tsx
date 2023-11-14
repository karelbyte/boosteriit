export interface IAdditional {
  id: string;
  solution: string;
  industry: string;
  title: string;
  description: string;
  days: number;
  price: number;
}

const restaurant: IAdditional[] = [
  // additionals web restaurant
  {
    id: 'additional_web_restaurant_users',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Administración de Usuarios',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_rols',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Administración de Roles',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_people',
    solution: 'web',
    industry: 'restaurant',
    title: 'Gestion de Personal',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_delivery',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Entregas a Domicilio',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_inventory',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Control de Inventarios',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_providers',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Control de Proveedores',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_virtual_map',
    solution: 'web',
    industry: 'restaurant',
    title: 'Mapa virtual de mesas en establecimiento',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_cuisine',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Calificación de Servicio y Cocina',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_dish',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo Recomendación de Platillos',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_visit_history',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo Historial de Visitas',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_consumption',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo Historial de Consumo',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_web_restaurant_help',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Ayuda',
    description: '',
    days: 12,
    price: 20000
  },
  // additionals desktop restaurant
  {
    id: 'additional_desktop_restaurant_users',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Administración de Usuarios',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_rols',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Administración de Roles',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_people',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Gestion de Personal',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_delivery',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Entregas a Domicilio',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_inventory',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Control de Inventarios',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_providers',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Control de Proveedores',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_virtual_map',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Mapa virtual de mesas en establecimiento',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_cuisine',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Calificación de Servicio y Cocina',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_dish',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo Recomendación de Platillos',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_visit_history',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo Historial de Visitas',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_consumption',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo Historial de Consumo',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_desktop_restaurant_help',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Ayuda',
    description: '',
    days: 12,
    price: 20000
  },
  // additionals mobile restaurant
  {
    id: 'additional_mobile_restaurant_people',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Gestion de Personal',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_delivery',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo de Entregas a Domicilio',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_virtual_table',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Mapa virtual de mesas en establecimiento',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_cuisine',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo de Calificación de Servicio y Cocina',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_virtual_map',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Geolocalización con Google Map de Restaurantes y Sucursales',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_dish',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo Recomendación de Platillos',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_visit_history',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo Historial de Visitas',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_consumption',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo Historial de Consumo',
    description: '',
    days: 12,
    price: 20000
  },
  {
    id: 'additional_mobile_restaurant_help',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo de Ayuda',
    description: '',
    days: 12,
    price: 20000
  },
];

export const additionals: IAdditional[] = [...restaurant]
