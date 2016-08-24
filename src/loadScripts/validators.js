import isArray from "lodash/isArray";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";

export function validateCallback(callback, errorMessage) {
  if (!!callback && !isFunction(callback)) {
    throw new Error(errorMessage);
  }

  const done = () => {
    if (callback) {
      callback();
    }
  };

  return done;
}

export function validateUrls(urlOrUrls, errorMessage) {
  let urls;
  if (isString(urlOrUrls)) {
    urls = [ urlOrUrls ];
  } else if (isArray(urlOrUrls)) {
    urls = urlOrUrls;
  }

  // validate the urlOrUrls parameter
  if (!urls) {
    throw new Error(errorMessage);
  }
  urls.forEach((url) => {
    if (!isString(url)) {
      throw new Error(errorMessage);
    }
  });

  return urls;
}
