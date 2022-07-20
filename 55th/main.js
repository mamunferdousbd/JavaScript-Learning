//  BOM Browser Object Model
// Window Object
// Location Object

console.clear();




/*========================
Location
 ========================*/

// console.log(location);
/*========================
href
========================*/
// console.log(location.href);

/*======================== 
hostname
 ========================*/

// console.log(window.location.hostname); // window.location = location

/*======================== 
protocol
 ========================*/
// console.log(location.protocol);
/*======================== 
Host
 ========================*/
// console.log(location.host);
/*==============================
origin
===============================*/
// console.log(location.origin);

/*==============================
Port
===============================*/
// console.log(location.port);

/*==============================
Pathname
===============================*/
// console.log(location.pathname);

/*==============================
document.write using for output
==================================*/

var loactionDiv = document.querySelector(".location_div");

var para1 = loactionDiv.children[0];
para1.textContent = location.href;

var para2 = loactionDiv.children[1];
para2.textContent = location.host;

var para3 = loactionDiv.children[2];
para3.textContent = location.hostname;

var para4 = loactionDiv.children[3];
para4.textContent = location.pathname;

var para5 = loactionDiv.children[4];
para5.textContent = location.port;

var para6 = loactionDiv.children[5];
para6.textContent = location.protocol;
var btn = document.querySelector(".btn");
btn, addEventListener('click', function() {
    location.assign("https://mamunferdousbd.com");
});