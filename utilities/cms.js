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

async function getPageContent(id) {
  // get page content
  let content = await getEntry(id);

  // look to see if there are children
  const hasChildren = (content.components).length > 0;
  const childIds = [];

  // grab the ids of the child entries
  if (hasChildren) {
    (content.components).map((component) => {
      const childId = component.sys?.id;

      childIds.push(childId);
    });
  }

  // remove component references from content object
  delete content.components;

  return {
    content,
    childIds,
  };
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
  const imageId = content.image?.sys?.id;
  const image = imageId && await getAsset(imageId);

  // replace image data if found
  if (image) {
    content.image = image;
  }

  return getChildEntryContent(content)
}

module.exports = {
  getEntry,
  getAsset,
  getPageContent,
  getChildEntryData,
};