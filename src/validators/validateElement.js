import isElement from "lodash/isElement";

export default function validateElement(element, errorMessage) {
  let domElement = element;

  // extract the underlying DOM element if the provided element is wrapped in jQuery
  if (element && element[0]) {
    domElement = element[0];
  }

  if (!isElement(domElement)) {
    throw new Error(errorMessage);
  }

  return domElement;
}
