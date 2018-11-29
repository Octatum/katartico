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
              path
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
      createPage({
        path: `/project/${node.frontmatter.title}`,
        component: projectTemplate,
      });
    });
  });
}
