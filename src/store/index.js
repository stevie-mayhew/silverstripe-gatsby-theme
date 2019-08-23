import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { general } from 'reducers';
import PropTypes from 'prop-types';

const reducers = combineReducers({
  general,
});

// Use a persisted redux store for browser rendering
export const store = createStore(reducers);

export const ProviderWithStore = ({ element }) => <Provider store={store}>{element}</Provider>;


ProviderWithStore.propTypes = {
  element: PropTypes.any.isRequired,
};

ProviderWithStore.propTypes = {
  element: PropTypes.any.isRequired,
};
