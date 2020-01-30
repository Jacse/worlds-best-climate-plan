/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Verdens bedste klimaplan',
    titleTemplate: '%s · Verdens bedste klimaplan',
    description: '<indsæt>',
    url: 'https://verdensbedsteklimaplan.dk', // No trailing slash allowed!
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-57NCBWB',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
  ],
};
