import React from 'react';

import {
  getPageContent,
  getPageId,
  testFetch,
  getContentfulEntry,
} from '../utilities/index';

import SplitContent from '../components/splitContent/index';

function HomePage(props) {
  const {
    pageTitle,
    content,
  } = props;

  const { components } = content;

  return (
    <>
      <h1>{pageTitle}</h1>
      {components && components.map((component, index) => (
        <SplitContent
          key={`${component.componentName}-${index}`}
          content={component}
        />
      ))}
    </>
  )
}

export default HomePage;

export async function getStaticProps(ctx) {
  const entryId = getPageId('/');

  const {
    content,
  } = await getPageContent(entryId);

  const test = await getContentfulEntry(entryId);

  // console.log('test: ', test);

  return {
    props: {
      content,
      test,
    },
  }
}