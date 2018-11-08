import parseUrl from "url-parse";
import UAParser from "ua-parser-js";

export default class Portal {
  static defaultFrameStyles = "background-color: transparent; border: none; overflow-y: hidden;";

  constructor(props) {
    const parser = new UAParser(navigator.userAgent);

    this.props = props;
    this.userAgent = parser.getResult();

    window.addEventListener('message', this.message);
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.scroll);
  }

  generateFrame = () => {
    this.frame = document.createElement("iframe");
    this.frame.setAttribute("src", this.props.url + '?frame=true');
    this.frame.setAttribute("style", Portal.defaultFrameStyles);
    this.frame.setAttribute("scrolling", "no");
    this.frame.setAttribute("width", "100%");
    this.frame.setAttribute("height", window.innerHeight);
    this.frame.setAttribute("allowFullScreen", true);
    this.frame.setAttribute("allow", "autoplay; encrypted-media; fullscreen");
    this.frame.addEventListener("load", () => {
      setTimeout(
        () => {
          this.postMessage({ name: "ping" });
          this.callIfExists(this.props.didLoad);
        }, 1000
      )
    });

    return this.frame;
  }

  applyForIOS = (func) => {
    if (this.userAgent.os.name === 'iOS') {
      func();
    }
  }

  applyExceptIOS = (func) => {
    if (this.userAgent.os.name !== 'iOS') {
      func();
    }
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

  scroll = () => {
    //this.applyForIOS(this.sendScrolledPosition);
    this.applyExceptIOS(this.moveFrame);
  }

  moveFrame = () => {
    const frameScrollTop = this.getFrameScrollTop();
    if (this.frameIsViewed()) {
      this.frame.setAttribute('style', Portal.defaultFrameStyles + "position: fixed; top: 0; width:" + this.props.embedTo.offsetWidth + "px");
      this.postMessage({ name: 'scroll', scrollPos: frameScrollTop });
    } else {
      if (this.frameHasBeenViewed()) {
        this.frame.setAttribute('style', Portal.defaultFrameStyles + "position: absolute; bottom: 0; top: auto;");
        this.postMessage({ name: 'scroll', scrollPos: frameScrollTop });
      } else {
        this.frame.setAttribute('style', Portal.defaultFrameStyles + "position: relative;");
        this.postMessage({ name: 'scroll', scrollPos: frameScrollTop });
      }
    }
  }

  sendScrolledPosition = () => {
    const scrollPos = document.getElementsByTagName('body')[0].scrollTop ||
      document.getElementsByTagName('html')[0].scrollTop;

    this.frame.contentWindow.postMessage(JSON.stringify({ name: "scroll", scrollPos }), "*");

    this.postMessage({ name: "parentWindowParams", params: { scrollTop: scrollPos } });
  }
  
  sendNotSenseOffsetTop = () => {
    const notSenseOffsetTop = this.getNonSenseOffsetTop(this.props.offsetsConfig);
  
    this.postMessage({ name: "parentWindowParams", params: { notSenseOffsetTop: notSenseOffsetTop } });
  }

  applyTotalHeightOfFrame = (data) => {
    this.applyForIOS(
      () => {
        //this.frameContentHeight = data.response;
        //this.frame.setAttribute('style', Portal.defaultFrameStyles + "height: " + data.response + "px");
        //this.frameContentHeight = data.response;
        //this.props.embedTo.setAttribute('style', "height: " + data.response + "px; position: relative");
      }
    );

    this.applyExceptIOS(
      () => {
        console.log('data.response', data.response)
        this.frameContentHeight = data.response;
        this.props.embedTo.setAttribute('style', "height: " + data.response + "px; position: relative");
      }
    );
  }

  getInnerHeight = () => {
    let notSenseOffsetTop = this.getNonSenseOffsetTop(this.props.offsetsConfig);
  
    return (window.innerHeight - (notSenseOffsetTop ? notSenseOffsetTop : 0))
  };

  message = () => {
    try {
      const $this = this;
      const data = JSON.parse(event.data);
      if (data.name === 'ping' && data.response === 'pong') {
        this.postMessage({ name: 'totalHeight' });
        this.postMessage({ name: "subscribe", subscriberName: "frame", subscriberGroup: "scroll" });
        this.applyForIOS(() => {
          this.postMessage({
            name: "parentWindowParams",
            params: {
              innerHeight: this.getInnerHeight(),
              notSenseOffsetTop: this.getNonSenseOffsetTop(this.props.offsetsConfig),
              iOS: true
            },
          });
        });
        this.applyExceptIOS(() => {
          this.postMessage({
             name: "parentWindowParams",
             params: {
               notSenseOffsetTop: this.getNonSenseOffsetTop(this.props.offsetsConfig),
               iOS: false
             },
           });
        })
        setInterval(
          () => {
            //$this.postMessage({ name: 'totalHeight' });
          }, 1000
        );
      }
      if (data.name === 'totalHeight') {
        this.applyTotalHeightOfFrame(data);
      }
      if (data.name === 'scroll') {
        window.scrollTo(0, data.scroll + this.frameOffsetTop);
      }
  
      if (data.name === 'resize') {
        window.scrollTo(0, data.scroll + this.frameOffsetTop);
      }
    } catch (exception) {
      console.log('Ignored command', event);
    }
  }

  resize = () => {
    this.frame.setAttribute("height", window.innerHeight);
    this.sendNotSenseOffsetTop()
  }
  
  getNonSenseOffsetTop = (offsetsConfig) => {
    let result = 0;

    if(Array.isArray(offsetsConfig)){
      let range = offsetsConfig.filter(el => ($(window).width() > el.from && $(window).width() <= el.to));
      result = range[0].offsetVal;
    }
    
    return result;
  }

  embed = () => {
    let notSenseOffsetTop = this.getNonSenseOffsetTop(this.props.offsetsConfig);
    this.props.embedTo.appendChild(this.generateFrame());
    this.frameOffsetTop = this.frame.offsetTop;
    this.frameOffsetTop += notSenseOffsetTop ? notSenseOffsetTop : 0;
  }

  postMessage = (postObject) => {
    const modifiedObject = postObject;
    modifiedObject.sendTime = new Date().getTime();
    this.frame.contentWindow.postMessage(JSON.stringify(modifiedObject), '*');
  }

  callIfExists = (func, params = {}) => {
    if (func) {
      func(params);
    }
  }
}
