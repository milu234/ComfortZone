$(document).on('ready', function() {
    "use strict";
    $('#demo').daterangepicker({
        "startDate": "12/24/2017",
        "endDate": "12/30/2017"
    }, function(start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });
});