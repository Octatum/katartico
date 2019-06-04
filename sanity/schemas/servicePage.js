import defaultPageFields from './defaultPageFields';

const servicePage = {
  title: 'Página de servicios',
  name: 'servicesPage',
  type: 'document',
  fields: [
    ...defaultPageFields,
    {
      title: 'Servicios',
      name: 'services',
      type: 'array',
      options: {
        editModal: 'fullscreen',
      },
      of: [{ type: 'service' }],
    },
  ],
};

export const service = {
  title: 'Servicio',
  name: 'service',
  type: 'object',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Lista de servicios',
      name: 'services',
      type: 'array',
      of: [{ type: 'localeString' }],
    },
    {
      title: 'Imagen de fondo',
      name: 'backgroundImage',
      type: 'image',
    },
  ],
};

export default servicePage;
