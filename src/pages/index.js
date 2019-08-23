import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'containers';

import { SEO } from 'components';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <h1>{data.site.siteMetadata.title}</h1>
      {data.content}
    </Layout>
  );
};

IndexPage.defaultProps = {
  data: {
    title: '',
    content: '',
  },
};

IndexPage.propTypes = {
  data: PropTypes.any,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default IndexPage;
