//  one dimensional array 


var names = ["Ashraful", "Mohammad Ullah", "Shakib", "Mashrafee", "Musfiq"]
    // General Method of Printing
document.write("<h3> General Method to Output</h3>");
document.write(" " + names[0]);
document.write(" " + names[1]);
document.write(" " + names[2]);
document.write(" " + names[3]);
document.write(" " + names[4]);
// Output by loop
document.write("<h3>Output By Loop</h3>");
for (var x = 0; x < 5; x++) {
    document.write(" " + names[x]);
}

document.write("<h3>Howm Task</h3>");
//One Dimentional Array
//Create a function called highestScore that will 
// Receive a 1D array called scores
// Return the highest score

function highestScore(scores) {
    var len = scores.length;
    var max = scores[0];
    for (var x = 0; x < len; x++) {
        if (max < scores[x]) {
            max = scores[x];
        }

    }

    return max;


}
let scores = [15, 21, 16, 30, 18];
var maxScore = highestScore(scores);
document.write("Highest Score is  = " + maxScore);