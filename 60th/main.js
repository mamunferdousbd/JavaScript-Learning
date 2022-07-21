//  How to handle error in JavaScript (part-1)

// error handling ----- try, catch, finally, through.
// 
// 
// ==============Only for run time handel ==========
// ==============Will not handle sytext error ==========

/*==================================
generate Error 
==================================*/
// alert("Hello how are you?"); //code will run
// alert(X); // will not run because of error and program will stop ,not proceed next
// alert("Hello, Everybody!"); // will not run this because of error catching

try{

    // Main code will be hare (where error may come)
    alert("hello, This alert will run");
    alert(x);
    
} catch(error){
    // Handle Error
    console.log("Inside Catch Block");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); // same console.log(error);
    
    
}finally{
    alert("hello, This alert will run always");
}