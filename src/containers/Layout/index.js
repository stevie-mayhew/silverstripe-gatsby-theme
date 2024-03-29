/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Header, Footer } from 'components';
import { Layout } from 'antd';

const { Content } = Layout;

const MainLayout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <script>
        {`
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (isIE11) {
      if (window.confirm('Your browser is not supported by this website. Try upgrading to a newer browser such as Google Chrome.')) {
        window.location = 'https://www.google.com/chrome/';
      }
    }
        `}
      </script>
    </Helmet>
    <Header />
    <Content style={{ padding: '0 50px' }}>
      {children}
    </Content>
    <Footer />
  </React.Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
