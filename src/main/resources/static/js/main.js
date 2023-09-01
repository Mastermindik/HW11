$(document).ready(function() {
    $.getJSON('/rate', function(data) {
        $('#rate').text(data.rates.UAH + ", " + data.rates.USD);
        $('#date').text(data.date);
    });
});