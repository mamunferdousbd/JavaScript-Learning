var textArea = document.querySelector("textarea");
// textArea.addEventListener('keydown',keyDownHandler);
// textArea.addEventListener('keyup',keyUpHandler);
textArea.addEventListener('keypress',keyPressHandler);

function keyDownHandler(){
    console.log("keydown");
}
function keyUpHandler(){
    console.log("keyup");
}
function keyPressHandler(e){
    // console.log(e.key);
    // console.log(e.keyCode);
    //console.log(e.code);
    console.log(e.shiftKey);
}