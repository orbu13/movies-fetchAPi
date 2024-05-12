function sumNum(num1,num2){
    const result = num1 + num2;
    return "the result of " + num1  + " + " + num2 + " = " + result
}

// let userInputA = +prompt("Enter your first number:")
// let userInputB = +prompt("Enter your second number:")

function maxNum (userInputA,userInputB){
    return "the max number between both user input is " + Math.max(userInputA,userInputB) 
}

function minNum (userInputA,userInputB){
    return "the min number between both user input is " + Math.min(userInputA,userInputB) 
}
// let a = prompt("what is your favorite fruit?")
// let b = prompt("how do your write apple?")
// let c = prompt("do you like apple pie?")

function nameOfProducts(a,b,c){
    if (a || b || c === "apple"){
        return true
    }else{
        return false
    }
}