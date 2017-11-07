// Accordion
$('.accordion').each(function(index, el) {
	var $that = $(this);
	var $items = $(this).find('.accordion__item');
	var $headers = $(this).find('.accordion__header');
	var $contents = $(this).find('.accordion__content');
	var speed = 300;

	$items.each(function(index, el) {
		var findActive = false;

		if (!findActive) {
			if ($(this).hasClass('accordion__item_active')) {
				$(this).children('.accordion__content').show();
				return false;
			}
		}
		else {
			$(this).removeClass('accordion__item_active');
		}
	});

	$headers.click(function(event) {
		event.preventDefault();

		var $item = $(this).parent();
		//$('video').trigger('pause');
		//$('.accordion__item_active iframe').attr('src', $('.accordion__item_active iframe').attr('src'));
		$('.accordion__item_active iframe').each(function() {
			this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		});

		if (!$item.hasClass('accordion__item_active')) {
			$items.removeClass('accordion__item_active');
			$item.addClass('accordion__item_active');
			$contents.slideUp(speed);
			$item.children('.accordion__content').slideDown(speed);
		}
		else {
			$item.children('.accordion__content').slideUp(speed);
			$item.removeClass('accordion__item_active');
		}
	});
});

if(window.location.hash.length > 0) {
	$('.accordion__item_active').removeClass('accordion__item_active');
	$('.accordion__content').hide();
	$(window.location.hash).addClass('accordion__item_active');
	$(window.location.hash).children('.accordion__content').show();
}

