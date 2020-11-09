import React from 'react';

import {
  getPageContent,
  getChildEntryData,
} from '../utilities/cms';

import SplitContent from '../components/splitContent/index';

function HomePage(props) {
  const { pageTitle } = props.content;
  const { components } = props;

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

export async function getStaticProps(context) {
  // TODO should be in a config file
  const entryId = '5td3EthQyEbrg4ZnGG14k';

  const {
    content,
    childIds,
  } = await getPageContent(entryId);

  // async function to get data for children
  const getData = async () => {
    return Promise.all(childIds.map(item => getChildEntryData(item)))
  }

  // set the children data to be feed in as props
  const components = await getData().then(data => {
    return data;
  })

  return {
    props: {
      content,
      components,
    },
  }
}