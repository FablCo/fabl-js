# Fabl Javascript SDK (v1.2.1)

## Installation

*Note: this is only required when [embedding stories](#embedding-stories) or testing in a local sandbox, not within your Fabl story*

Add this script tag to the bottom of your page's `<head>`:

```html
<script type="text/javascript" src="https://d389x1p5jhf88e.cloudfront.net/v1.2.1/fabl.min.js"></script>
```

## Script Loader

HTML blocks within Fabl stories are executed on the client-side so you cannot rely on synchronous script loading and will need to load your dependencies asynchronously instead. To simplify this process, we have provided a simple script loader that downloads your dependencies asynchronously and in parallel after your story has loaded

*Note: if any of the scripts fails to load, the callback function will* ***not*** *fire*

You can load a singular dependency by calling

```javascript
Fabl.loadScripts("https://code.jquery.com/jquery-1.12.4.min.js", function() {
  // your code that requires jQuery here
});
```

You can load a set of independent dependencies by calling

```javascript
Fabl.loadScripts([
  "https://code.jquery.com/jquery-1.12.4.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"
], function() {
  // your code thar requires jQuery and lodash here
});
```

And you can load nested dependencies with nested calls

```javascript
Fabl.loadScripts("https://code.jquery.com/jquery-1.12.4.min.js", function() {
  // your code that only requires jQuery

  Fabl.loadScripts("https://code.jquery.com/ui/1.12.0/jquery-ui.min.js", function() {
    // your code that requires jQuery UI (which requires jQuery)
  });
});
```

## Event Tracking

To take advantage of Fabl's activity tracking service with your custom components, you will need to trigger client-side events where appropriate.

### `Fabl.tracking.attachToElement(element, eventType[, trigger])`

You can automatically trigger a 'Clicked Link' Fabl event in response to all user clicks on a specific element:

```javascript
var button = document.getElementById("custom_button");
Fabl.tracking.attachToElement(button, Fabl.tracking.CLICKED_LINK);
```

You can specify the desired event trigger. Otherwise, it defaults to `Fabl.tracking.CLICK`:

```javascript
var button = document.getElementById("custom_button");
Fabl.tracking.attachToElement(button, Fabl.tracking.CLICKED_LINK, Fabl.tracking.CLICK);
```

You can use jQuery elements instead of regular DOM elements:

```javascript
Fabl.loadScripts("https://code.jquery.com/jquery-1.12.4.min.js", function() {
    var $button = $("#custom_button");
    Fabl.tracking.attachToElement($button, Fabl.tracking.CLICKED_LINK);
});
```

### `Fabl.tracking.triggerEvent(eventType, element[, event])`

Alternatively, you can manaually trigger a 'Clicked Link' Fabl event in your own event handlers:

```javascript
var button = document.getElementById("custom_button");
button.addEventListener("click", function(event) {
  // your custom code...

  Fabl.tracking.triggerEvent(Fabl.tracking.CLICKED_LINK, button, event);
});
```

You can use jQuery elements instead of regular DOM elements:

```javascript
Fabl.loadScripts("https://code.jquery.com/jquery-1.12.4.min.js", function() {
    var $button = $("#custom_button");
    $button.on("click", function(event) {
        Fabl.tracking.triggerEvent(Fabl.tracking.CLICKED_LINK, $button, event);
    });
});
```

### Supported Event Types

All of the supported event types are available in `Fabl.tracking.EVENT_NAMES`

| Event Type                             | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `Fabl.tracking.CLICKED_LINK`           | For whenever a button or CTA is clicked           |

### Supported Triggers

All of the supported event triggers are available in `Fabl.tracking.EVENT_TRIGGERS`

| Trigger                                | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `Fabl.tracking.CLICK`                  | The "click" mouse event                           |


## Embedding Stories

You can embed Fabl stories on your own website using `Fabl.embedStory`.

Before getting started, you'll need to [install the Fabl.js library](#installation) on the desired page(s) of your site.

Once the library is installed you can embed a story onto the page like so:
```html
<!-- add an element for the story to be embedded within -->
<div id="fabl-story-container"></div>

<!-- add a script tag (or add the contents of this to an existing script) -->
<script type="text/javascript">
  (function() {
    var storyContainer = document.getElementById("fabl-story-container");
    // NOTE: if you prefer jQuery, you could replace this with:
    //    var storyContainer = $("#fabl-story-container").get(0);

    var storyUrl = "http://stories.domain.com/path-to-the-desired-story";

    Fabl.embedStory(storyContainer, storyUrl);
  })();
</script>
```
