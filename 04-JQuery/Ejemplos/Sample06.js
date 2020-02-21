$(document).ready(function(){
    
    var $h1 = $('h1');
	
	$h1.addClass('big');
	$h1.removeClass('big');
	
	if ($h1.hasClass('big')) 
	{ alert ('Big!'); }
	else
	{ alert ('Not Big!'); }
    

});
