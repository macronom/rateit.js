$(document).ready(function() {
	$('.rateit-test').rateit({min: 0, max: 4, step: 1, value: 3, icon: "\u2605"});
	$('.rateit-test').bind('rated', function() { $('#rateresult').html("rated " + $(this).rateit('value')); });
	$('.rateit-test').bind('reset', function() { $('#rateresult').html("reset"); });
});
