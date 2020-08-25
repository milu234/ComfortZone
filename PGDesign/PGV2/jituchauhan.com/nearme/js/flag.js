$(document).on('ready', function() {
    "use strict";
    $('.flagstrap').flagStrap({

        inputName: 'country',
        buttonSize: "btn-xs",
        buttonType: "btn-country",
        labelMargin: "10px",
        scrollable: true,
        scrollableHeight: "280px",
        onSelect: function(value, element) {
            //
        },
        placeholder: {
            value: "",
            text: "Select Country"
        }
    });
});