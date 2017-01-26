(($) => {
  'use strict';

  window.addEventListener('load', WindowLoad, false);

  function WindowLoad(event) {
    setTimeout(() => {
      $('<button/>')
        .text('++')
        .addClass('supchat-style')
        .insertAfter('.sup-chats h1:last button:last')
        .click(() => {
          $('.convo-enlarge').click();
          alert(1);
        });

    }, 5000);
  }
})(jQuery);
