var div = document.querySelector(".myDiv");
var para = document.querySelector("#drag1");

para.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text', e.target.id);
});
div.addEventListener("dragover", function(e) {
    e.preventDefault();
})
div.addEventListener("drop", function(e) {
    var id = e.dataTransfer.getData('text');
    console.log(id);
    div.appendChild(document.getElementById(id))
    e.preventDefault();
});