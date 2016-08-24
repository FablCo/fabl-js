import { getEventHandler } from "./eventHandler";
import { CLICK } from "./eventTriggers";
import {
  validateElement,
  validateEventName,
  validateEventTrigger
} from "./validators";

const functionName = "tracking.attachToElement";
export default function attachToElement(_element, _eventName, _eventTrigger = CLICK) {
  const element = validateElement(_element, `${functionName}: expected first argument to be a DOM element`);
  const eventName = validateEventName(_eventName, `${functionName}: expected second argument to be a valid event name`);
  const eventTrigger = validateEventTrigger(_eventTrigger, `${functionName}: expected third argument to be a valid event trigger (default: 'click'`);

  const handler = (event) => {
    const handleEvent = getEventHandler();
    handleEvent(eventName, element, event);
  };

  element.addEventListener(eventTrigger, handler);
}
