$(document).on('ready', function() {
    "use strict";

    $('.selectpicker').selectpicker({
        style: 'btn-select',
        size: 8
    });

    $('.selectcurrency').selectpicker({
        style: 'currency-btn',
        size: 8
    });
});