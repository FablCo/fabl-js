import includes from "lodash/includes";

import { EVENT_NAMES } from "../constants/eventNames";

export default function validateEventName(eventName, errorMessage) {
  if (!includes(EVENT_NAMES, eventName)) {
    throw new Error(errorMessage);
  }

  return eventName;
}
