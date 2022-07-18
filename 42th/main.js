
var len = document.querySelectorAll(".my_btn").length;

for(var i = 0 ; i <=len; i++ ){
    var my_button = document.querySelectorAll(".my_btn")[i];
my_button.addEventListener("click",function(){
    var text = this.innerHTML;
    document.querySelectorAll("h2")[1].innerHTML =text+" is clicked";
});

}


