export interface IIntegration {
  id: string;
  title: string;
  description: string;
  solutions: string[];
  industries: string[];
}
export const integrations: IIntegration[] = [
  {
    id: 'filer_ia',
    title: 'Filtrar promociones con IA',
    description:
      'Incorpora las bondades de la Inteligencia Artificial al momento de mostrar las promociones a tus clientes.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['trips'],
  },
  {
    id: 'crm',
    title: 'CRM',
    description:
      'Gestiona la relación con tus clientes e incrementa tus leads.',
    solutions: ['web', 'desktop'],
    industries: [
      'trips',
      'realestate',
      'hospitality',
      'healthcare',
      'fintech_crowdfunding',
      'entertainment',
    ],
  },
  {
    id: 'erp',
    title: 'ERP',
    description:
      'Integra a tu solución la posibilidad de gestionar las actividades empresariales diarias.',
    solutions: ['web', 'desktop'],
    industries: ['hospitality', 'healthcare'],
  },
  {
    id: 'facturation_system',
    title: 'Sistema de facturación',
    description:
      'Genera y administra tus facturas por medio de una integración con el SAT.',
    solutions: ['web', 'desktop'],
    industries: [
      'restaurant',
      'trips',
      'fintech',
      'hospitality',
      'healthcare',
      'fintech_crowdfunding',
      'entertainment',
    ],
  },
  {
    id: 'reservation_engine',
    title: 'Motor de reservaciones',
    description:
      'Incorpora un motor de reservaciones que gestione la contratación y disponibilidad para los viajes de tus clientes.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['trips'],
  },
  {
    id: 'real_estate_marketing_platform',
    title: 'Plataforma de marketing inmobiliario y promoción de propiedades',
    description:
      'Crea contenido y promociona tus propiedades para agilizar su adquisición.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['realestate'],
  },
  {
    id: 'sales',
    title: 'Punto de venta',
    description: 'Agrega las bondades del punto de venta a tu plataforma.',
    solutions: ['web', 'desktop'],
    industries: ['restaurant'],
  },
  {
    id: 'reservations_other_hotels',
    title: 'Reservas en otros Hoteles que no sean de la empresa',
    description:
      'Incorpora hoteles externos para incrementar tu capacidad de atención al cliente.',
    solutions: ['web', 'desktop'],
    industries: ['hospitality'],
  },
  {
    id: 'system_interconnected_with_some_pharmacy',
    title:
      'Sistema interconectado con alguna Farmacia o Proveedor de productos',
    description:
      'Integra la compra de productos farmacéuticos con un proveedor confiable.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['healthcare'],
  },
  {
    id: 'device_integration_system',
    title:
      'Sistema de integración de dispositivos médicos y tecnologías de salud',
    description:
      'Conecta tus dispositivos inteligentes para obtener mediciones e integrarlas al seguimiento del paciente.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['healthcare'],
  },
  {
    id: 'golden_copy',
    title: 'Servidores / Golden Copy',
    description:
      'Implementa una arquitectura segura que proteja la privacidad, integridad y disponibilidad de los datos.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['fintech_crowdfunding'],
  },
  {
    id: 'wallet',
    title: 'Wallet',
    description:
      'Incopora las bondades de una wallet para el fondeo y retiro de fondos entre los involucrados.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['fintech_crowdfunding'],
  },
  {
    id: 'payment_gateway',
    title: 'Pasarela de pago',
    description:
      'Facilita las transacciones financieras entre los participantes.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['fintech_crowdfunding'],
  },
  {
    id: 'social_network_not_configured',
    title: 'Sistemas de alguna Red social no configurada',
    description:
      'Agrega una red social a tu plataforma e intégrala a nuestro motor de gestión y publicación de contenido.',
    solutions: ['web', 'desktop', 'mobile'],
    industries: ['entertainment'],
  },
];
