const path = require('path');
const { buildSiteTree } = require('gatsby-source-silverstripe');

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

exports.createPages = async ({ graphql, actions }) => {
  buildSiteTree({graphql, actions});

  return Promise.resolve();
};
