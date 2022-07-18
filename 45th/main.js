for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".mybtn")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        var text = text.toLowerCase();
        console.log(text);
        audioPlay(text);
        playAnimation(text);


    });
}

// Keypress Listener 
document.addEventListener("keypress", function(event) {
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
});

// by calling a function

function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio('sounds/a.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/s.mp3');
            audio.play();
            break;
        case "t":
            var audio = new Audio('sounds/t.mp3');
            audio.play();
            break;
    }
}

function playAnimation(text) {
    var btnSelect = document.querySelector("." + text);
    btnSelect.classList.add("animationStyle");

    setTimeout(function() {
        btnSelect.classList.remove("animationStyle");
    }, 1000);
    // setTimeout(() => {
    //     btnSelect.classList.remove("animationStyle");
    // }, 1000);

}