/*==================
 Digit Spelling 
 
 ===================*/

// var digit = prompt("Enter a digit: ");

// if (digit == 0) {
//     document.write("Zero");
// } else if (digit == 1) {
//     document.write("One");
// } else if (digit == 2) {
//     document.write("Two");
// } else if (digit == 3) {
//     document.write("Three");
// } else if (digit == 4) {
//     document.write("Four");
// } else if (digit == 5) {
//     document.write("Five");
// } else if (digit == 6) {
//     document.write("Six");
// } else if (digit == 7) {
//     document.write("Seven");
// } else if (digit == 8) {
//     document.write("Eight");
// } else if (digit == 9) {
//     document.write("Nine");
// } else {
//     document.write("Invalid Digit");
// }

/* =====================

By Using Switch
======================*/

// var digit = prompt("Enter a Digit");
// switch (digit) {
//     case "0":
//         document.write("Zero");
//         break;
//     case "1":
//         document.write("One");
//         break;
//     case "2":
//         document.write("Two");
//         break;
//     case "3":
//         document.write("Three");
//         break;
//     case "4":
//         document.write("Four");
//         break;
//     case "5":
//         document.write("Five");
//         break;
//     case "6":
//         document.write("Six");
//         break;
//     case "7":
//         document.write("Seven");
//         break;
//     case "8":
//         document.write("Eight");
//         break;
//     case "9":
//         document.write("Nine");
//         break;
//     default:
//         document.write("Invalid");


// }

/* =====================

Home Work by using Switch check the letter is vowel or consonent
======================*/

document.write("<h2>Home Work.</h2>");

var letter = prompt("enter The Letter: ");
letter = letter.toLowerCase();

switch (letter) {
    case "a":
        document.write("Vowel");
        break;
    case "e":
        document.write("Vowel");
        break;
    case "i":
        document.write("Vowel");
        break;
    case "o":
        document.write("Vowel");
        break;
    case "u":
        document.write("Vowel");
        break;
    default:
        document.write("Consonent");

}