import { validateElement, validateString } from "../validators";
import Portal from "./Portal";

const functionName = "embedStory";
export default function embedStory(_element, _storyUrl, params = {}) {
  const element = validateElement(_element, `${functionName}: expected first argument to be a DOM element`);
  const storyUrl = validateString(_storyUrl, `${functionName}: expected second argument to be a Fabl story URL`);

  const portal = new Portal({ url: storyUrl, embedTo: element, ...params });
  portal.embed();
}
