import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'containers';

import { SEO } from 'components';
import PropTypes from 'prop-types';

const Page = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.silverStripePage.title} />
      <h1>{data.silverStripePage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.silverStripePage.content }} />
    </Layout>
  );
};

Page.defaultProps = {
  data: {},
};

Page.propTypes = {
  data: PropTypes.any,
};

export const query = graphql`
  query($uuid: String!) {
    silverStripePage(uuid: { eq: $uuid }) {
      title
      uRLSegment
      content
    }
  }
`;


export default Page;
