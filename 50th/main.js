console.clear();

/*================== 
Click
====================*/

// var div = document.querySelector("div");
// div.addEventListener('click', function() {
// console.log("Click is Occured.");
// });

/*=================================
Double click
=================================*/ 
// var div = document.querySelector("div");
// div.addEventListener('dblclick', function() {
    // console.log("Doubleclick is Occured.");
// });

/*============================= 
Mousedown
=============================*/
// var div = document.querySelector("div");
// div.addEventListener('mousedown', function() {
    // console.log("Mousedown is Occured.");
// });


/*=======================================
Mouseup
=======================================*/
// var div = document.querySelector("div");
// div.addEventListener('mouseup', function() {
    // console.log("Mouseup is Occured.");
// });
/*===============================
MouseEnter
===============================*/

// var div = document.querySelector("div");
// div.addEventListener('mouseenter', function() {
//     console.log("MouseEnter is occured");
// });

/*===============================
MouseLeave
===============================*/

// var div = document.querySelector("div");
// div.addEventListener('mouseleave', function() {
//     console.log("MouseLeave is occured");
// });

/*===============================
Mousemove
===============================*/


// var div = document.querySelector("div");
// div.addEventListener('mousemove', function() {
//     console.log("MouseMove is occured");
// });

/*===============================
MouseOver
===============================*/
// var div = document.querySelector("div");
// div.addEventListener('mouseover', function() {
//     console.log("MouseOver is occured");
// });

/*===============================
Mousemove Details
===============================*/


// var div = document.querySelector("div");
// div.addEventListener('mousemove',function(e){
//     console.log(" OffsetX : "+e.offsetX +" , OffsetY :"+ e.offsetY);
//     // console.log(" ClientX : "+e.clientX +" , ClientY :"+ e.clientY);
// });

/*======================= 
Click Details
=======================*/ 
// var div = document.querySelector("div");
// div.addEventListener('click',function(e){
    //  console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    //  console.log(e.target.innerHTML);
    //  console.log(e.target.textContent);
    //  console.log(e.target.innerText);
// });

var buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
button.addEventListener('click',function(e){
    // console.log(e.target.textContent);
    console.log(e.target.innerHTML);
});
});
