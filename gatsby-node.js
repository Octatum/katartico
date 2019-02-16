const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

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


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}