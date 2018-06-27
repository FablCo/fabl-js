import parseUrl from "url-parse";

export default class Portal {
  static defaultFrameStyles = "background-color: transparent; border: none; overflow-y: hidden;";

  constructor(props) {
    this.props = props;
    this.listenScroll();
    this.listenMessage();
  }

  generateFrame = () => {
    this.frame = document.createElement("iframe");
    this.frame.setAttribute("src", this.props.url + '?frame=true');
    this.frame.setAttribute("style", Portal.defaultFrameStyles);
    this.frame.setAttribute("scrolling", "no");
    this.frame.setAttribute("width", "100%");
    this.frame.setAttribute("height", window.innerHeight);
    this.frame.addEventListener("load", () => {
      this.postMessage({ name: "ping" });
      this.postMessage({ name: "subscribe", subscriberName: "frame", subscriberGroup: "scroll" });
    });

    return this.frame;
  }

  getOrigin = (url) => {
    const parsedUrl = parseUrl(url);
    return parsedUrl.origin || "*";
  }

  getScrollTop = () => {
    const htmlScrollTop = document.getElementsByTagName('html')[0].scrollTop;
    const bodyScrollTop = document.getElementsByTagName('body')[0].scrollTop;

    return htmlScrollTop || bodyScrollTop;
  }

  getFrameScrollTop = () => {
    const scrollPos = this.getScrollTop() - this.frameOffsetTop;

    return scrollPos < 0 ? 0 : scrollPos;
  }

  frameIsViewed = () => (
    this.getScrollTop() >= this.frameOffsetTop &&
      this.getScrollTop() <= this.frameContentHeight - window.innerHeight + this.frameOffsetTop
  )

  frameHasBeenViewed = () => (
    this.getScrollTop() >= this.frameContentHeight - window.innerHeight + this.frameOffsetTop
  )

  listenScroll = () => {
    window.addEventListener('scroll', () => {
      const frameScrollTop = this.getFrameScrollTop();

      if (this.frameIsViewed()) {
        this.frame.setAttribute('style', Portal.defaultFrameStyles + "position: fixed; top: 0; width:" + this.props.embedTo.offsetWidth + "px");
        this.postMessage({ name: 'scroll', scrollPos: frameScrollTop });
      } else {
        if (this.frameHasBeenViewed()) {
          this.frame.setAttribute('style', Portal.defaultFrameStyles + "position: absolute; bottom: 0; top: auto;");
        } else {
          this.frame.setAttribute('style', Portal.defaultFrameStyles + "position: relative;");
          this.postMessage({ name: 'scroll', scrollPos: frameScrollTop });
        }
      }
    });
  }

  listenMessage = () => {
    window.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.name === 'ping' && data.response === 'pong') {
          this.postMessage({ name: 'prepareForIframe' });
          this.postMessage({ name: 'totalHeight' });
        }
        if (data.name === 'totalHeight') {
          this.frameContentHeight = data.response;
          this.props.embedTo.setAttribute('style', "height: " + data.response + "px; position: relative");
        }
        if (data.name === 'scroll') {
          window.scrollTo(0, data.scroll + this.frameOffsetTop);
        }
      } catch (exception) {
        console.log('Ignored command', event);
      }
    });
  }

  embed = () => {
    this.props.embedTo.appendChild(this.generateFrame());
    this.frameOffsetTop = this.frame.offsetTop;
  }

  postMessage = (postObject) => {
    this.frame.contentWindow.postMessage(JSON.stringify(postObject), '*');
  }
}