import defaultPageFields from './defaultPageFields';

const aboutPage = {
  title: 'About page',
  name: 'aboutPage',
  type: 'document',
  fieldsets: [
    {
      title: 'Sección "Nosotros"',
      name: 'aboutUsSection',
      options: { collapsible: true },
    },
  ],
  fields: [
    ...defaultPageFields,

    {
      title: 'Banner horizontal',
      name: 'banner',
      type: 'image',
    },
    {
      title: 'Banner vertical (móvil)',
      name: 'bannerVertical',
      type: 'image',
    },
    {
      title: 'Contenido',
      name: 'content',
      type: 'localeMarkdown',
    },
    {
      title: 'Miembros de equipo',
      name: 'teamMembers',
      type: 'array',
      of: [{ type: 'teamMember' }],
    },
  ],
};

export const teamMember = {
  title: 'Miembro de equipo',
  name: 'teamMember',
  type: 'object',
  fields: [
    {
      title: 'Imagen',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Descripción',
      name: 'description',
      type: 'text',
    },
  ],
};

export default aboutPage;
