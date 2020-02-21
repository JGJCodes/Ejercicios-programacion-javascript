
$(document).ready(function(){
    $("button").click(function(){
       $("div").children().css({"color": "red", "border": "2px solid red"});
       $("p").children().css({"color": "orange", "border": "2px solid orange"});
       
       $("#span1").css({"color": "pink", "border": "2px solid pink"});
    });
});
