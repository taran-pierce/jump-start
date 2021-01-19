import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

 /**
 * Head
 * Inserts <head> into page
 * @param {array} metaData - Object containing the meta data for the page
 * @param {string} metaData.canonical - String for the canonical value of the page
 * @param {string} metaData.keywords - String for keywords for the page
 * @param {string} metaData.description - String for the description of the page
 * @param {string} metaData.robots - String for the robots of the page
 * @param {string} pageTitle - String for the page title
 */

const {
  shape,
  obj,
  string,
  array,
} = PropTypes;

function Head(props) {
  const {
    metaData,
    pageTitle,
  } = props;

  const {
    canonical,
    keywords,
    description,
    robots,
  } = metaData[0]?.fields;

  return (
    <NextHead>
      {pageTitle && (
        <title>{pageTitle}</title>
      )}
      {canonical && (
        <link rel={`canonical`} href={canonical} />
      )}
      {keywords && (
        <meta name={`keywords`} value={keywords} />
      )}
      {description && (
        <meta name={`description`} value={description} />
      )}
      {robots && (
        <meta name={`robots`} value={robots} />
      )}
    </NextHead>
  );
}

Head.defaultProps = {
  metaData: []
};

Head.propTypes = {
  pageTitle: string.isRequired,
  metaData: array,
};

export default Head;