import attachToElement from "./attachToElement";
import * as eventNames from "../constants/eventNames";
import * as eventTriggers from "../constants/eventTriggers";
import setup from "./setup";
import triggerEvent from "./triggerEvent";

module.exports = {
  ...eventNames,
  ...eventTriggers,
  attachToElement,
  setup,
  triggerEvent
};
