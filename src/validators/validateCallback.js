import isFunction from "lodash/isFunction";

export default function validateCallback(callback, errorMessage) {
  if (!!callback && !isFunction(callback)) {
    throw new Error(errorMessage);
  }

  const done = () => {
    if (callback) {
      callback();
    }
  };

  return done;
}
