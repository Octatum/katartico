const supportedLanguages = [
  { id: 'es', title: 'Español', isDefault: true },
  { id: 'en', title: 'Inglés' },
];

export const generateLocaleObject = (type, name) => ({
  name,
  type: 'object',
  fieldsets: [
    {
      title: 'Traducciones',
      name: 'traducciones',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    fieldset: lang.isDefault ? null : 'traducciones',
    type,
  })),
});

export const localeMarkdown = generateLocaleObject(
  'markdown',
  'localeMarkdown'
);
export const localeText = generateLocaleObject('text', 'localeText');

export default generateLocaleObject('string', 'localeString');
