export const lastPathElement = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
};

export const secondToLastPathElement = (url) => {
  return url.substring(url.lastIndexOf('/',url.lastIndexOf('/')-1) + 1);
};

export const getFileName = pathname => {
  const firstSplit = pathname.split("\\");
  if (firstSplit.length) {
    const fname = firstSplit.pop();
    const secondSplit = fname.split("/");
    if (secondSplit.length) {
      return secondSplit.pop();
    }
  }

  return pathname;
};

export const getFileNameOnlyNoExt = pathname => {
  let ret = getFileName(pathname);
  return ret.substring(0, ret.lastIndexOf(".")) || ret;
};

export const getFileNameExt = filename => {
  return filename.split('.').pop().toLowerCase();
};

module.exports = {
  lastPathElement,
  secondToLastPathElement
};
