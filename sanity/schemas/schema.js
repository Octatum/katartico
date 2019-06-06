// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import homePage, { customer } from './homePage';
import localeString, { localeMarkdown, localeText } from './localeString';
import aboutPage, { teamMember } from './aboutPage';
import SEOData from './SEOData';
import servicePage, { service } from './servicePage';
import portfolioPage from './portfolioPage';
import project, { projectImage, projectVideo } from './project';
import generalConfig from './config';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ...[generalConfig],
    ...[homePage, customer],
    ...[aboutPage, teamMember],
    ...[servicePage, service],
    ...[portfolioPage],
    ...[project, projectImage, projectVideo],

    ...[localeString, localeMarkdown, localeText],
    SEOData,
  ]),
});
