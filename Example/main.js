let myCanVas = document.querySelector(".myCanVas").getContext("2d");
myCanVas.font = "50px Arial";

myCanVas.fillStyle = "#000";
myCanVas.fillRect(0, 0, 300, 200);
myCanVas.fillStyle = "red";
myCanVas.fillText("Mamun", 100, 100, 150);
myCanVas.ellipse()