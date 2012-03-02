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
				Date: Weds November 23, 2011
*/

define(['jquery', 'mk/mk.events'], function($, MKMediator){
	
	var _type = "HOME";
	var o;
	var _currentCta = 0;
	
	function startSlideshow()
	{
		o.slideshowTimeout = setTimeout(function(){
			//log('timeout');
			displayCta();
		}, 4500);
	}
	
	function displayCta()
	{
		_currentCta++;
		
		clearTimeout(o.slideshowTimeout);
		startSlideshow();
		
		//$('#cta ul').children(':eq(' + (_currentCta - 1) + ')').clone(true).insertAfter($('#cta ul li:last'));
		// $('#cta ul').children().each(function(i,e){
		// 			$(this).animate({top: '-=' + $('#cta ul li:first').outerHeight(true)}, 
		// 				300, 
		// 				'swing', 
		// 				onSlideShowAnimateDone);
		// 		});
		
		if(_currentCta >= $('#cta ul').children().length)
		{
			// $('#cta ul').children(':eq(' + _currentCta + ')')
			// 			.css({top: $('#cta ul li:first').outerHeight(true)});
			_currentCta = 0;
			$('#cta ul').animate({top: 0}, 300, 'swing');
			return;
		}
		$('#cta ul').animate({top: '-=' + $('#cta ul li:first').outerHeight(true)}, 300, 'swing');
		//else
		//{
			//(-1 * ($('#cta ul li:first').outerHeight(true) * _currentCta))
			
		//}
	}
	
	function onSlideShowAnimateDone(e)
	{
		//log('onSlideShowAnimateDone', $('#cta ul').children(':eq(' + (_currentCta - 1) + ')'));
		//.css({top: $('#cta ul li:first').outerHeight(true)});
	}
	
	o = {
		type: _type,
		slideshowTimeout: null,
		setup: function(){
			//log(_type, this);
			$('#cta').fadeIn('slow', function(e){
				//$(this).find('ul').children(':eq(' + _currentCta + ')').each(function(i,e){
					//$(this).css({top: '-=' + $('#cta ul li:first').outerHeight(true)});
				//});
				startSlideshow();	
			});
		}
	};
	
	return o;
});