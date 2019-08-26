import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'containers';

import { Content, SEO } from 'components';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.silverStripeHomePage.title} />
      <h1>{data.silverStripeHomePage.title}</h1>
      <Content content={data.silverStripeHomePage.content} />
    </Layout>
  );
};

IndexPage.defaultProps = {
  data: {},
};

IndexPage.propTypes = {
  data: PropTypes.any,
};

export const query = graphql`
  query($uuid: String!) {
    silverStripeHomePage(uuid: { eq: $uuid }) {
      title
      uRLSegment
      content
    }
  }
`;

export default IndexPage;
