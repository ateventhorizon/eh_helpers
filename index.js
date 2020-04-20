const lastPathElement = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
};

const secondToLastPathElement = (url) => {
  return url.substring(url.lastIndexOf('/',url.lastIndexOf('/')-1) + 1);
};

module.exports = {
  lastPathElement,
  secondToLastPathElement
};
