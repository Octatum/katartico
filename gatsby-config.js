module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects-md',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/about`,
        name: 'about-us-md',
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms'
  ],
};
