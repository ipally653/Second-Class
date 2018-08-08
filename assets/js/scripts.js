$(document).ready(function()
{
	$(".header-subtitle").on("click", function() {
		$(".call-to-action").slideToggle();
	});

	$(".call-button").on("click", function(e) {
		e.preventDefault();
		$(".row img").toggleClass("bigger");
		$(".column img").toggleClass("bigger")

	})
})
