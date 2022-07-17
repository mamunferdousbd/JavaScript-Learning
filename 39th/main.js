var images = ["images/1.jpg","images/2.jpg","images/3.jpg"];
var img = document.getElementsByTagName("img")[0];

var count = 0;
function prev(){
    count--;
    if(count < 0 ){
        count = images.length-1 ;
        img.src= images[count];
    }
    else{
        img.src = images[count];
    }

}
function next(){
    count++;
    if(count >= images.length){
        count = 0;
        img.src= images[count];
    }
    else{
        img.src = images[count];
    }
    

}