const contentful = require('contentful');

const spaceId = process.env.SPACE_ID;
const envId = process.env.ENV_ID;
const accessToken = process.env.ACCESS_TOKEN;

async function getContentfulEntry(id) {
  const client = contentful.createClient({
    space: spaceId,
    environment: envId, // defaults to 'master' if not set
    accessToken: accessToken
  });

  const data = await client.getEntry(id)
    .then((entry) => {
      // console.log('entry: ', entry);

      return entry.fields;
    })
    .catch(console.error);

  const dataKeyArray = Object.keys(data);


  const filteredData = dataKeyArray.map(key => {
    return filterData(key, data);
  });

  console.log('filteredData: ', filteredData);

  return data;
}

function filterData(key, data) {
  let newObject = {};

  console.log('data[key]: ', data[key]);

  const hasSubData = typeof data[key] ===  'object';

  console.log('hasSubData: ', hasSubData);

  const subDataId = hasSubData && data[key].sys?.id;

  console.log('subDataId: ', subDataId);

  const damnRefToMany = (hasSubData && data[key].sys?.id) === undefined;

  console.log('damnRefToMany: ', damnRefToMany);

  // damnRefToMany && damnRefToMany.map(ref => {
  //   console.log('ref: ', ref);
  // });

  newObject[key] = {
    name: key,
    data: data[key]
  };

  return newObject;
}

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

  let contentKeys = Object.keys(content);

  // remove Entry Title from Contentful
  contentKeys.splice(0, 1);

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
  getContentfulEntry,
};