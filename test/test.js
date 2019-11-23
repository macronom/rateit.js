$(document).ready(function() {
	// use a different class to bypass automatic activation
	$('.rateit-test').rateit({min: 0, max: 4, step: 0.5, value: 3, ispreset: true, minvalue: 3, icon: "\u2605"});
	$('.rateit-test').bind('rated', function() { $('#rateresult').html("rated " + $(this).rateit('value')); });
	$('.rateit-test').bind('reset', function() { $('#rateresult').html("reset"); });
	$('.rateit-test').bind('over', function (event, value) { $('#ratehover').html("hover: " + value); } );
});
