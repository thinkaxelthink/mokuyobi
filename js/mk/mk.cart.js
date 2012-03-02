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
				Date: Thurs November 24, 2011
*/

define(['jquery', 'mk/mk.events'], function($, MKMediator){
	
	var _type = 'CART';
	
	function _init()
	{
		
	}
	
	function onCheckoutMouseEvents(e)
	{
		switch(e.type)
		{
			case 'click':
				window.location = "/checkout";
				return false;
			break;
		}
	}
	
	function onRemoveItemEvent(e)
	{
		switch(e.type)
		{
			case 'click':
				log(e, $(this).attr('href').replace(/\#/, ''));
				Cart.removeItem($(this).attr('href').replace(/\#/, ''), onRemoveItemResponse);
				return false;
			break;
		}
	}
	
	function onRemoveItemResponse(data)
	{
		log(data);
		window.location = '/cart';
	}
	
	return{
		type: _type,
		setup: function(){
			log(_type + ' has loaded', this, environment.page_name);
			//MKMediator.publish('FONT_PAGE_REFRESH', environment.page_name);
			$('button.checkout-btn').bind('click', onCheckoutMouseEvents);
			$('a.remove-btn').bind('click', onRemoveItemEvent);
		}
	}
});