// general Object function 

function studentInfo(name,age){

    return{
        name:name,
        age:age,
    }
}
console.log(studentInfo("Abdullah Al Mamun",35));

// ES6 Object function allow the duplicatin ommitte
function studentInfo(name,age){

    return{
        name,
        age,
    }
}
console.log(studentInfo("Abdullah Al Aariyan",04));

// Function in Object

let message = {
    body: function(){
        return ("Hi, I am Abdullah Al Mamun");
    }
}
console.log(message.body());


// Function in Object ES6 consize Method

let msg = {
    body(){
        return ("Hi, I am Abdullah Al Mamun");
    }
}
console.log(msg.body());

// Function in Object ES6 consize Method function name by using space

let msg1 = {
    'body name'(){
        return ("Hi, I am Abdullah Al Mamun");
    }
}
console.log(msg1['body name']());