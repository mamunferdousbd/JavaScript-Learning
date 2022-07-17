/*===============================
Select Upways and downways 
===================================*/


// Ol is parent here and Ol has three child li li li

// Parent Select
var studentList = document.querySelector("ol");
// Child Select

studentList.children[0];
studentList.children[1];
studentList.children[2];

// Select parent from child

// Child Select
var student = document.querySelector("li");
// Parent Selection

student.parentElement;

/*===============================
Select Sideways
===================================*/
var student_1 = document.querySelector("li");
var student_2 = student_1.nextElementSibling;
var studen_3 = student_2.nextElementSibling;
// 
var student_3 = document.querySelectorAll("li")[2];
var student_2 = studen_3.previousElementSibling;
var student_1 = studen_2.previousElementSibling;
/*=================================================
Select Sideways => parentElement + Children + index
==================================================*/

var student_1 = document.querySelector("li");
var st_list = student_1.parentElement;
var student_3 = st-st_list.children[2];