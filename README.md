# jQuery Fixed Header
A jQuery Plugin to fix a header to the top of the window and pad down the content to the height of the bar.

This will work on responsive websites where the height of the header may change.

[See Demo](http://drewrawitz.github.io/demo/jquery-fixed-header/)

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
      class: "fixed-header",
      breakpoint: 400
    });
  });
</script>
```
There are three options to include:

* `contentElement` -- **string**: The element that should be padded down (default: 'body' )
* `class` -- **string**: An optional class that will be applied to the element this plugin is being used on (default: null)
* `breakpoint` -- **integer**: An optional breakpoint that you can use. The fixed header will not be applied if the browser width is less than this value (default: null)

### CSS
Make sure you have the appropriate styles in your stylesheet for when your class gets applied.  If you choose to add a class called **fixed-header**, then you should have something like this:

```css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```
