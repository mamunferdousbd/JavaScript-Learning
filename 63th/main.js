/*==================
Draw a Line
+===================*/
var myCanvas = document.querySelector(".myCanvas");
var ctx = myCanvas.getContext("2d");
// 
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
// 
ctx.moveTo(200, 0);
ctx.lineTo(0, 100);
ctx.stroke();
// 
ctx.moveTo(100, 0);
ctx.lineTo(100, 100);
ctx.stroke();
// 
ctx.moveTo(200, 50);
ctx.lineTo(0, 50);
ctx.stroke();
//
ctx.beginPath();
ctx.arc(100, 50, 40, 0, 2 * Math.PI, false);
ctx.stroke();
/*=====================
End Of Code 
=====================*/
/*==================
Draw a Circle
===================*/

var myCanvas = document.querySelector(".myCircle");
var ctx = myCanvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 50, 40, 0, 2 * Math.PI, false);
ctx.stroke();

/*=====================
End Of Code 
=====================*/
/*==================
Draw a Text
===================*/
var myText = document.querySelector(".myText");
var ctx = myText.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50, 150);

/*=====================
End Of Code 
=====================*/

/*==================
Draw a Text With Stroke
===================*/
var myTextStroke = document.querySelector(".myTextStroke");
var ctx = myTextStroke.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50, 150);

/*=====================
End Of Code 
=====================*/
/*==================
Draw a Ractangle
===================*/
var myRect = document.querySelector(".myRect");
var ctx = myRect.getContext("2d");
ctx.fillStyle = "green"; // must declear before fillRect
ctx.fillRect(10, 10, 180, 80);

/*=====================
End Of Code 
=====================*/
/*==================================
Draw a Ractangle with Linear Gradiant Fill
===================================*/
var myRectGra = document.querySelector(".myRectGra");
var ctx = myRectGra.getContext("2d");


//For linier Gradient
var gradient = ctx.createLinearGradient(10, 10, 180, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "#fff");

ctx.fillStyle = gradient; // must declear before fillRect
ctx.fillRect(10, 10, 180, 80);



/*=====================
End Of Code 
=====================*/
/*==================================
Draw a Ractangle with Radial Gradiant Fill
===================================*/
var myGraRad = document.querySelector(".myGraRad");
var ctx = myGraRad.getContext("2d");


//For radial Gradient
var gradient = ctx.createRadialGradient(70, 50, 5, 90, 60, 100);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "green");

ctx.fillStyle = gradient; // must declear before fillRect
ctx.fillRect(10, 10, 180, 80);



/*=====================
End Of Code 
=====================*/
/*==================================
Add Color and Center Text
===================================*/
var myTextCenterAlign = document.querySelector(".myTextCenterAlign")
var text = myTextCenterAlign.getContext("2d");
text.font = "30px Arial";
text.textAlign = "center";
text.fillStyle = "red"; // must be up of the output
text.fillText("Hellow World", myTextCenterAlign.width / 2, myTextCenterAlign.height / 2);



/*=====================
End Of Code 
=====================*/