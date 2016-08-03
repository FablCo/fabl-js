import isArray from "lodash/isArray";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";

const invalidCallbackErrorMessage = "loadScripts: expected second argument to be a callback function (optional)";
export function validateCallback(callback) {
  if (!!callback && !isFunction(callback)) {
    throw new Error(invalidCallbackErrorMessage);
  }

  const done = () => {
    if (callback) {
      callback();
    }
  };

  return done;
}

const invalidUrlsErrorMessage = "loadScripts: expected first argument to be a url string or an array of url strings";
export function validateUrls(urlOrUrls) {
  let urls;
  if (isString(urlOrUrls)) {
    urls = [ urlOrUrls ];
  } else if (isArray(urlOrUrls)) {
    urls = urlOrUrls;
  }

  // validate the urlOrUrls parameter
  if (!urls) {
    throw new Error(invalidUrlsErrorMessage);
  }
  urls.forEach((url) => {
    if (!isString(url)) {
      throw new Error(invalidUrlsErrorMessage);
    }
  });

  return urls;
}
