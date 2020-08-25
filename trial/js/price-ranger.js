$(document).on('ready', function() {
    "use strict";
    $(function() {
        $("#price-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#price-range").slider("values", 0) +
            " - $" + $("#price-range").slider("values", 1));
    });
});