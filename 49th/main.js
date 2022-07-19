
// Load
window.addEventListener('load', function(e){
    console.log(e);
});

// Unload
window.addEventListener('unload', function(e){
    console.log(e);
});

// Scroll
window.addEventListener('scroll', function(e){
    console.log("Scroll");
});
// Resize
window.addEventListener('resize', function(e){
    // console.log("resize");
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log("width : "+width+ " and height: "+height);
});
// Toggle
var details = document.querySelector("details");
details.addEventListener('toggle',function(e){
    console.log(e.target.open);
    // console.log("Toggle");
});
