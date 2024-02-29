$(document).ready(function () {
    const amenityIds = {};
    $('input[type="checkbox"]').change(function () {
        const checkbox = $(this);
        const amenityId = checkbox.data('amenity_id');
        if (checkbox.is(':checked')) {
            amenityIds[amenityId] = true;
        } else {
            delete amenityIds[amenityId];
        }
        const amenitiesList = Object.keys(amenityIds).join(', ');
        $('.amenities h4').text(`Amenities: ${amenitiesList}`);
    });
})
