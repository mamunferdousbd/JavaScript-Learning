// // Find out Large Number

// var num1 = parseFloat(prompt("Enter the First Number"));
// var num2 = parseFloat(prompt("Enter the Second Number"));
// var num3 = parseFloat(prompt("Enter the Thired Number"));

// if (num1 > num2 && num1 > num3) {
//     document.write("Larger Number is:" + num1);
// } else if (num2 > num1 && num2 > num3) {
//     document.write("Larger Number is:" + num2);
// } else {
//     document.write("Larger Number is:" + num3);
// }


// Vowel Or Consonent
var letter = prompt("Enter the Letter: ");

letter = letter.toLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    document.write("The Letter is Vowel");
} else {
    document.write("The Letter is Consonent");

}