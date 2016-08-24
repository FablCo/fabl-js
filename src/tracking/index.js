import attachToElement from "./attachToElement";
import * as eventNames from "./eventNames";
import * as eventTriggers from "./eventTriggers";
import setup from "./setup";
import triggerEvent from "./triggerEvent";

module.exports = {
  ...eventNames,
  ...eventTriggers,
  attachToElement,
  setup,
  triggerEvent
};
