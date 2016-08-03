import isFunction from "lodash/isFunction";
import isString from "lodash/isString";

function appendToHead(element) {
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(element);
}

function attachScriptLoadHandler(script, callback) {
  const inOldIE = isString(script.readyState);
  if (!inOldIE) {
    script.onload = () => {
      callback();
    };

    return;
  }

  script.onreadystatechange = () => {
    const { readyState } = script;
    switch (readyState) {
      case "complete":
      case "loaded":
        script.onreadystatechange = null;
        callback();
        break;

      default:
        // do nothing
    }
  };
}

function buildScriptTag(src) {
  const script = document.createElement("script");
  script.setAttribute("async", true);
  script.setAttribute("src", src);
  return script;
}

export default function loadScript(src, callback) {
  const script = buildScriptTag(src);

  if (isFunction(callback)) {
    attachScriptLoadHandler(script, callback);
  }

  appendToHead(script);
}
