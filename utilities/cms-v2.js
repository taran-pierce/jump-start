const contentful = require('contentful');

const spaceId = process.env.SPACE_ID;
const envId = process.env.ENV_ID;
const accessToken = process.env.ACCESS_TOKEN;

// clean up data
function filterData(data) {
  let allData = [];

  // I didnt clean up shit
  switch (typeof data) {
    case 'object':
      allData.push(data);
      break;
    case 'array':
      allData.push(data);
      break;
    case 'string':
      // ok I returned this one different
      return data;
      break;
  }

  return allData;
}

// get Contentful data for a single entry
async function getEntry(entryId) {
  const client = contentful.createClient({
    accessToken: accessToken,
    space: spaceId,
    environment: envId,
  })

  const data = client.getEntry(entryId)
    .then(entry => {
      // base level data about entry is in two spots
      // sys and fields
      // TODO may not need sys
      const {
        sys,
        fields,
      } = entry;

      // create empty entryData object
      let entryData = {};

      // loop through the fields and get data for each one
      Object.keys(fields).forEach(field => {
        // filter through the data to clean it up
        const data = filterData(fields[field]);

        if (data) {
          // store data so that it matches field name
          entryData[field] = data;
        }
      });

      return {
        entryData,
      };
    });

  return data;
}

module.exports = {
  getEntry,
};