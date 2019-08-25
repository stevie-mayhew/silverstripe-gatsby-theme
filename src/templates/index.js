import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'containers';

import { SEO } from 'components';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.silverStripePage.MenuTitle} />
      <h1>{data.silverStripePage.Title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.silverStripePage.Content }} />
    </Layout>
  );
};

IndexPage.defaultProps = {
  data: {},
};

IndexPage.propTypes = {
  data: PropTypes.any,
};

// export const query = graphql`
//   query($ID: Int!) {
//     silverStripePage(ID: { eq: $ID }) {
//       Title
//       Content
//       MenuTitle
//     }
//   }
// `;
export default IndexPage;
