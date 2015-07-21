/* ===========================================================
 * jQuery Fixed Header
 *
 * Author: Drew Rawitz <email@drewrawitz.com>
 * http://www.drewrawitz.com
 *
 * https://github.com/drewrawitz/JS-Fixed-Header
 *
 * Options:
 *  - Content Element (string)
 *  - Class (string)
 * ========================================================== */

(function ($) {
  'use strict';

  $.fn.fixedHeader = function (options) {

    // Default options
    var defaults = {
      contentElement: 'body',
      class: 'fixed-header'
    };

    var opts = $.extend(true, {}, defaults, options);

    // Define some variables
    var $this = $(this);
    var headerHeight = $this.outerHeight();

    // If the Content Element defined does not exist, revert back to the default body tag
    var $contentElement = ( $(opts.contentElement).length ) ? $(opts.contentElement) : $(defaults.contentElement);

    // Only execute if this element exists on the page
    if (this.length) {
      this.addClass(opts.class);
      $contentElement.css('padding-top', headerHeight);
    }

    $(window).on('resize', function () {
      // if the height of the header has changed
      if (parseInt($contentElement.css('padding-top')) !== $this.outerHeight()) {

        // then let's set the padding-top value to the new header height
        $contentElement.css('padding-top', $this.outerHeight());
      }
    });

    return $this;
  };
}(jQuery));
