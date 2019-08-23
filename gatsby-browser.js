/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { ProviderWithStore } from 'store';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/apollo/client';

import 'styles/index.scss';

export const wrapRootElement = ({ element }) => ( // eslint-disable-line
  <ApolloProvider client={client}>
    <ProviderWithStore element={element} />
  </ApolloProvider>
);
