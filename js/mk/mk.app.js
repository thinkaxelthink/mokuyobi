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
	
	var _type = "APP";

	function onCufonLoaded(MKCufon)
	{
		MKCufon.init();
		MKMediator.subscribe('FONT_REFRESH', function(){
			log('cufon refresh');
			MKCufon.publish('FONT_REFRESH');
		});
		MKMediator.subscribe('FONT_PAGE_REFRESH', function(page){
			log('cufron FONT_PAGE_REFRESH');
			MKCufon.publish('FONT_PAGE_REFRESH', page);
		});
	}

	function onHeaderReady(h)
	{
		h.setup();
	}
	
	function onProductReady(product)
	{
		product.setup();
	}
	
	function onCartPopupReady(cartpopup)
	{
		cartpopup.setup();
	}
	
	function onCartPageReady(cart)
	{
		cart.setup();
	}
	
	function onHomePageReady(home)
	{
		home.setup();
	}
	
	function onFooterReady(footer)
	{
		footer.setup();
	}

	return {
		type: _type,
		init: function() {
			require(['mk/mk.cufon'], onCufonLoaded);
			require(['mk/mk.header'], onHeaderReady);
			require(['mk/mk.cartpreview'], onCartPopupReady);
			require(['mk/mk.footer'], onFooterReady);
			
			switch(environment.page_name)
			{
				case 'Home':
					require(['mk/mk.home'], onHomePageReady);
				break;
				
				case 'Cart':
					require(['mk/mk.cart'], onCartPageReady);
				break;
				
				default: 
					require(['mk/mk.product'], onProductReady);
				break;
			}
			
			// if($('#product-content').length > 0)
			// {
			// 	require(['mk/mk.product'], onProductReady);
			// }
		}
	};
});