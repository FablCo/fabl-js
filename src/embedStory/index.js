import { validateElement, validateString } from "../validators";
import buildStoryProxy from "./buildStoryProxy";

const functionName = "embedStory";
export default function embedStory(_element, _storyUrl) {
  const element = validateElement(_element, `${functionName}: expected first argument to be a DOM element`);
  const storyUrl = validateString(_storyUrl, `${functionName}: expected second argument to be a Fabl story URL`);

  const storyProxy = buildStoryProxy(storyUrl);
  storyProxy.render(element);
}
