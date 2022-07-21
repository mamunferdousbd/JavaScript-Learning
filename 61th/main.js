// Error handling try, catch, finally
// the through statement --create custom errors

document.querySelector("#check").addEventListener('click',function(){
    var num = document.querySelector("#numInputField").value;
    

    try{
        if(num < 5){
            throw "Number is too low."
        }else if(num > 10){
            throw "Number is too high"
        }
        else{
            throw "Number is in range"
        }

    }catch(err){
        console.log(err);
    }
});