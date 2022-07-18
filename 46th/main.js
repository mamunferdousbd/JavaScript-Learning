// Normal keypress listener

// document.addEventListener("keypress", function(event) {
// var text = event.key;
// document.querySelector("p").innerHTML = "You have pressed key " + text;
// });

// Count the letter of an text area
var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event) {
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "<h6>Total Letter is : " +
        count;
});