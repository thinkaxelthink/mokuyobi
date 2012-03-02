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

require.config({
	baseUrl: 'http://bigcartel.juliepinzur.com/js',
	paths: {
	    'mk': 'mk',
	    'libs': 'libs'
	}
});

require(['require', 'jquery', 'libs/modernizr-1.7.min', 
		'libs/respond.min', 'plugins', 'mk/mk.events', 'mk/mk.app'], 
	function(req, $,modernizer,respond,plugins, MKMediator, App) {
		
		// We load any document level dependancies here.
		App.init();
});
