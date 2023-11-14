export interface IIntegration {
  id: string;
  title: string;
}
export const integrations: IIntegration[] = [
  {
    id: 'filer_ia',
    title: 'Filtrar promociones con IA',
  },
  {
    id: 'crm',
    title: 'CRM',
  },
  {
    id: 'facturation_system',
    title: 'Sistema de facturación',
  },
  {
    id: 'reservation_engine',
    title: 'Motor de reservaciones',
  }
];
