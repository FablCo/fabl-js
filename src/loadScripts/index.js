import after from "lodash/after";

import loadScript from "./loadScript";
import { validateCallback, validateUrls } from "./validators";

export default function loadScripts(urlOrUrls, callback) {
  const urls = validateUrls(urlOrUrls);
  const done = validateCallback(callback);

  // handle an empty set of dependencies
  const urlCount = urls.length;
  if (urlCount === 0) {
    setTimeout(done, 0);
    return;
  }

  // set up tracking across all of the requested scripts
  const handleLoad = after(urlCount, done);
  urls.forEach((url) => loadScript(url, handleLoad));
}
