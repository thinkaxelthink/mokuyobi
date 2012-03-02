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
				Date: Weds October 30, 2011
*/

define(['jquery', 'mk/mk.events'], function($, MKMediator){
	
	var _type        = "PRODUCT";
	var _thumbViewer = null;
	var o            = {};

	function _init(args)
	{
		//MKMediator.subscribe('', function(){ });
		_thumbViewer = $('#product-image img');
		_thumbViewer.bind('UPDATE_VIEWER load', onViewerEvents);
		$('.product-thumbnail').bind('click', onThumbnailMouseEvents)
		.eq('0').parent().addClass('selected');
		$('#product-addtocart').bind('click PRODUCT_ADDED', onAddToCartEvents);
		
	}
	
	function onThumbnailMouseEvents(e)
	{
		switch(e.type)
		{
			case 'click':
			// only update viewer if thumb is not the currently viewed
			if(!$(this).parent().hasClass('selected'))
			{
				$(this).parent()
						.siblings('.selected')
						.removeClass('selected')
					.end()
					.addClass('selected');
					
				_thumbViewer.trigger({type:'UPDATE_VIEWER', 
					url: $(this).attr('href')});
			}
			
			break;
		}
		return false;
	}
	
	function onAddToCartEvents(e)
	{
		switch(e.type)
		{
			case 'click':
				
				$('#shopping-cart').trigger({type: 'NOTIFY_ITEMS', 
									item: {name: $('h2.product-name').text(),
										price: $('h3.price span').text().slice(0,$('h3.price span').text().lastIndexOf(".")),
										option: $('#option').children('option[selected=true]').text(),
										qty: $('#product-quantity input').val()}
				});
				
				Cart.updateFromForm('product-form', function(cart) {
					// update the cart # thru mediator
					MKMediator.publish('UPDATE_CART_COUNT', cart);
					// pop up cart bubble using 'cart' var
					// change state for add to cart button
					$(e.currentTarget).trigger('PRODUCT_ADDED');
				});
				
				return false;
		
			break;
			
			case 'PRODUCT_ADDED':
				$(this).text('it\'s in the bag');
				MKMediator.publish('FONT_REFRESH');
			break;
		}
	}
	
	function onViewerEvents(e)
	{
		switch(e.type)
		{
			case 'UPDATE_VIEWER':
				var url = e.url;
				$(this).attr('src', url);
				// $(this).fadeOut('fast', function(e){
				// 					$(this).attr('src', url);
				// 				});
			break;
			
			case 'load':
				//$(this).fadeIn('slow');
			break;
		}
	}
	
	o = {
		type: _type,
		setup: function(){
			log('product setup', this);
			_init();
		}
	};
	
	return o;
});