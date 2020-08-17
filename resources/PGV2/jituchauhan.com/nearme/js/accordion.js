$('.panel-heading a').click(function() {
	"use strict";
    $('.panel-heading').removeClass('active');

    //If the panel was open and would be closed by this click, do not active it
    if (!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
        $(this).parents('.panel-heading').addClass('active');
});