import { pages } from '../contentful.json';

function getPageId(route) {
  const id = pages[route];

  return id;
}

module.exports = {
  getPageId,
}