import S from '@sanity/desk-tool/structure-builder';

const createPageItem = (name, type) =>
  S.listItem()
    .title(name)
    .child(
      S.editor()
        .id(type)
        .schemaType(type)
        .documentId(type)
    );

const extraDocTypes = listItem => ['projectPage'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Páginas')
    .items([
      createPageItem('Inicio', 'homePage'),
      createPageItem('Nosotros', 'aboutPage'),
      createPageItem('Servicios', 'servicesPage'),
      createPageItem('Portafolio', 'portfolioPage'),

      ...S.documentTypeListItems().filter(extraDocTypes),
    ]);
