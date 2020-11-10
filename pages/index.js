import React from 'react';

import SplitContent from '../components/splitContent/index';

import {getPageContent} from '../utilities/cms';
import { getPageId } from '../utilities/getPageId';

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
  const entryId = getPageId('/')
  const {
    content,
  } = await getPageContent(entryId);

  return {
    props: {
      content,
    },
  }
}