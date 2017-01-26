(($) => {
  'use strict';

  window.addEventListener('load', WindowLoad, false);

  function WindowLoad(event) {
    console.log('Loaded CTL Chrome Extension');

    setTimeout(() => {
      console.log('Adding button to enlarge all windows');
      $('<button/>')
        .text('++')
        .addClass('supchat-style')
        .insertAfter('.sup-chats h1:last button:last')
        .click(() => {
          console.log('Enlarge button clicked.');
          $('.convo-enlarge').click();
        });

    }, 5000);
  }
})(jQuery);
