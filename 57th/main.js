//  JS BOM
// JS Timing events .. Method
// setTimeout(), setInterval()

/*==================
setTimeout 
==================*/
// setTimeout(() => {
// console.log("hi");
// },2000);

// setTimeout(Display,2000);
// function Display(){
//     console.log("Display Function");
// }

/*==============================================
Message will disappear after 2 sec.My thinking (concept was not right)
==============================================*/
// var btn = document.querySelector(".msg_btn");
// var msg = document.querySelector(".msg_display");
// btn.addEventListener('click',function(){
//     msg.textContent ="You have Saved Successfully";
// });
// setTimeout(msgDisplay,2000);
// function msgDisplay(){
//     msg.textContent="";
// }
/*===================================================
Message will disappear after 2 sec.Another method
===================================================*/
// var btn = document.querySelector(".msg_btn");
// var msg = document.querySelector(".msg_display");
// btn.addEventListener('click', saveUser);
// function saveUser(){
//     msg.textContent= "Your registration has Completed Successfully";

//     setTimeout( () => {
//         msg.textContent= "";
//     },2000);
// }

/*==============================
setInterval()---for repeatation 
================================*/
const  btn = document.querySelector(".msg_btn");
const msg = document.querySelector(".msg_display");
btn.addEventListener('click',CounterDisp);
function CounterDisp(){
    let count = 1;
    msg.textContent = count;

    setInterval( () =>{
        count++;
        msg.textContent= count;
    },2000);
}