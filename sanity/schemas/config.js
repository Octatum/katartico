import { supportedLanguages } from './localeString';

const generalConfig = {
  title: 'Configuración',
  name: 'config',
  type: 'document',
  fields: [
    {
      title: 'Plantilla de título',
      name: 'titleTemplate',
      type: 'localeString',
      description: `Llenar cuando se quiere usar una estructura de título para todas las páginas. 
        Escribir "%s" sin comillas hará que se inserte el título de la página en el espacio correspondiente. 
        Ejemplo: Escribir "Katartico - %s" hará que el título final de una página con el título de "Portafolio" sea "Katartico - Portafolio"
      `,
    },
    {
      title: 'Lenguajes permitidos',
      name: 'languages',
      readOnly: true,
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: supportedLanguages.map(({ title, id }) => ({ title, value: id })),
      },
    },
  ],
};

export default generalConfig;
