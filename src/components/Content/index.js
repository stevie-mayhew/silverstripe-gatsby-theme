import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ content }) => (
  <div
    className="l-section__content"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
