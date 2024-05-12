let userInputA = prompt("what is your name:")

function checkingLength(userInputA){
    if(userInputA.toString().length > 20){
        return "Too many characters";
    }else{
        return userInputA.charAt(userInputA.toString().length -1)
    }
}
let result = checkingLength(userInputA)
console.log(result);