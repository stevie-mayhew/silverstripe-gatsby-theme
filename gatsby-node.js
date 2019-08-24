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
  const pageTemplate = path.resolve('src/templates/index.js');
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
query {
  allSilverStripePage {
    edges {
      node {
        ID
        Title
        MenuTitle
        Content
        URLSegment
      }
    }
  }
}
  `, { limit: 1000 })
    .then(result => {
      if (result.errors) {
        throw result.errors;
      }
      // Create pages.
      result.data.allSilverStripePage.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `${edge.node.URLSegment}`,
          component: pageTemplate,
          context: {
            ID: edge.node.ID,
          },
        });
      });
    });
};

// Set root to /home instead of top level index.jsx
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  return new Promise((resolve) => {
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/home/index.jsx`) {
      deletePage(page);

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: '/',
      });
    }

    resolve();
  });
};
