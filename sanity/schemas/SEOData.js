export default {
  name: 'SEOData',
  type: 'object',
  options: { collapsible: true },

  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Descripción',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Keywords',
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
