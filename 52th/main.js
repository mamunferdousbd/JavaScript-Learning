
/*==========================================
Blur
==========================================*/
var input = document.querySelector('input');
input.addEventListener('blur', function(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase(); // to convert input value in Uppercase
});

/*==========================================
Focus
==========================================*/
var input = document.querySelector('input');
input.addEventListener('focus', function(e){
    // console.log("Focus is occured");
    // input.style.background = "tomato";
    // input.style.color = "#fff";
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
});

/*==========================================
FocusIn 
==========================================*/
// var input = document.querySelector('input');
// input.addEventListener('focusin', function(){
//     console.log("FocusIn is occured");
// });

/*========================================== 
FocusOut
==========================================*/
// var input = document.querySelector('input');
// input.addEventListener('focusout', function(){
//     console.log("FocusOut is occured");
// });