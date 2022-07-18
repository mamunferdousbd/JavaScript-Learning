
// addEventListener(Click )
// anonimus function(a function without name)
var myBtn = document.querySelector("button");
myBtn.addEventListener("click", function(){
    myBtn.classList.add("my_button");
});

// addEventListener(mouseover)
var myHead = document.querySelector(".heading");
myHead.addEventListener("mouseover",function(){
    myHead.classList.add("heading_style");
});
// addEventListener(mouseout)
var myHead = document.querySelector(".heading");
myHead.addEventListener("mouseout",function(){
    myHead.classList.remove("heading_style");
});
