
for(var i = 0; i <3; i++){
    document.querySelectorAll(".mybtn")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    audioPlay(text);
        
        
    });
}
// by calling a function

function audioPlay(text){
switch(text){
            case "A" :
                    var audio = new Audio('mp3/a.mp3');
                        audio.play();
                        break;
            case "S" :
                    var audio = new Audio('mp3/s.mp3');
                        audio.play();
                        break;
            case "T" :
                    var audio = new Audio('mp3/t.mp3');
                        audio.play();   
                        break;         
        }
}

