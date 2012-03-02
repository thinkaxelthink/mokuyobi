/* 
				   _     _      _     _   
				  (c).-.(c)    (c).-.(c)  
				   / ._. \      / ._. \   
				 __\( Y )/__  __\( Y )/__ 
				(_.-/'-'\-._)(_.-/'-'\-._)
				   || O ||      || O ||   
				 _.' `-' '._  _.' `-' '._ 
				(.-./`-'\.-.)(.-./`-'\.-.)
				 `-'     `-'  `-'     `-' 

					  Mokuyobi Threads
					Author: Axel Esquite
				Date: Mon November 21, 2011
*/

define(['jquery', 'mk/mk.events'], function($, MKMediator){
	
	var o = null;
	var _type = "CART_PREVIEW";
	
	function setupEvents(args)
	{
		MKMediator.subscribe('UPDATE_CART_COUNT', onCartCountUpdate);
		$('#shopping-cart').bind('NOTIFY_ITEMS', onCartCustomEvents);
	}
	
	function onCartCountUpdate(e)
	{
 		log('onCartCountUpdate', e);
		$('#shopping-cart p').text(e.item_count);
	}
	
	function onCartPreviewButtonMouseEvents(e)
	{
		log('onCartPreviewButtonMouseEvents', e);
		switch(e.type)
		{
			case 'click':
				if($(e.currentTarget).hasClass('continue-shopping'))
				{
					$(this).parent().hide();
					return false;
				}
			break;
		}
	}
	
	function onCartCustomEvents(e)
	{
		switch(e.type)
		{
			case 'NOTIFY_ITEMS':
				// display cart bubble
				log('NOTIFY_ITEMS', e);
				$('#cart-preview').css({
					top: ($(e.currentTarget).offset().top + $(e.currentTarget).outerHeight()),
					left: $(e.currentTarget).offset().left
				})
					.find('dl dt') // qty
					.text(e.item.qty)
					.siblings('dd:first')
					.text(e.item.name)
					.next()
					.text((typeof e.item.option !== 'undefined') ? e.item.option : '')
					.siblings('dd:last')
					.text(e.item.price)
				.parents('div')
				.delay(300)
				.fadeIn('fast', function(){
					log(arguments);
					$('#cart-preview').delay('3000').fadeOut('fast');
				});
				
			break;
			
		}
	}
	
	o = {
		type: _type,
		setup: function(){
			log('cartpopup setup');
			setupEvents();
			
		}
	};
		
	return o;
});