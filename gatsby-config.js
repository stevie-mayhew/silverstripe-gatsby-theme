const globImporter = require('node-sass-glob-importer');

require('dotenv').config({
  // reference: https://www.gatsbyjs.org/docs/environment-variables/
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'silverstripe-gatsby-theme', // TODO
    description: 'A Gatsby Theme for SilverStripe', // TODO
    author: 'Stevie Mayhew', // TODO
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'silverstripe-gatsby-theme',
        short_name: 'silverstripe-gatsby-theme',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/images/favicon.png', // This path is relative to the root of the site.
        icons: [
          {
            src: '/favicons/favicon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: process.env.GATSBY_SITE_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_SITE_URL,
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        importer: globImporter(),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline

    {
      resolve: 'gatsby-plugin-offline',
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GATSBY_GOOGLE_TAGMANAGER_ID,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',
      },
    },
    {
      resolve: 'gatsby-source-silverstripe',
      options: {
        host: `${process.env.GATSBY_API_URL}`,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        monotype: {
          projectId: 'edeb819d-9c20-4f5a-98e4-7bd532ebc0ba',
          loadAllFonts: true,
        },
      },
    },
  ],
};
