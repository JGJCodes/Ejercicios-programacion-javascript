
$(document).ready(function(){
    $("button").click(function(){
       $("span").parent().css({"color": "red", "border": "2px solid red"});   
       $("li").parent().css({"color": "blue", "border": "2px solid blue"});
       $("ul").parent().css({"color": "green", "border": "2px solid green"});
    });
});

