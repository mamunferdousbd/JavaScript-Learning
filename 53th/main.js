/*==============================
Copy 
==============================*/
var para = document.querySelector("p");
var input = document.querySelector("input");
input.addEventListener('copy',function(){
    para.innerText="You have copy text";
    // console.log("You have Copied");
    // var parNew = para.innerHTML= "You have copy text";
    // document.write(parNew);
});

/*==============================
Cut
==============================*/

var input = document.querySelector("input");
input.addEventListener('cut',function(){
    para.innerText="You have Cut text";
    // console.log("You have Cut");
    // var parNew = para.innerHTML= "You have Cut text";
    // document.write(parNew);
});
/*==============================
Paste
==============================*/
var input = document.querySelector("input");
input.addEventListener('paste',function(){
    para.innerText="You have Pasted text";
    // console.log("You have Pasted");
    // var parNew = para.innerHTML= "You have Pasted text";
    // document.write(parNew);
});
