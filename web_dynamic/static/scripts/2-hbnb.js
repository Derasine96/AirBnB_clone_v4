$(document).ready(function () {
    $.ajax({
        url: "http://0.0.0.0:5001/api/v1/status/",
        method: 'GET',
        success: function (response) {
            if (response.status === "OK") {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        },
        error: function (xhr, status, error) {
            $('#api_status').removeClass('available');
        }
    });
});
