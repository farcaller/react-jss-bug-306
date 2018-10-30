const path = require('path');

module.exports = {
  siteMetadata: require('./site-metadata'),
  plugins: [
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: "gatsby-transformer-remark",
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@materialkit': path.join(__dirname, 'thirdparty/material-kit-react-v1.3.0/src'),
        'assets': path.join(__dirname, 'thirdparty/material-kit-react-v1.3.0/src/assets'),
        'components': path.join(__dirname, 'thirdparty/material-kit-react-v1.3.0/src/components'),
      }
    }
  ],
}
