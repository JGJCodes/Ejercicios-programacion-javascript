$(document).ready(function(){
    $("p").click(function(){

		if ($(this).attr('id') != "p1" )
		{  $(this).hide();  }
        
    });

	$("#p1").mouseenter(function(){
        alert("You entered p1!");
    });
});
