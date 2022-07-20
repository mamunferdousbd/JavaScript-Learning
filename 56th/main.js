// JS BOM

//  Popup Boxes---- alert,confirm,prompt
/*===========================
confirm
===========================*/
// function deletSomething() {
//     var value = confirm("Do you want to delet?");
//     if (value) {
//         console.log("Deleted");
//     } else {
//         console.log("Not deleted");
//     }
// }
// deletSomething();

//  Popup Boxes---- alert,confirm,prompt
/*===========================
prompt
===========================*/



function welcomeMessage() {
    var h1 = document.createElement("h1");
    var text;
    var value = prompt("Please Enter your Name: ");
    if (value == null || value == "") {
        text = "No Name Found";
    } else {
        text = "Welcome " + value;
    }
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);

}
welcomeMessage();