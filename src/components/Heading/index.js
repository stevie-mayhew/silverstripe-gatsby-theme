import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Heading = ({ tag, text }) => {
  const words = text.split(' ');

  return (
    <h1 className={`c-heading ${tag}`}>
      {words.map(word => (
        <span key={word}>{word}</span>
      ))}
    </h1>
  );
};

Heading.defaultProps = {
  tag: 'h1',
};

Heading.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Heading;
