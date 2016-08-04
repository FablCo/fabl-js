# Fabl Javascript SDK (v1.0.1)

## Installation (for local development only)

Add this script tag to the bottom of your sandbox's `<head>`:

```html
<script type="text/javascript" src="https://d389x1p5jhf88e.cloudfront.net/v1.0.1/fabl.min.js"></script>
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
