import defaultPageFields from './defaultPageFields';

const homePage = {
  title: 'Home page',
  name: 'homePage',
  type: 'document',
  fieldsets: [
    {
      title: 'Sección "Nosotros"',
      name: 'aboutUsSection',
      options: { collapsible: true },
    },
    {
      title: 'Sección "Servicios"',
      name: 'servicesSection',
      options: { collapsible: true },
    },
    {
      title: 'Sección "Portafolio"',
      name: 'portfolioSection',
      options: { collapsible: true },
    },

    {
      title: 'Sección "Contacto"',
      name: 'contactSection',
      options: { collapsible: true },
    },
  ],
  fields: [
    ...defaultPageFields,

    {
      title: 'Título de sección',
      name: 'aboutUsTitle',
      type: 'localeString',
      fieldset: 'aboutUsSection',
    },
    {
      title: 'Eslogan',
      name: 'slogan',
      type: 'localeString',
      fieldset: 'aboutUsSection',
    },

    {
      title: 'Título de sección',
      name: 'servicesTitle',
      type: 'localeString',
      fieldset: 'servicesSection',
    },
    {
      title: 'Lista de servicios',
      name: 'services',
      type: 'array',
      fieldset: 'servicesSection',
      of: [{ type: 'localeString' }],
    },

    {
      title: 'Título de sección',
      name: 'portfolioTitle',
      type: 'localeString',
      fieldset: 'portfolioSection',
    },
    {
      title: 'Clientes',
      name: 'customers',
      type: 'array',
      fieldset: 'portfolioSection',
      of: [{ type: 'customer' }],
    },

    {
      title: 'Título de sección',
      name: 'contactTitle',
      type: 'localeString',
      fieldset: 'contactSection',
    },
  ],
};

export const customer = {
  title: 'Cliente',
  name: 'customer',
  type: 'object',
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      title: 'Logotipo',
      name: 'logo',
      validation: Rule => Rule.required(),
      type: 'image',
    },
  ],
};

export default homePage;
