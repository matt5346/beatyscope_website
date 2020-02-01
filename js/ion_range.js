$("#price_range").ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 70000,
    from: 850,
    to: 40550,
    hide_min_max: true,
    hide_from_to: true,
    postfix: " руб",
    step: 50,
    onStart: function (data) {
        $('#rangefield1').html("от " + data.from + " руб");
        $('#rangefield2').html("до " + data.to + " руб");
    },
    onChange: function (data) {
        $('#rangefield1').html("от " + data.from + " руб");
        $('#rangefield2').html("до " + data.to + " руб");
    }
});