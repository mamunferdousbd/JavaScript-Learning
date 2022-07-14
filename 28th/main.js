

// Array Length and last Index output
var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];

var len = names.length;
document.write(len+"<br>");
document.write(names[names.length -1]);
document.write("<h2>End</h2>");
/* ================================================================
Shift(first index delete) Opposite to Pop (last index delete)
================================================================*/
document.write("<h2>Shift: first Index Delete</h2>");
var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];
document.write(names+"<br>");
names.shift();
document.write(names);
document.write("<h2>End</h2>");
/* ================================================================
UnShift(index added in the first) Opposite to Push ( index added in the last)
================================================================*/
document.write("<h2>UnShift: index added in the first</h2>");
var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];
document.write(names+"<br>");
names.unshift("Mamik");
document.write(names);
document.write("<h2>End</h2>");
/* ================================================================
Splice adds new items to an array.
================================================================*/
document.write("<h2>Splice: adds new items to an array.</h2>");
var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];
document.write(names+"<br>");
names.splice(2,0,"halim");
document.write(names+"<br>");
document.write("<h2>End</h2>");
/* ================================================================
Splice : Remove Items
================================================================*/
document.write("<h2>Splice :remove Items.</h2>");
var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];
document.write(names+"<br>");
names.splice(1,2);
document.write(names+"<br>");
document.write("<h2>End</h2>");

/* ================================================================
Slice : slices out a piece of an array.But does not remove any elements from the source array.
================================================================*/
document.write("<h2>Slice : method slices out a piece of an array.But does not remove any elements from the source array..</h2>");
var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];
document.write(names+"<br>");
var nameNew = names.slice(4);
document.write(nameNew+"<br>");
document.write(names+"<br>");
document.write("<h2>End</h2>");
/*==============================================
Sort:alphabetically
 ==============================================*/
document.write("<h2>Sort :</h2>");
var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];
document.write(names+"<br>");
names.sort();
document.write(names+"<br>");
document.write("<h2>End</h2>");
/*==============================================
Sort: Z- A
 ==============================================*/
 document.write("<h2>Sort:Z-A</h2>");
 var names = ["hasan","kamal","mamun","noor","habib","sharif","abdullah"];
document.write(names+"<br>");
names.sort();
names.reverse();
document.write(names+"<br>");
document.write("<h2>End</h2>");

/*==============================================
Sort: Number Sorting
 ==============================================*/
 document.write("<h2>Sort:Number</h2>");
 var number = [10,2,14,13,3,16,55,89,21,20];
 number.sort(function(a,b){
    return a-b;
 });
 document.write(number);