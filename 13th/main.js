// Odd and Even

// var num = 10;
// if (num % 2 == 0) {
//     document.write("Even Number");
// } else {
//     document.write("Odd Nymber");
// }

// Positive and Negative 
// var num = 0;

// if (num > 0) {
//     document.write("Positive");
// } else if (num < 0) {
//     document.write("Negative");
// } else {
//     document.write("Zero");
// }

// Latter Grade
document.write("<h2>Grading System</h2> " + "<br>");

var marks = parseFloat(prompt("Enter Your Mark:"));

if (marks >= 80 || marks <= 100) {
    document.write("A+");
} else if (marks >= 70) {
    document.write("A");
} else if (marks >= 60) {
    document.write("A-");
} else if (marks >= 50) {
    document.write("B");
} else if (marks >= 40) {
    document.write("C");
} else if (marks >= 33) {
    document.write("D");
} else {
    document.write("Fail");
}