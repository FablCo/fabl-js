import includes from "lodash/includes";
import isElement from "lodash/isElement";

import { EVENT_NAMES } from "./eventNames";
import { EVENT_TRIGGERS } from "./eventTriggers";

export function validateElement(element, errorMessage) {
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

export function validateEventName(eventName, errorMessage) {
  if (!includes(EVENT_NAMES, eventName)) {
    throw new Error(errorMessage);
  }

  return eventName;
}

export function validateEventTrigger(eventTrigger, errorMessage) {
  if (!includes(EVENT_TRIGGERS, eventTrigger)) {
    throw new Error(errorMessage);
  }

  return eventTrigger;
}
