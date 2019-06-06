export default {
  name: 'SEOData',
  type: 'object',
  options: { collapsible: true },

  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Descripción',
      name: 'description',
      type: 'localeText',
    },
    {
      title: 'Keywords',
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
