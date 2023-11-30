export interface IAdditional {
  id: string;
  solution: string;
  industry: string;
  title: string;
  description: string;
  days: number;
  price: number;
}

// Ok
const restaurant: IAdditional[] = [
  // additionals web restaurant
  {
    id: 'additional_web_restaurant_users',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Administración de Usuarios',
    description: 'Gestiona y controla el acceso a tu plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_rols',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Administración de Roles',
    description: 'Gestiona o personaliza los roles asignados a los usuarios.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_people',
    solution: 'web',
    industry: 'restaurant',
    title: 'Gestion de Personal',
    description: 'Administra tu plantilla laboral en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_delivery',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Entregas a Domicilio',
    description: 'Gestiona y supervisa la entrega de pedidos a domicilio.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_inventory',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Control de Inventarios',
    description: 'Mantén bajo control tu inventario.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_providers',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Control de Proveedores',
    description: 'Gestiona y mantén al día tu relación con proveedores',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_virtual_map',
    solution: 'web',
    industry: 'restaurant',
    title: 'Mapa virtual de mesas en establecimiento',
    description: 'Visualiza la distribucion de mesas en tus establecimientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_cuisine',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Calificación de Servicio y Cocina',
    description: 'Evalúa y mejora el servicio en tus establecimientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_dish',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo Recomendación de Platillos',
    description:
      'Permite que tus usuarios califiquen los platillos del menú y recomiéndalos',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_visit_history',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo Historial de Visitas',
    description: 'Consulta estadísticas sobre las visitas',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_consumption',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo Historial de Consumo',
    description: 'Consulta estadísticas de consumo.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_help',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de Ayuda',
    description: 'Incorpora una línea de ayuda y soporte a tu plataforma',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_clarifications',
    solution: 'web',
    industry: 'restaurant',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_restaurant_geo',
    solution: 'web',
    industry: 'restaurant',
    title: 'Geolocalización con Google Map de Restaurantes y Sucursales',
    description:
      'Permite que tus usuarios localicen tus establecimientos con un clic.',
    days: 12,
    price: 20000,
  },
  // additionals desktop restaurant
  {
    id: 'additional_desktop_restaurant_users',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Administración de Usuarios',
    description: 'Gestiona y controla el acceso a tu plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_rols',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Administración de Roles',
    description: 'Gestiona o personaliza los roles asignados a los usuarios.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_people',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Gestion de Personal',
    description: 'Administra tu plantilla laboral en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_delivery',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Entregas a Domicilio',
    description: 'Gestiona y supervisa la entrega de pedidos a domicilio.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_inventory',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Control de Inventarios',
    description: 'Mantén bajo control tu inventario.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_providers',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Control de Proveedores',
    description: 'Gestiona y mantén al día tu relación con proveedores',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_virtual_map',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Mapa virtual de mesas en establecimiento',
    description: 'Visualiza la distribucion de mesas en tus establecimientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_cuisine',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Calificación de Servicio y Cocina',
    description: 'Evalúa y mejora el servicio en tus establecimientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_dish',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo Recomendación de Platillos',
    description:
      'Permite que tus usuarios califiquen los platillos del menú y recomiéndalos',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_visit_history',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo Historial de Visitas',
    description: 'Consulta estadísticas sobre las visitas',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_consumption',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo Historial de Consumo',
    description: 'Consulta estadísticas de consumo.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_help',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de Ayuda',
    description: 'Incorpora una línea de ayuda y soporte a tu plataforma',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_clarifications',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_restaurant_geo',
    solution: 'desktop',
    industry: 'restaurant',
    title: 'Geolocalización con Google Map de Restaurantes y Sucursales',
    description:
      'Permite que tus usuarios localicen tus establecimientos con un clic.',
    days: 12,
    price: 20000,
  },
  // additionals mobile restaurant
  {
    id: 'additional_mobile_restaurant_people',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Gestion de Personal',
    description: 'Administra tu plantilla laboral en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_delivery',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo de Entregas a Domicilio',
    description: 'Gestiona y supervisa la entrega de pedidos a domicilio.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_virtual_map',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Mapa virtual de mesas en establecimiento',
    description: 'Visualiza la distribucion de mesas en tus establecimientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_cuisine',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo de Calificación de Servicio y Cocina',
    description: 'Evalúa y mejora el servicio en tus establecimientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_dish',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo Recomendación de Platillos',
    description:
      'Permite que tus usuarios califiquen los platillos del menú y recomiéndalos',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_visit_history',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo Historial de Visitas',
    description: 'Consulta estadísticas sobre las visitas',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_consumption',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo Historial de Consumo',
    description: 'Consulta estadísticas de consumo.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_help',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo de Ayuda',
    description: 'Incorpora una línea de ayuda y soporte a tu plataforma',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_clarifications',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_restaurant_geo',
    solution: 'mobile',
    industry: 'restaurant',
    title: 'Geolocalización con Google Map de Restaurantes y Sucursales',
    description:
      'Permite que tus usuarios localicen tus establecimientos con un clic.',
    days: 12,
    price: 20000,
  },
];

// OK
const trips: IAdditional[] = [
  // additionals web trips
  {
    id: 'additional_web_trips_recommendation_commission',
    solution: 'web',
    industry: 'trips',
    title: 'Sistema de Recomendación y Comisión',
    description: 'Gestiona las recomendaciones y prémialas con una comisión.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_web_trips_shopping',
    solution: 'web',
    industry: 'trips',
    title: 'Historial de compras',
    description: 'Permite la consulta de compras realizadas por tus clientes.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_web_trips_travel_reviews',
    solution: 'web',
    industry: 'trips',
    title: 'Módulo de retroalimentación y reseñas de viajes',
    description:
      'Incorpora retroalimentaciones y reseñas por parte de tus clientes que promocionen tus productos y servicios.',
    days: 10,
    price: 44000,
  },
  {
    id: 'additional_web_trips_help_traveler',
    solution: 'web',
    industry: 'trips',
    title: 'Módulo de Ayuda al Viajero',
    description: 'Incorpora una línea de ayuda y soporte a tu plataforma.',
    days: 5,
    price: 22000,
  },
  {
    id: 'additional_web_trips_ground_transportation',
    solution: 'web',
    industry: 'trips',
    title: 'Módulo de gestión de transporte terrestre',
    description:
      'Agrega la posibilidad de contratar transportes terrestres dentro de tu plataforma.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_web_trips_activities_tours',
    solution: 'web',
    industry: 'trips',
    title: 'Sistema para integrar actividades o tours',
    description:
      'Integra experiencias y tours que tus clientes podrán disfrutar.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_web_trips_traveler_preferences',
    solution: 'web',
    industry: 'trips',
    title: 'Módulo de análisis de tendencias y preferencias de viajeros',
    description:
      'Agrega herramientas que te ayudarán a comprender tendencias de navegación y compra para mejorar tus servicios y promociones.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_web_trips_clarifications',
    solution: 'web',
    industry: 'trips',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 5,
    price: 22000,
  },
  // additionals mobile trips
  {
    id: 'additional_mobile_trips_recommendation_commission',
    solution: 'mobile',
    industry: 'trips',
    title: 'Sistema de Recomendación y Comisión',
    description: 'Gestiona las recomendaciones y prémialas con una comisión.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_mobile_trips_shopping',
    solution: 'mobile',
    industry: 'trips',
    title: 'Historial de compras',
    description: 'Permite la consulta de compras realizadas por tus clientes.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_mobile_trips_travel_reviews',
    solution: 'mobile',
    industry: 'trips',
    title: 'Módulo de retroalimentación y reseñas de viajes',
    description:
      'Incorpora retroalimentaciones y reseñas por parte de tus clientes que promocionen tus productos y servicios.',
    days: 10,
    price: 44000,
  },
  {
    id: 'additional_mobile_trips_help_traveler',
    solution: 'mobile',
    industry: 'trips',
    title: 'Módulo de Ayuda al Viajero',
    description: 'Incorpora una línea de ayuda y soporte a tu plataforma.',
    days: 5,
    price: 22000,
  },
  {
    id: 'additional_mobile_trips_ground_transportation',
    solution: 'mobile',
    industry: 'trips',
    title: 'Módulo de gestión de transporte terrestre',
    description:
      'Agrega la posibilidad de contratar transportes terrestres dentro de tu plataforma.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_mobile_trips_activities_tours',
    solution: 'mobile',
    industry: 'trips',
    title: 'Sistema para integrar actividades o tours',
    description:
      'Integra experiencias y tours que tus clientes podrán disfrutar.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_mobile_trips_traveler_preferences',
    solution: 'mobile',
    industry: 'trips',
    title: 'Módulo de análisis de tendencias y preferencias de viajeros',
    description:
      'Agrega herramientas que te ayudarán a comprender tendencias de navegación y compra para mejorar tus servicios y promociones.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_mobile_trips_clarifications',
    solution: 'mobile',
    industry: 'trips',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 5,
    price: 22000,
  },
  // additionals desktop trips
  {
    id: 'additional_desktop_trips_recommendation_commission',
    solution: 'desktop',
    industry: 'trips',
    title: 'Sistema de Recomendación y Comisión',
    description: 'Gestiona las recomendaciones y prémialas con una comisión.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_desktop_trips_shopping',
    solution: 'desktop',
    industry: 'trips',
    title: 'Historial de compras',
    description: 'Permite la consulta de compras realizadas por tus clientes.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_desktop_trips_travel_reviews',
    solution: 'desktop',
    industry: 'trips',
    title: 'Módulo de retroalimentación y reseñas de viajes',
    description:
      'Incorpora retroalimentaciones y reseñas por parte de tus clientes que promocionen tus productos y servicios.',
    days: 10,
    price: 44000,
  },
  {
    id: 'additional_desktop_trips_help_traveler',
    solution: 'desktop',
    industry: 'trips',
    title: 'Módulo de Ayuda al Viajero',
    description: 'Incorpora una línea de ayuda y soporte a tu plataforma.',
    days: 5,
    price: 22000,
  },
  {
    id: 'additional_desktop_trips_ground_transportation',
    solution: 'desktop',
    industry: 'trips',
    title: 'Módulo de gestión de transporte terrestre',
    description:
      'Agrega la posibilidad de contratar transportes terrestres dentro de tu plataforma.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_desktop_trips_activities_tours',
    solution: 'desktop',
    industry: 'trips',
    title: 'Sistema para integrar actividades o tours',
    description:
      'Integra experiencias y tours que tus clientes podrán disfrutar.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_desktop_trips_traveler_preferences',
    solution: 'desktop',
    industry: 'trips',
    title: 'Módulo de análisis de tendencias y preferencias de viajeros',
    description:
      'Agrega herramientas que te ayudarán a comprender tendencias de navegación y compra para mejorar tus servicios y promociones.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_desktop_trips_clarifications',
    solution: 'desktop',
    industry: 'trips',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 5,
    price: 22000,
  },
];

// OK
const realestate: IAdditional[] = [
  // additionals web realestate
  {
    id: 'additional_web_realestate_recommendation_commission',
    solution: 'web',
    industry: 'realestate',
    title: 'Sistema de Recomendación y Comisión',
    description: 'Gestiona las recomendaciones y prémialas con una comisión.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_web_realestate_collaborators',
    solution: 'web',
    industry: 'realestate',
    title: 'Tarjetas digitales para colaboradores',
    description:
      'Permite que tus colaboradores generen sus tarjetas digitales de presentación .',
    days: 14,
    price: 72000,
  },
  {
    id: 'additional_web_realestate_real_market',
    solution: 'web',
    industry: 'realestate',
    title: 'Herramienta de análisis de mercado inmobiliario',
    description:
      'Impulsa tu negocio con análisis del mercado inmobiliario, descubriendo tendencias que te ayudarán a tomar decisiones estratégicas.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_web_realestate_lease_sale_documentation',
    solution: 'web',
    industry: 'realestate',
    title:
      'Sistema de administración de contratos y documentación de arrendamiento y venta',
    description:
      'Administra y almacena los contratos y documentación necesaria para tus procesos operativos del día a día.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_web_realestate_properties_valuation',
    solution: 'web',
    industry: 'realestate',
    title: 'Solución de evaluación de propiedades y valoración',
    description:
      'Agrega procesos de evaluación y valoración de propiedades que te ayuden a organizar y agilizar tu operación.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_web_realestate_virtual_tours',
    solution: 'web',
    industry: 'realestate',
    title: 'Herramienta de tours virtuales',
    description:
      'Permite que tus usuarios conozcan y amen las propiedades por medio de tours virtuales.',
    days: 20,
    price: 98000,
  },
  {
    id: 'additional_web_realestate_property_repairs',
    solution: 'web',
    industry: 'realestate',
    title: 'Módulo de gestión de mantenimiento y reparaciones de propiedades',
    description:
      'Mantén en buen estado tus propiedades planeando el debido mantenimiento y reparación.',
    days: 12,
    price: 65000,
  },
  {
    id: 'additional_web_realestate_crm_visit',
    solution: 'web',
    industry: 'realestate',
    title: 'CRM - Reporte de visitas',
    description: 'Digitaliza los reportes de visitas por parte de tus agentes.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_web_realestate_crm_budgets',
    solution: 'web',
    industry: 'realestate',
    title: 'CRM - Presupuestos',
    description: 'Realiza presupuestos y compártelos con tus usuarios.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_web_realestate_commissions_earned',
    solution: 'web',
    industry: 'realestate',
    title: 'CRM - Comisiones ganadas',
    description:
      'Sumariza las comisiones ganadas por tus agentes y motívalos a dar su máximo.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_web_realestate_business_won',
    solution: 'web',
    industry: 'realestate',
    title: 'CRM - Negocios ganados',
    description:
      'Genera un reporte de los negocios logrados y dimensiona tus ganancias.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_web_realestate_clarifications',
    solution: 'web',
    industry: 'realestate',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 5,
    price: 25000,
  },
  // additionals desktop realestate
  {
    id: 'additional_desktop_realestate_recommendation_commission',
    solution: 'desktop',
    industry: 'realestate',
    title: 'Sistema de Recomendación y Comisión',
    description: 'Gestiona las recomendaciones y prémialas con una comisión.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_desktop_realestate_collaborators',
    solution: 'desktop',
    industry: 'realestate',
    title: 'Tarjetas digitales para colaboradores',
    description:
      'Permite que tus colaboradores generen sus tarjetas digitales de presentación .',
    days: 14,
    price: 72000,
  },
  {
    id: 'additional_desktop_realestate_real_market',
    solution: 'desktop',
    industry: 'realestate',
    title: 'Herramienta de análisis de mercado inmobiliario',
    description:
      'Impulsa tu negocio con análisis del mercado inmobiliario, descubriendo tendencias que te ayudarán a tomar decisiones estratégicas.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_desktop_realestate_lease_sale_documentation',
    solution: 'desktop',
    industry: 'realestate',
    title:
      'Sistema de administración de contratos y documentación de arrendamiento y venta',
    description:
      'Administra y almacena los contratos y documentación necesaria para tus procesos operativos del día a día.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_desktop_realestate_properties_valuation',
    solution: 'desktop',
    industry: 'realestate',
    title: 'Solución de evaluación de propiedades y valoración',
    description:
      'Agrega procesos de evaluación y valoración de propiedades que te ayuden a organizar y agilizar tu operación.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_desktop_realestate_virtual_tours',
    solution: 'desktop',
    industry: 'realestate',
    title: 'Herramienta de tours virtuales',
    description:
      'Permite que tus usuarios conozcan y amen las propiedades por medio de tours virtuales.',
    days: 20,
    price: 98000,
  },
  {
    id: 'additional_desktop_realestate_property_repairs',
    solution: 'desktop',
    industry: 'realestate',
    title: 'Módulo de gestión de mantenimiento y reparaciones de propiedades',
    description:
      'Mantén en buen estado tus propiedades planeando el debido mantenimiento y reparación.',
    days: 12,
    price: 65000,
  },
  {
    id: 'additional_desktop_realestate_crm_visit',
    solution: 'desktop',
    industry: 'realestate',
    title: 'CRM - Reporte de visitas',
    description: 'Digitaliza los reportes de visitas por parte de tus agentes.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_desktop_realestate_crm_budgets',
    solution: 'desktop',
    industry: 'realestate',
    title: 'CRM - Presupuestos',
    description: 'Realiza presupuestos y compártelos con tus usuarios.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_desktop_realestate_commissions_earned',
    solution: 'desktop',
    industry: 'realestate',
    title: 'CRM - Comisiones ganadas',
    description:
      'Sumariza las comisiones ganadas por tus agentes y motívalos a dar su máximo.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_desktop_realestate_business_won',
    solution: 'desktop',
    industry: 'realestate',
    title: 'CRM - Negocios ganados',
    description:
      'Genera un reporte de los negocios logrados y dimensiona tus ganancias.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_desktop_realestate_clarifications',
    solution: 'desktop',
    industry: 'realestate',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 5,
    price: 25000,
  },
  // additionals mobile realestate
  {
    id: 'additional_mobile_realestate_recommendation_commission',
    solution: 'mobile',
    industry: 'realestate',
    title: 'Sistema de Recomendación y Comisión',
    description: 'Gestiona las recomendaciones y prémialas con una comisión.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_mobile_realestate_collaborators',
    solution: 'mobile',
    industry: 'realestate',
    title: 'Tarjetas digitales para colaboradores',
    description:
      'Permite que tus colaboradores generen sus tarjetas digitales de presentación .',
    days: 14,
    price: 72000,
  },
  {
    id: 'additional_mobile_realestate_real_market',
    solution: 'mobile',
    industry: 'realestate',
    title: 'Herramienta de análisis de mercado inmobiliario',
    description:
      'Impulsa tu negocio con análisis del mercado inmobiliario, descubriendo tendencias que te ayudarán a tomar decisiones estratégicas.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_mobile_realestate_lease_sale_documentation',
    solution: 'mobile',
    industry: 'realestate',
    title:
      'Sistema de administración de contratos y documentación de arrendamiento y venta',
    description:
      'Administra y almacena los contratos y documentación necesaria para tus procesos operativos del día a día.',
    days: 10,
    price: 50000,
  },
  {
    id: 'additional_mobile_realestate_properties_valuation',
    solution: 'mobile',
    industry: 'realestate',
    title: 'Solución de evaluación de propiedades y valoración',
    description:
      'Agrega procesos de evaluación y valoración de propiedades que te ayuden a organizar y agilizar tu operación.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_mobile_realestate_virtual_tours',
    solution: 'mobile',
    industry: 'realestate',
    title: 'Herramienta de tours virtuales',
    description:
      'Permite que tus usuarios conozcan y amen las propiedades por medio de tours virtuales.',
    days: 20,
    price: 98000,
  },
  {
    id: 'additional_mobile_realestate_property_repairs',
    solution: 'mobile',
    industry: 'realestate',
    title: 'Módulo de gestión de mantenimiento y reparaciones de propiedades',
    description:
      'Mantén en buen estado tus propiedades planeando el debido mantenimiento y reparación.',
    days: 12,
    price: 65000,
  },
  {
    id: 'additional_mobile_realestate_crm_visit',
    solution: 'mobile',
    industry: 'realestate',
    title: 'CRM - Reporte de visitas',
    description: 'Digitaliza los reportes de visitas por parte de tus agentes.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_mobile_realestate_crm_budgets',
    solution: 'mobile',
    industry: 'realestate',
    title: 'CRM - Presupuestos',
    description: 'Realiza presupuestos y compártelos con tus usuarios.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_mobile_realestate_commissions_earned',
    solution: 'mobile',
    industry: 'realestate',
    title: 'CRM - Comisiones ganadas',
    description:
      'Sumariza las comisiones ganadas por tus agentes y motívalos a dar su máximo.',
    days: 7,
    price: 32000,
  },
  {
    id: 'additional_mobile_realestate_business_won',
    solution: 'mobile',
    industry: 'realestate',
    title: 'CRM - Negocios ganados',
    description:
      'Genera un reporte de los negocios logrados y dimensiona tus ganancias.',
    days: 5,
    price: 25000,
  },
  {
    id: 'additional_mobile_realestate_clarifications',
    solution: 'mobile',
    industry: 'realestate',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 5,
    price: 25000,
  },
];

// solo data , sin costo y tiempo
const hospitality: IAdditional[] = [
  // additionals web hospitality
  {
    id: 'additional_web_hospitality_room_orders',
    solution: 'web',
    industry: 'hospitality',
    title: 'Sistema de Pedidos a Habitación',
    description:
      'Automatiza la solicitud y atención de servicios a la habitación.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_complaints_suggestions',
    solution: 'web',
    industry: 'hospitality',
    title: 'Sistema de Quejas y Sugerencias',
    description: 'Mejora tus procesos al gestionar las quejas y sugerencias.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_events_conferences',
    solution: 'web',
    industry: 'hospitality',
    title: 'Herramienta de gestión de eventos y conferencias',
    description:
      'Incorpora la programación y gestión de eventos y conferencias en tus salas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_financial_management',
    solution: 'web',
    industry: 'hospitality',
    title: 'Plataforma de contabilidad y gestión financiera',
    description:
      'Controla en un solo lugar la contabilidad y aspectos financieros de tus hoteles.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_rrhh',
    solution: 'web',
    industry: 'hospitality',
    title: 'Módulo de gestión de recursos humanos',
    description: 'Administra tu plantilla laboral en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_spa',
    solution: 'web',
    industry: 'hospitality',
    title: 'Solución para la gestión de Spa y Bienestar',
    description: 'Integra la elección de servicios de Spa y Bienestar.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_inventories',
    solution: 'web',
    industry: 'hospitality',
    title: 'Sistema de inventarios',
    description: 'Mantén bajo control tu inventario.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_different_users',
    solution: 'web',
    industry: 'hospitality',
    title: 'Sistema de promociones para distintos usuarios',
    description:
      'Segmenta y publica tus promociones para atraer a tu clientes potenciales.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_food_drinks',
    solution: 'web',
    industry: 'hospitality',
    title: 'Administración de alimentos y bebidas',
    description: 'Gestiona los menús de tus hoteles según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_maintenance_cleaning',
    solution: 'web',
    industry: 'hospitality',
    title: 'Sistema de gestión de mantenimiento y limpieza',
    description:
      'Gestiona los servicios de mantenimiento y limpieza en tus diferentes ubicaciones.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_relationships_customers',
    solution: 'web',
    industry: 'hospitality',
    title: 'Plataforma de administración de relaciones con los clientes',
    description:
      'Agrega herramientas que te ayudarán a gestionar las relaciones con tus clientes para ofrecer atención de calidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_reservation_history',
    solution: 'web',
    industry: 'hospitality',
    title: 'Historial de reservas',
    description:
      'Obtén un histórico de reservas que te ayudará a medir el desempeño y atender cualquier aclaración con respecto a las reservaciones en tus hoteles.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_hospitality_clarifications',
    solution: 'web',
    industry: 'hospitality',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals desktop hospitality
  {
    id: 'additional_desktop_hospitality_room_orders',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Sistema de Pedidos a Habitación',
    description:
      'Automatiza la solicitud y atención de servicios a la habitación.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_complaints_suggestions',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Sistema de Quejas y Sugerencias',
    description: 'Mejora tus procesos al gestionar las quejas y sugerencias.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_events_conferences',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Herramienta de gestión de eventos y conferencias',
    description:
      'Incorpora la programación y gestión de eventos y conferencias en tus salas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_financial_management',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Plataforma de contabilidad y gestión financiera',
    description:
      'Controla en un solo lugar la contabilidad y aspectos financieros de tus hoteles.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_rrhh',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Módulo de gestión de recursos humanos',
    description: 'Administra tu plantilla laboral en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_spa',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Solución para la gestión de Spa y Bienestar',
    description: 'Integra la elección de servicios de Spa y Bienestar.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_inventories',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Sistema de inventarios',
    description: 'Mantén bajo control tu inventario.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_different_users',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Sistema de promociones para distintos usuarios',
    description:
      'Segmenta y publica tus promociones para atraer a tu clientes potenciales.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_food_drinks',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Administración de alimentos y bebidas',
    description: 'Gestiona los menús de tus hoteles según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_maintenance_cleaning',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Sistema de gestión de mantenimiento y limpieza',
    description:
      'Gestiona los servicios de mantenimiento y limpieza en tus diferentes ubicaciones.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_relationships_customers',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Plataforma de administración de relaciones con los clientes',
    description:
      'Agrega herramientas que te ayudarán a gestionar las relaciones con tus clientes para ofrecer atención de calidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_reservation_history',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Historial de reservas',
    description:
      'Obtén un histórico de reservas que te ayudará a medir el desempeño y atender cualquier aclaración con respecto a las reservaciones en tus hoteles.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_hospitality_clarifications',
    solution: 'desktop',
    industry: 'hospitality',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals mobile hospitality
  {
    id: 'additional_mobile_hospitality_room_orders',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Sistema de Pedidos a Habitación',
    description:
      'Automatiza la solicitud y atención de servicios a la habitación.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_complaints_suggestions',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Sistema de Quejas y Sugerencias',
    description: 'Mejora tus procesos al gestionar las quejas y sugerencias.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_events_conferences',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Herramienta de gestión de eventos y conferencias',
    description:
      'Incorpora la programación y gestión de eventos y conferencias en tus salas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_spa',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Solución para la gestión de Spa y Bienestar',
    description: 'Integra la elección de servicios de Spa y Bienestar.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_different_users',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Sistema de promociones para distintos usuarios',
    description:
      'Segmenta y publica tus promociones para atraer a tu clientes potenciales.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_food_drinks',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Administración de alimentos y bebidas',
    description: 'Gestiona los menús de tus hoteles según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_maintenance_cleaning',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Sistema de gestión de mantenimiento y limpieza',
    description:
      'Gestiona los servicios de mantenimiento y limpieza en tus diferentes ubicaciones.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_reservation_history',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Historial de reservas',
    description:
      'Obtén un histórico de reservas que te ayudará a medir el desempeño y atender cualquier aclaración con respecto a las reservaciones en tus hoteles.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_hospitality_clarifications',
    solution: 'mobile',
    industry: 'hospitality',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
];

const healthcare: IAdditional[] = [
  // additionals web healthcare
  {
    id: 'additional_web_healthcare_pharmacy_products',
    solution: 'web',
    industry: 'healthcare',
    title: 'Catálogo de medicamentos y productos de farmacia',
    description:
      'Agrega la compra de productos farmacéuticos en caso de que también seas un proveedor.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_healthcare_video',
    solution: 'web',
    industry: 'healthcare',
    title: 'Sistema de videoconferencia',
    description:
      'Implementa sistemas de comunicación por audio y video para conectar a pacientes y médicos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_healthcare_hospitals_clinics',
    solution: 'web',
    industry: 'healthcare',
    title: 'Gestión de colaboradores de hospitales o clínicas',
    description:
      'Integra a colaboradores estratégicos en hospitales y clínicas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_healthcare_clarification',
    solution: 'web',
    industry: 'healthcare',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals desktop healthcare
  {
    id: 'additional_desktop_healthcare_pharmacy_products',
    solution: 'desktop',
    industry: 'healthcare',
    title: 'Catálogo de medicamentos y productos de farmacia',
    description:
      'Agrega la compra de productos farmacéuticos en caso de que también seas un proveedor.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_healthcare_video',
    solution: 'desktop',
    industry: 'healthcare',
    title: 'Sistema de videoconferencia',
    description:
      'Implementa sistemas de comunicación por audio y video para conectar a pacientes y médicos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_healthcare_hospitals_clinics',
    solution: 'desktop',
    industry: 'healthcare',
    title: 'Gestión de colaboradores de hospitales o clínicas',
    description:
      'Integra a colaboradores estratégicos en hospitales y clínicas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_healthcare_clarification',
    solution: 'desktop',
    industry: 'healthcare',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals mobile healthcare
  {
    id: 'additional_mobile_healthcare_pharmacy_products',
    solution: 'mobile',
    industry: 'healthcare',
    title: 'Catálogo de medicamentos y productos de farmacia',
    description:
      'Agrega la compra de productos farmacéuticos en caso de que también seas un proveedor.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_healthcare_video',
    solution: 'mobile',
    industry: 'healthcare',
    title: 'Sistema de videoconferencia',
    description:
      'Implementa sistemas de comunicación por audio y video para conectar a pacientes y médicos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_healthcare_clarification',
    solution: 'mobile',
    industry: 'healthcare',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
];

const entertainment: IAdditional[] = [
  // additionals web entertainment
  {
    id: 'additional_web_entertainment_appointment_schedule',
    solution: 'web',
    industry: 'entertainment',
    title: 'Sistema de Agenda de Citas',
    description:
      'Gestiona y controla las citas que requieras establecer con tus usuarios según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_entertainment_users_data',
    solution: 'web',
    industry: 'entertainment',
    title: 'Módulo de análisis de audiencia y datos de usuarios',
    description:
      'Obtén métricas y estadísticas de usuarios y audiencia para tomar decisiones estratégicas en tu negocio.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_entertainment_content_licenses',
    solution: 'web',
    industry: 'entertainment',
    title: 'Solución de control de derechos de autor y licencias de contenido',
    description:
      'Controla los derechos de tu contenido y asegura que no sea reproducido por alguien más.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_entertainment_engagement_audience',
    solution: 'web',
    industry: 'entertainment',
    title: 'Herramienta de interacción y compromiso con la audiencia',
    description:
      'Agrega el potencial de interactuar con tu audiencia y genera lealtad de tus usuarios.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_entertainment_entertainment_tickets',
    solution: 'web',
    industry: 'entertainment',
    title: 'Plataforma de gestión de eventos y boletos de entretenimiento',
    description:
      'Programa eventos y gestiona la venta de boletos según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_entertainment_recommended',
    solution: 'web',
    industry: 'entertainment',
    title: 'Sistemas de recomedados',
    description: 'Gestiona las recomendaciones y prémialas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_entertainment_clarifications',
    solution: 'web',
    industry: 'entertainment',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals desk entertainment
  {
    id: 'additional_desk_entertainment_appointment_schedule',
    solution: 'desktop',
    industry: 'entertainment',
    title: 'Sistema de Agenda de Citas',
    description:
      'Gestiona y controla las citas que requieras establecer con tus usuarios según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desk_entertainment_users_data',
    solution: 'desktop',
    industry: 'entertainment',
    title: 'Módulo de análisis de audiencia y datos de usuarios',
    description:
      'Obtén métricas y estadísticas de usuarios y audiencia para tomar decisiones estratégicas en tu negocio.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desk_entertainment_content_licenses',
    solution: 'desktop',
    industry: 'entertainment',
    title: 'Solución de control de derechos de autor y licencias de contenido',
    description:
      'Controla los derechos de tu contenido y asegura que no sea reproducido por alguien más.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desk_entertainment_engagement_audience',
    solution: 'desktop',
    industry: 'entertainment',
    title: 'Herramienta de interacción y compromiso con la audiencia',
    description:
      'Agrega el potencial de interactuar con tu audiencia y genera lealtad de tus usuarios.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desk_entertainment_entertainment_tickets',
    solution: 'desktop',
    industry: 'entertainment',
    title: 'Plataforma de gestión de eventos y boletos de entretenimiento',
    description:
      'Programa eventos y gestiona la venta de boletos según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desk_entertainment_recommended',
    solution: 'desktop',
    industry: 'entertainment',
    title: 'Sistemas de recomedados',
    description: 'Gestiona las recomendaciones y prémialas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desk_entertainment_clarifications',
    solution: 'desktop',
    industry: 'entertainment',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals mob entertainment
  {
    id: 'additional_mob_entertainment_appointment_schedule',
    solution: 'mobile',
    industry: 'entertainment',
    title: 'Sistema de Agenda de Citas',
    description:
      'Gestiona y controla las citas que requieras establecer con tus usuarios según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mob_entertainment_users_data',
    solution: 'mobile',
    industry: 'entertainment',
    title: 'Módulo de análisis de audiencia y datos de usuarios',
    description:
      'Obtén métricas y estadísticas de usuarios y audiencia para tomar decisiones estratégicas en tu negocio.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mob_entertainment_content_licenses',
    solution: 'mobile',
    industry: 'entertainment',
    title: 'Solución de control de derechos de autor y licencias de contenido',
    description:
      'Controla los derechos de tu contenido y asegura que no sea reproducido por alguien más.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mob_entertainment_engagement_audience',
    solution: 'mobile',
    industry: 'entertainment',
    title: 'Herramienta de interacción y compromiso con la audiencia',
    description:
      'Agrega el potencial de interactuar con tu audiencia y genera lealtad de tus usuarios.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mob_entertainment_entertainment_tickets',
    solution: 'mobile',
    industry: 'entertainment',
    title: 'Plataforma de gestión de eventos y boletos de entretenimiento',
    description:
      'Programa eventos y gestiona la venta de boletos según disponibilidad.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mob_entertainment_recommended',
    solution: 'mobile',
    industry: 'entertainment',
    title: 'Sistemas de recomedados',
    description: 'Gestiona las recomendaciones y prémialas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mob_entertainment_clarifications',
    solution: 'mobile',
    industry: 'entertainment',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
];

const fintech:IAdditional[] = [
  // additionals web fintech
  {
    id: 'additional_web_fintech_credit_institutions',
    solution: 'web',
    industry: 'fintech',
    title: 'Generar un semáforo de salud financiera para otras instituciones crediticias',
    description:
      'Coloca en tu plataforma un semáforo que te permita validar la salud financiera de tus clientes en otras instituciones crediticias.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_authorizations_permits',
    solution: 'web',
    industry: 'fintech',
    title: 'Asesoría Legal para autorizaciones y permisos',
    description:
      'Integra las bondades de la asesoría legal en procedimientos administrativos y financieros.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_recommendations',
    solution: 'web',
    industry: 'fintech',
    title: 'Sistema de recomendaciones',
    description:
      'Gestiona las recomendaciones y prémialas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_clarifications',
    solution: 'web',
    industry: 'fintech',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals desktop fintech
  {
    id: 'additional_desktop_fintech_credit_institutions',
    solution: 'desktop',
    industry: 'fintech',
    title: 'Generar un semáforo de salud financiera para otras instituciones crediticias',
    description:
      'Coloca en tu plataforma un semáforo que te permita validar la salud financiera de tus clientes en otras instituciones crediticias.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_authorizations_permits',
    solution: 'desktop',
    industry: 'fintech',
    title: 'Asesoría Legal para autorizaciones y permisos',
    description:
      'Integra las bondades de la asesoría legal en procedimientos administrativos y financieros.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_recommendations',
    solution: 'desktop',
    industry: 'fintech',
    title: 'Sistema de recomendaciones',
    description:
      'Gestiona las recomendaciones y prémialas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_clarifications',
    solution: 'desktop',
    industry: 'fintech',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals mobile fintech
  {
    id: 'additional_mobile_fintech_credit_institutions',
    solution: 'mobile',
    industry: 'fintech',
    title: 'Generar un semáforo de salud financiera para otras instituciones crediticias',
    description:
      'Coloca en tu plataforma un semáforo que te permita validar la salud financiera de tus clientes en otras instituciones crediticias.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_authorizations_permits',
    solution: 'mobile',
    industry: 'fintech',
    title: 'Asesoría Legal para autorizaciones y permisos',
    description:
      'Integra las bondades de la asesoría legal en procedimientos administrativos y financieros.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_recommendations',
    solution: 'mobile',
    industry: 'fintech',
    title: 'Sistema de recomendaciones',
    description:
      'Gestiona las recomendaciones y prémialas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_clarifications',
    solution: 'mobile',
    industry: 'fintech',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
]

const fintech_crowdfunding:IAdditional[] = [
  // additionals web fintech_crowdfunding
  {
    id: 'additional_web_fintech_crowdfunding_advice',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Plataforma de educación financiera y asesoramiento',
    description:
      'Capacita a tus usuarios en términos de educación financiera y proporciona asesoramiento.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_help',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de gestión de ayuda',
    description:
      'Incorpora una línea de ayuda y soporte a tu plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_project',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de presentación de proyectos',
    description:
      'Integra un proceso guiado para captura y validación de proyectos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_campaign_management',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de seguimiento y gestión de campañas',
    description:
      'Agrega un puntual proceso de seguimiento para la obtención de recursos por medio de campañas hacia inversionistas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_security',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de procesamiento de transacciones seguras',
    description:
      'Agrega una capa de seguridad en el proceso de transacciones en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_sponsors',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Panel de control de inversores y patrocinadores',
    description:
      'Integra un módulo para inversores que permita gestionar sus participaciones en proyectos y sus financiamientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_assessment',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Módulo de evaluación de proyectos',
    description:
      'Gestiona la validación de proyectos para asegurar que sean viables y con un nivel aceptable de riesgo.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_normative',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)',
    description:
      'Integra las bondades de la asesoría legal en procedimientos administrativos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_web_fintech_crowdfunding_clarifications',
    solution: 'web',
    industry: 'fintech_crowdfunding',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals desktop fintech_crowdfunding
  {
    id: 'additional_desktop_fintech_crowdfunding_advice',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Plataforma de educación financiera y asesoramiento',
    description:
      'Capacita a tus usuarios en términos de educación financiera y proporciona asesoramiento.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_help',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de gestión de ayuda',
    description:
      'Incorpora una línea de ayuda y soporte a tu plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_project',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de presentación de proyectos',
    description:
      'Integra un proceso guiado para captura y validación de proyectos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_campaign_management',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de seguimiento y gestión de campañas',
    description:
      'Agrega un puntual proceso de seguimiento para la obtención de recursos por medio de campañas hacia inversionistas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_security',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de procesamiento de transacciones seguras',
    description:
      'Agrega una capa de seguridad en el proceso de transacciones en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_sponsors',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Panel de control de inversores y patrocinadores',
    description:
      'Integra un módulo para inversores que permita gestionar sus participaciones en proyectos y sus financiamientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_assessment',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Módulo de evaluación de proyectos',
    description:
      'Gestiona la validación de proyectos para asegurar que sean viables y con un nivel aceptable de riesgo.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_normative',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)',
    description:
      'Integra las bondades de la asesoría legal en procedimientos administrativos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_desktop_fintech_crowdfunding_clarifications',
    solution: 'desktop',
    industry: 'fintech_crowdfunding',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
  // additionals mobile fintech_crowdfunding
  {
    id: 'additional_mobile_fintech_crowdfunding_advice',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Plataforma de educación financiera y asesoramiento',
    description:
      'Capacita a tus usuarios en términos de educación financiera y proporciona asesoramiento.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_help',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de gestión de ayuda',
    description:
      'Incorpora una línea de ayuda y soporte a tu plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_project',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de presentación de proyectos',
    description:
      'Integra un proceso guiado para captura y validación de proyectos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_campaign_management',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de seguimiento y gestión de campañas',
    description:
      'Agrega un puntual proceso de seguimiento para la obtención de recursos por medio de campañas hacia inversionistas.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_security',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Herramienta de procesamiento de transacciones seguras',
    description:
      'Agrega una capa de seguridad en el proceso de transacciones en la plataforma.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_sponsors',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Panel de control de inversores y patrocinadores',
    description:
      'Integra un módulo para inversores que permita gestionar sus participaciones en proyectos y sus financiamientos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_assessment',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Módulo de evaluación de proyectos',
    description:
      'Gestiona la validación de proyectos para asegurar que sean viables y con un nivel aceptable de riesgo.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_normative',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Asesoría legal para autorizaciones y permisos (Cumplimiento normativo)',
    description:
      'Integra las bondades de la asesoría legal en procedimientos administrativos.',
    days: 12,
    price: 20000,
  },
  {
    id: 'additional_mobile_fintech_crowdfunding_clarifications',
    solution: 'mobile',
    industry: 'fintech_crowdfunding',
    title: 'Módulo de aclaraciones',
    description:
      'Gestiona los reclamos de tus clientes por medio de aclaraciones.',
    days: 12,
    price: 20000,
  },
]
export const additionals: IAdditional[] = [
  ...restaurant,
  ...trips,
  ...realestate,
  ...hospitality,
  ...healthcare,
  ...entertainment,
  ...fintech,
  ...fintech_crowdfunding
];
