import includes from "lodash/includes";

import { EVENT_TRIGGERS } from "../constants/eventTriggers";

export default function validateEventTrigger(eventTrigger, errorMessage) {
  if (!includes(EVENT_TRIGGERS, eventTrigger)) {
    throw new Error(errorMessage);
  }

  return eventTrigger;
}
