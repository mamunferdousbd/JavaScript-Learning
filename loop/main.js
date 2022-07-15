// 1. Write a JS code to print numbers from 1 to 10
document.write("<h4>1. Write a JS code to print numbers from 1 to 10</h4>");


for (var num = 1; num <= 10; num++) {
    document.write(" " + num);
}

// 1. Write a JS code to print numbers from 1 to 10 by function
document.write("<h4>1. Write a JS code to print numbers from 1 to 10 by function </h4>");


function number() {
    for (var num = 1; num <= 10; num++) {
        document.write(" " + num);
    }


}
number();

// 2. Write a JS code to print a 2D array
document.write("<h4>2. Write a JS code to print a 2D array </h4>");

var students_info = [
    ["Anisul", 3.88],
    ["Kalam", 3.55],
    ["Shanto", 3.80],


];

console.log(students_info[0][0]);
document.write(" " + students_info[0][0]);

// console.log(students_info[0][1]);
document.write(" " + students_info[0][1]);

// console.log(students_info[1][0]);
document.write(" " + students_info[1][0]);

// console.log(students_info[1][1]);
document.write(" " + students_info[1][1]);

// console.log(students_info[2][0]);
document.write(" " + students_info[2][0]);

// console.log(students_info[2][1]);
document.write(" " + students_info[2][1]);

// 2. Write a JS code to print a 2D array by using for loop
document.write("<h4>2. Write a JS code to print a 2D array by using for loop </h4>");

var students_info = [
    ["Anisul", 3.88],
    ["Kalam", 3.55],
    ["Shanto", 3.80],


];
document.write(students_info.length);
for (var x = 0; x < students_info.length; x++) {
    for (var y = 0; y < students_info[0].length; y++) {
        document.write(students_info[x][y]);
    }
}

// 2. Write a JS code to print a 2D array by using for loop and function
document.write("<h4>2. Write a JS code to print a 2D array by using for loop and function</h4>");

function array2d(students_info) {
    for (var i = 0; i < students_info.length; i++) {
        for (var x = 0; x < students_info[0].length; x++) {
            document.write(students_info[i][x]);
        }
    }
}
var students_info = [
    ["Anisul", 3.88],
    ["Kalam", 3.55],
    ["Shanto", 3.80],


];
array2d(students_info);

// 3. Write a JS code to print Even numbers in given array 
document.write("<h4>3. Write a JS code to print Even numbers in given array</h4>");

var numbers = [10, 20, 30, 15, 12, 16, 21, 27, 33, 19, 29];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        document.write(" " + numbers[i]);
    }


}
// 3. Write a JS code to print Even numbers in given array using function
document.write("<h4>3. Write a JS code to print Even numbers in given array using function</h4>");

function evenNumbers(numbers) {
    for (var x = 0; x < numbers.length; x++) {
        if (numbers[x] % 2 == 0) {
            document.write(" " + numbers[x]);
        }
    }

}
var numbers = [10, 20, 30, 15, 12, 16, 21, 27, 33, 19, 29];
evenNumbers(numbers);

// Example 1: Display a Text Five Times
document.write("<h3> Display a Text Five Times </h3>");

for (var i = 0; i <= 4; i++) {
    document.write("I Love You " + "<br>");
}


// array Addition

var num1 = [10, 20, 30];
var num2 = [10, 200, 300, 200, 400];
var sum1 = 0;
var sum2 = 0;

for (var i = 0; i < num1.length; i++) {
    sum1 = sum1 + num1[i];

}

for (var x = 0; x < num2.length; x++) {
    sum2 = sum2 + num2[x];

}
var sumtotal = sum1 + sum2
document.write(sumtotal);