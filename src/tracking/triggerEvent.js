import { getEventHandler } from "./eventHandler";
import {
  validateElement,
  validateEventName
} from "../validators";

const functionName = "tracking.triggerEvent";
export default function triggerEvent(_eventName, _element, event = null) {
  const eventName = validateEventName(_eventName, `${functionName}: expected first argument to be a valid event name`);
  const element = validateElement(_element, `${functionName}: expected second argument to be a valid element`);

  const handleEvent = getEventHandler();
  handleEvent(eventName, element, event);
}
