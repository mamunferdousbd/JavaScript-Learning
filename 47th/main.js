// change Event will work with th following html tags
// input,select and textarea
/*============================
 Input
============================== */
console.clear(); // console clear
// const selectInput = document.querySelector("input");
// selectInput.addEventListener("change",mamun);

// function mamun(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);
    // console.log(e.target.value);
// }

/*=====================
Checkbox
==================*/
var programs = document.querySelectorAll("input[name = program]");
// console.log(programs);
Array.from(programs).map((program) => {
program.addEventListener("change", programHandeler)
    
});

function programHandeler(e){
if(e.target.checked){
    console.log(e.target.value);
}
 
}

/*=====================
Select
==================*/
var faculty = document.querySelector("#dpt");
// console.log(faculty);
// faculty.addEventListener('change',facultyHandeler);
function facultyHandeler(e){
console.log(e.target.value);
}

/*=====================
Textarea
==================*/
var message = document.querySelector("#para");
// console.log(message);
message.addEventListener('change',textHandler);

function textHandler(e){
    // console.log(e.target.value);
    // console.log(e.target.id);
    // console.log(e.target.type);
    // console.log(e.target.className);
    // console.log(e.target);
    // console.log(e);
}