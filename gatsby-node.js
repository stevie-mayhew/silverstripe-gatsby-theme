const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const STYLELINT_PLUGIN = require('stylelint-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~static': path.resolve(__dirname, './static'),
      },
      modules: [
        path.resolve(__dirname, './src'),
        'node_modules',
      ],
    },
    plugins: [
      new STYLELINT_PLUGIN({
        configFile: '.stylelintrc',
        context: './src',
        syntax: 'scss',
      }),
    ],
  });
};
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const staffPageTemplate = path.resolve('src/templates/staff.js');
  const homePageTemplate = path.resolve('src/templates/home.js');
  const pageTemplate = path.resolve('src/templates/page.js');
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
query {
  allSilverStripeStaffPage {
    edges {
      node {
        uuid
        link
      }
    }
  }
  allSilverStripeHomePage {
    edges {
      node {
        uuid
        link
      }
    }
  }
  allSilverStripePage {
    edges {
      node {
        uuid
        link
      }
    }
  }
}
  `, { limit: 1000 })
    .then((result) => {
      if (result.errors) {
        throw result.errors;
      }
      // Create pages.
      result.data.allSilverStripeStaffPage.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `${edge.node.link}`,
          component: staffPageTemplate,
          context: {
            uuid: edge.node.uuid,
          },
        });
      });
      // Create pages.
      result.data.allSilverStripeHomePage.edges.forEach(edge => {
        createPage({
          // home page is always at the root
          path: '/',
          component: homePageTemplate,
          context: {
            uuid: edge.node.uuid,
          },
        });
      });
      // Create pages.
      result.data.allSilverStripePage.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `${edge.node.link}`,
          component: pageTemplate,
          context: {
            uuid: edge.node.uuid,
          },
        });
      });
    });
};
