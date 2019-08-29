import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'gatsby';
import { buildBreadcrumbs, useCurrentPage } from 'silverstripe-gatsby-helpers';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ page }) => {
  // const breadcrumbs = buildBreadcrumbs(page);
  console.log(page);
  const currentPage = useCurrentPage();
  const breadcrumbs = buildBreadcrumbs(currentPage);
  console.log(breadcrumbs);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbs.map((node) => {
        console.log('asdsad');
        console.log(node);
        return (
          <Breadcrumb.Item>
            <Link to={node.silverstripe_id} key={node.silverstripe_id}>
              {node.silverstripe_id}
            </Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};


Breadcrumbs.defaultProps = {
  page: {},
};

Breadcrumbs.propTypes = {
  page: PropTypes.any,
};

export default Breadcrumbs;
