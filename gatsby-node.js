const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
