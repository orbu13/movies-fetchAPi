console.log("_____page 48 (1)_____");

let totalPoints = 0
let result = [[2,2],[3,7],[7,2]]
let addPoints = 0

function calculatePoints(points){
    for(let i = 0; i < points.length; i++)
    if (points[i][0] > points[i][1]){
        addPoints += 2;
        console.log(" Maccabi Tel Aviv is the winner: " + addPoints)
    }else if(points[i][0] == points[i][1]){
        addPoints += 1
        console.log("Maccabi Tel Aviv is in draw at this round: " + addPoints);
    }else{
        console.log("Maccabi has lost in this round:" + -addPoints);
    }
    
}
calculatePoints(result) 

console.log("_____page 48 (2)_____");

let x = 943560;

let = calculateNumbers = [];
let ourResult = x.toString();
let sum = 0; 
let counter = 0;

const ourNewResult = ourResult.split("")
console.log(ourNewResult);

for (let i = 0; i < ourNewResult.length; i++){
    if (ourNewResult[i] != 0){

        sum += parseInt(ourNewResult[i])
        counter += 1
    }else{
        break
    }
}
console.log(sum/counter);
console.log(sum);
console.log(counter);

console.log("_____page 48 (3)_____");

function checking (checkAmount, amountWidthdrawn){
    let check = checkAmount * 0.1;
    let fee = 0;
    if(amountWidthdrawn <= 500){
        fee = amountWidthdrawn * 0.1;
    }else{
        fee = amountWidthdrawn * 0.015
    }
    console.log("The check amount the customer requested is: " + checkAmount + " And the fee for this check the customer is required to pay is: " + fee + " The total amount the customer will pay for this withdrawal is:" + check +" + " + fee +"." );
}
