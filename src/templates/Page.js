/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  Header,
  Footer,
  SideMenu,
  Breadcrumbs,
} from 'components';
import { Layout } from 'antd';
import { useCurrentPage } from 'silverstripe-gatsby-helpers';

const { Content } = Layout;

const BasePage = ({ children }) => (
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
    <Layout>
      <Header />
      <Layout>
        <SideMenu page={useCurrentPage()} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumbs page={useCurrentPage()} />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    <Footer />
  </React.Fragment>
);

BasePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasePage;
