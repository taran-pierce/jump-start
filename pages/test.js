import React from 'react';
import Head from '../components/Head';
import SplitContent from '../components/splitContent';

import {
  getPageId,
} from '../utilities/index';
import { getEntry } from '../utilities/cms-v2';

export default function Test(props) {
  const {
    metaData,
    pageTitle,
    rawComponents,
  } = props;

  return (
    <>
      <Head
        metaData={metaData}
        pageTitle={pageTitle}
      />
      {rawComponents && rawComponents.map((component, index) => {
        const {
          fields,
        } = component;

        return (
          <SplitContent
            key={index}
            content={fields}
          />
        );
      })}
    </>
  );
}

export async function getStaticProps(ctx) {
  // get page entry id
  const entryId = getPageId('/test');

  // get content from Contentful
  const { entryData } = await getEntry(entryId);

  // get variables for page setup
  const {
    pageTitle,
    metaData,
    components,
  } = entryData;

  // extract rawComponent array
  const rawComponents = components[0];

  return {
    props: {
      pageTitle,
      metaData,
      rawComponents,
    },
  }
}