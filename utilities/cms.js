const spaceId = process.env.SPACE_ID;
const envId = process.env.ENV_ID;
const accessToken = process.env.ACCESS_TOKEN;
const baseUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${envId}`;

async function getEntry(id) {
  const url = `${baseUrl}/entries/${id}?access_token=${accessToken}`;
  const res = await fetch(url).catch((error) => {
    console.error('There was an error: ', error);
  });
  const content = await res.json();
  const pageContent = content.fields;

  const imageId = pageContent.image?.sys?.id;
  const image = imageId && await getAsset(imageId);

  // replace image data if found
  if (image) {
    pageContent.image = image;
  }

  return pageContent;
}

async function getAsset(id) {
  const url = `${baseUrl}/assets/${id}?access_token=${accessToken}`;
  const res = await fetch(url).catch((error) => {
    console.error('There was an error: ', error);
  });
  const content = await res.json();
  const pageContent = content.fields;

  return pageContent;
}

const childIds = [];

async function getPageContent(id) {
  // get page content
  let content = await getEntry(id);

  // look to see if there are children
  const hasChildren = (content.components).length > 0;

  // if there are children get data for them
  if (hasChildren) {
    (content.components).map((component) => {
      // get the component id
      const childId = component.sys?.id;

      // store the ids
      childIds.push(childId);
    });

    // get component data
    const components = await getComponentData();

    // remove component object with only IDs
    delete content.components;

    // replace components data
    content.components = components;
  }

  return {
    content,
  };
}

// async function to get data for children
const getComponentData = async (content) => {
  return Promise.all(childIds.map(item => getChildEntryData(item)))
}

// get the content out of the data
const getChildEntryContent = content => {
  return {
    componentName: content.componentName,
    data: content
  }
}

// async function to get child entry data
const getChildEntryData = async id => {
  const content = await getEntry(id);

  return getChildEntryContent(content)
}

module.exports = {
  getEntry,
  getAsset,
  getPageContent,
};