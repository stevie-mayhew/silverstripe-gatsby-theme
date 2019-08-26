import React from 'react';

import { Layout } from 'containers';
import { SEO } from 'components';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found</h1>
    <p>Sorry, the page you are looking for does not exist</p>
  </Layout>
);

export default NotFoundPage;
