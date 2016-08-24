import after from "lodash/after";

import loadScript from "./loadScript";
import { validateCallback, validateUrls } from "./validators";

const functionName = "loadScripts";
export default function loadScripts(urlOrUrls, callback) {
  const urls = validateUrls(urlOrUrls, `${functionName}: expected first argument to be a url string or an array of url strings`);
  const done = validateCallback(callback, `${functionName}: expected second argument to be a callback function (optional)`);

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
