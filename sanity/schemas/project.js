import defaultPageFields from './defaultPageFields';

const project = {
  title: 'Proyecto',
  name: 'projectPage',
  type: 'document',
  fields: [
    ...defaultPageFields,

    {
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Subtítulo',
      name: 'subtitle',
      type: 'localeString',
    },
    {
      title: 'Contenido',
      name: 'content',
      type: 'localeMarkdown',
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      validation: Rule => Rule.min(1),
      of: [{ type: 'projectImage' }, { type: 'projectVideo' }],
    },
  ],
};

export const projectVideo = {
  title: 'Video',
  name: 'projectVideo',
  type: 'object',
  fields: [
    {
      title: 'Id del video',
      name: 'videoId',
      type: 'string',
      options: {
        list: [{ title: 'Youtube', value: 'youtube' }],
      },
      validation: Rule => Rule.required(),
    },
  ],
};

export const projectImage = {
  title: 'Imagen',
  name: 'projectImage',
  type: 'object',
  fields: [
    {
      title: 'Ancho',
      name: 'width',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(3),
    },
    {
      title: 'Imagen',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Alto',
      name: 'height',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(3),
    },
    {
      title: 'Descripción',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
  ],
};

export default project;
