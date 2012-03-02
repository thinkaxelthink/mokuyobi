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
	
	var _type = "HEADER";

	function _init(args)
	{
		return this;
	}

	function onNavMouseEvents(e)
	{
		var mask_name, navHash;
		if($(this).is('nav li'))
		{
			switch(e.type)
			{
				case 'mouseover':
					if(!$(this).hasClass('is_down'))
					{
						mask_name = $(this).attr('class')
							.replace($(this).children().text().toLowerCase() + " ", '')
							.replace(/_/gi, '-');
						
						$(this).css({
							position: 'relative',
							left: '2px',
							backgroundPosition: '-1px 180px',
							backgroundImage: 'url(http://bigcartel.juliepinzur.com/img/header-' + mask_name + '-hover.png)'
						});
						$('<div class="shadow"></div>').appendTo($(this).parent())
							.css({width: $(this).width(), left: $(this).offset().left - 3});
					}
				break;

				case 'mouseout':
					if(!$(this).hasClass('is_down'))
					{
						mask_name = $(this).attr('class')
							.replace($(this).children().text().toLowerCase() + " ", '')
							.replace(/_/gi, '-');
						//log($(this));
					
						//log('1','mouseout');
						$(this).css({
							position: 'relative',
							left: '0px',
							backgroundPosition: '0px 181px',
							backgroundImage: 'url(http://bigcartel.juliepinzur.com/img/header-' + mask_name + '.png)'
						});
					
						$(this).parent().find('div.shadow').remove();
					}
				break;

				case 'click':
					$(this)
						.parent()
							.find('div.shadow')
							.remove()
						.end()
					.end()
						.siblings('.is_down')
						.removeClass('is_down')
						.attr('style', '');

					mask_name = $(this).attr('class')
						.replace($(this).children().text().toLowerCase() + " ", '')
						.replace(/_/gi, '-');
					//log(mask_name);

					$(this).css({
						position: 'relative',
						left: '2px',
						backgroundPosition: '-1px 180px',
						backgroundImage: 'url(http://bigcartel.juliepinzur.com/img/header-' + mask_name + '-selected.png)'
					})
					.addClass('is_down');

					if($('.selected-shadow').length <= 0)
					{
						$('<div class="selected-shadow"></div>').appendTo($(this).parent())
							.css({width: $(this).width(), left: $(this).offset().left - 3});
					}
					else
					{
						log('.selected-shadow length is > 0', $('.selected-shadow'));
						$('.selected-shadow').css({width: $(this).width(), left: $(this).offset().left - 3});
					}
					if(window.location.pathname != $(this).find('a').attr('href'))
					{
						window.location = $(this).find('a').attr('href');
					}
					
				break;
			}
		}
		else
		{
			switch(e.type)
			{
				case 'mouseover':
					if(!$(this).parent().hasClass('is_down'))
					{
						mask_name = $(this).parent().attr('class')
							.replace($(this).parent().children().text().toLowerCase() + " ", '')
							.replace(/_/gi, '-');
						
						$(this).parent().css({
							position: 'relative',
							left: '2px',
							backgroundPosition: '-1px 180px',
							backgroundImage: 'url(http://bigcartel.juliepinzur.com/img/header-' + mask_name + '-hover.png)'
						});
						$('<div class="shadow"></div>').appendTo($(this).parent().parent())
							.css({width: $(this).parent().width(), left: $(this).parent().offset().left - 3});
					}
				break;

				case 'mouseout':
					if(!$(this).parent().hasClass('is_down'))
					{
						mask_name = $(this).parent().attr('class')
							.replace($(this).parent().children().text().toLowerCase() + " ", '')
							.replace(/_/gi, '-');
					
						//log('2','mouseout', $(this));
						$(this).parent().css({
							position: 'relative',
							left: '0px',
							backgroundPosition: '0px 181px',
							backgroundImage: 'url(http://bigcartel.juliepinzur.com/img/header-' + mask_name + '.png)'
						});
					
						$(this).parent().parent().find('div.shadow').remove();
					}
				break;

				case 'click':
					$(this)
						.parent()
							.parent()
								.find('div.shadow')
								.remove()
							.end()
						.end()
							.siblings('.is_down')
							.removeClass('is_down')
							.attr('style', '');

					mask_name = $(this).parent().attr('class')
						.replace($(this).parent().children().text().toLowerCase() + " ", '')
						.replace(/_/gi, '-');
					//log(mask_name);

					$(this).parent().css({
						position: 'relative',
						left: '2px',
						backgroundPosition: '-1px 180px',
						backgroundImage: 'url(http://bigcartel.juliepinzur.com/img/header-' + mask_name + '-selected.png)'
					})
					.addClass('is_down');;
					if($('.selected-shadow').length <= 0)
					{
						$('<div class="selected-shadow"></div>').appendTo($(this).parent().parent())
							.css({width: $(this).parent().width(), left: $(this).parent().offset().left - 3});
					}
					else
					{
						//log('.selected-shadow length is > 0', $('.selected-shadow'));
						$('.selected-shadow').css({width: $(this).parent().width(), left: $(this).parent().offset().left - 3});
					}
				break;
			}
		}
	}
	
	function onProductCategoryResponse(response)
	{
		$('#main').children().remove();
		
		if(typeof response !== 'undefined'
			&& response.length > 0)
		{
			if($('#products').length <= 0) { $('#main').append('<ul id="products"></ul>'); }
			
			for(var i=0; i<response.length; i++)
			{
				$('<li id="' + response[i].id + '" class="product"><div class="price-tag">' 
				+ environment.currency_sign + response[i].default_price + '</div>'
				+ '<a href="' + response[i].url + '"><img width="200" src="' 
				+ response[i].images[0].url + '" /></a><h4><a href="' + response[i].url + '">' 
				+ response[i].name + '</a></h4></li>').appendTo('#products');
			}
			
			MKMediator.publish('FONT_REFRESH');
		}
		else
		{
			// this section doesnt have anything
			$('<h5>Coming soon...</h5>').appendTo('#main');
		}
	}

	return {
		type: _type,
		setup: function(){
			
			// setup events for header elements
			$('nav li, nav a').bind('mouseover mouseout mousedown click', onNavMouseEvents);

			if(window.location.pathname != "/")
			{
				setTimeout(function(){
					$('nav li.' + (window.location.pathname).replace('/', '')).trigger('click');
				}, 600);
			}
			// initialize and display
			//$('nav').delay(100).slideDown('slow',function(){ $(this).css({display: 'block'})});
		}
	};
});