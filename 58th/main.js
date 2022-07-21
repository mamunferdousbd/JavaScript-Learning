 
 
//  function autoLoading(){
//     var time = new Date();
//     var hour = time.getHours();
//     var min = time.getMinutes();
//     var sec = time.getSeconds();
//     var text = document.querySelector(".clock");
//     text.innerHTML = hour + " : "+ min + " : "+ sec ;
//     setTimeout(autoLoading,1000);  
    
//  }
//  autoLoading();


var saveBtn = document.querySelector(".save");
var text = document.querySelector(".clock");
saveBtn.addEventListener('click',clockRun);

function clockRun(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = setZero(h);
    m = setZero(m);
    s = setZero(s);
    text.innerHTML= h +" : "+m+" : "+s;
    setInterval(clockRun,1000);

}
function setZero(i){
    if(i < 10){
        i = "0"+i;
    }
    return i;
}
 
 
 
 