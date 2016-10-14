import isString from "lodash/isString";

export default function validateString(string, errorMessage) {
  if (!isString(string)) {
    throw new Error(errorMessage);
  }

  return string;
}
