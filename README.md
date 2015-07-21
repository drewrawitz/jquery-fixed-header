# jQuery Fixed Header
A jQuery Plugin to fix a header to the top of the window and pad down the content to the height of the bar.

This will work on responsive websites where the height of the header may change.

## Installation

Include [jQuery](http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js) and the `jquery.fixedHeader.js` script:
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script src="jquery.fixedHeader.js"></script>
```

[Bower](https://github.com/bower/bower) users can get the source with:

```sh
bower install jquery-fixed-header
```

## Using jQuery.fixedHeader.js
Use the plugin like so:

```js
<script>
  $(window).load(function () {
    $("#primary-header").fixedHeader({
      contentElement: "body",
      class: "fixed-header"
    });
  });
</script>
```
There are two options to include:

* `contentElement` -- The element that should be padded down (default: 'body' )
* `class` -- An optional class that will be applied to the element this plugin is being used on (default: null)

