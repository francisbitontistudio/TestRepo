/**
 * Created by Pater on 1/18/2017.
 */

var time=0;

setInterval(function () {

    time++;
    console.log('console check: '+ time);


    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = 'div check: '+ time;

    document.body.appendChild(div);

},1000);