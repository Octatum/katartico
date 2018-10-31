const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const
    { createPage } = actions,
    projectTemplate = path.resolve(`src/templates/projectTemplate.jsx`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        filter: { fileAbsolutePath: { regex: "/.+/projects/.+/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
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
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
      });
    });
  });
}
