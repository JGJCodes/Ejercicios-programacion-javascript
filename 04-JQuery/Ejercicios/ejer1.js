$(document).ready(function(){
    $("#btnAdd").hide();
  
    $("#btn10").click(function(){
        var num = $("li.america").find("p").text();
	num = num.replace("$","");
	num = num.replace(",","");
	var por = num*.10;
	num = num - por;
	num = num.toFixed(2);
	$("li.america").find("p").text("$"+num);
	alert(num);
    });
    $("#btnYel").click(function(){
        $("li.asia").find("h2").css("background-color", "yellow");
    });
    $("#btnDel").click(function(){
       $("li.europeSale").remove();
       $("#btnAdd").show();
       $("#btnDel").hide();
    });
    $("#btnAdd").click(function(){
      var madrid = '<li class="europeSale"> <h2>Madrid, Spain</h2> <p class="details">$1,577</p> </li>';
        $("#tours").append(madrid);
	$("#btnAdd").hide();
	$("#btnDel").show();
    });
});