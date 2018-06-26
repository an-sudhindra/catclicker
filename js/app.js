// Wait until the DO M is ready and then continue.
$(function() {
	let cat_a = new Cat();
	$("#catImage").on('click', () => {
		cat_a.imClicked();
		$('.counterSpan').html(cat_a.clickCount);
	})
}());