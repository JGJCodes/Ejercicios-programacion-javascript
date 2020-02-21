// JavaScript source code
var n = 20;

function insert_Row() {
    var text = '<tr><td><input id="r' + (n + 10) + '" type="text" /></td><td><input id="r' + (n + 11) + '" type="text" /></td></tr>'

    document.getElementById("sampleTable").innerHTML += text;

    n += 10;
}