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
				Date: Sun November 27, 2011
*/

define(['jquery', 'mk/mk.events'], function($, MKMediator){
	
	var _type = "FOOTER";
	
	function onNewsletterMouseEvents(e)
	{
		switch(e.type)
		{
			case 'click':
				if($(this).is('label'))
				{
					log($(this).siblings('#mce-EMAIL').trigger('focus'));
				}
				else
				{
					$(this).siblings('label').hide();
				}
			break;
			
			case 'focusin':
				if($(this).is('label'))
				{
					$(this).hide();
				}
				else
				{
					$(this).siblings('label').hide();
				}
			break;
			
			case 'focusout':
				if($(this).is('label'))
				{
					if($(this).siblings('input[type="email"]').val() != "")
					{
						return;
					}
					else
					{
						$(this).show();
					}
				}
				else
				{
					if($(this).val() != "")
					{
						return;
					}
					else
					{
						$(this).siblings('label').show();
					}
				}
			break;
		}
	}
	
	return {
		type: _type,
		setup: function(){
			$('label[for="mce-EMAIL"], #mce-EMAIL').bind('click focusin focusout', onNewsletterMouseEvents);
		}
	};
});