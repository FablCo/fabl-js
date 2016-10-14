import isArray from "lodash/isArray";

import validateString from "./validateString";

export default function validateUrls(urlOrUrls, errorMessage) {
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
    validateString(url, errorMessage);
  });

  return urls;
}
