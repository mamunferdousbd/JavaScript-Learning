console.clear();
// Canplay
var videos = document.querySelector("video");
videos.addEventListener('canplay',function(e){
    console.log(e);
});

// Play
var videos = document.querySelector("video");
videos.addEventListener('play',function(e){
    console.log(e);
});
//Pause
var videos = document.querySelector("video");
videos.addEventListener('pause',function(e){
    console.log(e);
});
//Playing
var videos = document.querySelector("video");
videos.addEventListener('playing',function(e){
    console.log(e);
});
//Ended
var videos = document.querySelector("video");
videos.addEventListener('ended',function(e){
    console.log(e);
});
//Volumechange
var videos = document.querySelector("video");
videos.addEventListener('volumechange',function(e){
    console.log(e);
});