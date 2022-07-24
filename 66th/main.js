/*===========================
Default Parameter Values
===========================*/
//ES6 allows function parameters to have default values

function mamun(text = "This is a default text.") {
    console.log(`${text}`);
}
mamun("Mamun");
mamun();

/*========================
Function Rest Parameter(...parameter)
========================*/

function PrtintNumber(x, y, ...z) {
    console.log(`x= ${x}, y=${y}, z= ${z}`);
}
PrtintNumber(10, 20, 45, 55, 10, 12, 15, 15, 15, 87, 87, 848, 458656, );