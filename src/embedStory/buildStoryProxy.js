import parseUrl from "url-parse";

const INIT_MESSAGE = "fabl:embed:init";
const HEIGHT_MESSAGE_REGEX = /^fabl:document:height\((\d+)\)$/;

function buildFrameNotifier(iframe, origin) {
  return (message) => {
    if (!iframe || !iframe.contentWindow) {
      throw new Error("Fabl.embedStory: unable to communicate with embedded story (could not find target)");
    }

    iframe.contentWindow.postMessage(message, origin);
  };
}

function buildIframe(url, height) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", true);
  iframe.setAttribute("height", `${height}px`);
  iframe.setAttribute("src", url);
  iframe.setAttribute("style", "background-color: transparent; border: none; overflow-y: hidden;");
  iframe.setAttribute("width", "100%");

  return iframe;
}

function getOrigin(url) {
  const parsedUrl = parseUrl(url);
  return parsedUrl.origin || "*";
}

export default function buildStoryProxy(storyUrl) {
  let currentHeight = 800;  // px

  const iframe = buildIframe(storyUrl, currentHeight);

  const storyOrigin = getOrigin(storyUrl);
  const sendMessage = buildFrameNotifier(iframe, storyOrigin);

  const render = (element) => {
    element.appendChild(iframe);
  };

  const resize = (height) => {
    if (height === currentHeight) {
      return;
    }

    iframe.setAttribute("height", `${height}px`);
    currentHeight = height;
  };

  // when the frame loads, notify that it is an embedded story
  iframe.addEventListener("load", () => {
    sendMessage(INIT_MESSAGE);
  });

  // handle messages from the frame
  window.addEventListener("message", (event) => {
    // ignore messages from other frames
    if (event.origin !== storyOrigin) {
      return;
    }

    if (HEIGHT_MESSAGE_REGEX.test(event.data)) {
      const matches = event.data.match(HEIGHT_MESSAGE_REGEX);
      const desiredHeight = parseInt(matches[1], 10);

      resize(desiredHeight);
    }
  });

  return {
    render,
    resize
  };
}
