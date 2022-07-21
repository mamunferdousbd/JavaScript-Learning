

var canvas = document.querySelector("#myCanvas");
var cntx = canvas.getContext("2d");

cntx,strokeStyle ="#000000";
cntx.strokeRect(10,10,380,280);
cntx.fillStyle = "green";
cntx.fillRect(12,12,376,276);
var centerX = canvas.width/2;
var centerY = canvas.height/2;
cntx.beginPath();
cntx.arc(centerX,centerY,100,0,2*Math.PI,false);
cntx.fillStyle = "red";
cntx.fill();
cntx.stroke();