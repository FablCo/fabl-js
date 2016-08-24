let _eventHandler = (eventName, element, event) => {
  console.info(`tracking: received a '${eventName}' event`);
};

export function getEventHandler() {
  return _eventHandler;
}

export function setEventHandler(eventHandler) {
  _eventHandler = eventHandler;
}
