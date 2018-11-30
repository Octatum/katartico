const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const
    { createPage } = actions,
    projectTemplate = path.resolve(`src/templates/projectTemplate.jsx`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        filter: {frontmatter: {type: {eq: "project"}}}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              type
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const route = node.frontmatter.title.replace(' ', '_').toLowerCase().replace(/\W/g, '');

      createPage({
        path: `/project/${route}`,
        component: projectTemplate,
        context: {
          title: node.frontmatter.title
        }
      });
    });
  });
}
