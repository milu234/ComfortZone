$(document).on('ready', function() {
    "use strict";
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            // options for image content type
            titleSrc: 'title'
        },

        // other options
    });
});