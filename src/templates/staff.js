import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'containers';

import { SEO } from 'components';
import PropTypes from 'prop-types';

const StaffPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.silverStripeStaffPage.title} />
      <h1>{data.silverStripeStaffPage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.silverStripeStaffPage.content }} />
    </Layout>
  );
};

StaffPage.defaultProps = {
  data: {},
};

StaffPage.propTypes = {
  data: PropTypes.any,
};

export const query = graphql`
  query($uuid: String!) {
    silverStripeStaffPage(uuid: { eq: $uuid }) {
      title
      uRLSegment
      content
      StaffMembers {
        name
        jobTitle
      }
    }
  }
`;

// export const query = graphql`
//  query {
//   __schema {
//     types {
//       name
//       fields {
//         name
//       }
//     }
//   }
//
//
// }
// `;

export default StaffPage;
