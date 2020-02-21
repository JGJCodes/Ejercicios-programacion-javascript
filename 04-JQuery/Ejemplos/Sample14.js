
$(document).ready(function(){
    $("button").click(function(){
       $("h2").siblings().css({"color": "red", "border": "2px solid red"});
       $("h2").prevAll().css({"color": "green", "border": "2px solid green"});
    });
});
