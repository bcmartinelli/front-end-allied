import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({ title }) => (
  <NextHead>
    <title>
      {title}
    </title>
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
};

export default Head;
