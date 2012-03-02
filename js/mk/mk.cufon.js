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

define(['jquery', 'mk/mk.events', 'libs/cufon-yui.min'], function($, MKMediator){
	
	var _type = "CUFON_MOD";

	function _init(args)
	{
		require(['libs/populaire.font'], _replaceFont);
		MKMediator.installTo(this);
		this.subscribe('FONT_REFRESH', _onRefreshRequested);
		this.subscribe('FONT_PAGE_REFRESH', _fontReplacePage);
		return this;
	}

	function _replaceFont()
	{	
		Cufon.replace('nav', {hover: true})
		.replace('.menu', {hover: true})
		.replace('#shopping-cart h5', {hover: true})
		.replace('.price-tag')
		.replace('h2.product-name')
		.replace('h3.price')
		.replace('#product-addtocart')
		.replace('#product-form label')
		.replace('#main h1')
		.replace('#cart-preview')
		.replace('table')
		.replace('#cart-footer')
		.replace('.alert-noitems a')
		.replace('#contact-form label')
		.replace('#contact p')
		.replace('#contact button');

		Cufon.now();
	}
	
	function _replaceFontCartPage()
	{
		//Cufon.replace('thead');
	}
	
	function _fontReplacePage(page_name)
	{
		log('FONT_PAGE_REFRESH', arguments);
		switch(page_name)
		{
			case 'Home':
			break;
			case 'Cart':
				_replaceFontCartPage();
			break;
		}
		
		return this;
	}
	
	function _onRefreshRequested()
	{
		Cufon.refresh();
	}

	return {
		type: _type,
		init: _init,
		replacePage: _fontReplacePage
	};
});