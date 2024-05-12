// console.log("________PAGE18_________");

// let num1 = Number(prompt("Enter your number here:"))
// let num2 = Number(prompt("Enter your number here:"))

// if (num1 > num2){
//     console.log("the number " + num2 + " is smaller then " + num1) 
//     console.log("the number " + num1 + " is bigger then " + num2)
// }else{
//     console.log("the number " + num2 + " is equal to the number " + num1)

// }



// console.log("________PAGE20________");

// let userInput = prompt("Enter your number between 1 - 9999:")

// console.log("Number of digits:", userInput.length);


// console.log("________PAGE27________");
// let userInputA = Number(prompt("Enter your number here:"))
// let userInputB = Number(prompt("Enter your number here:"))

// if (userInputA < userInputB) {
//     // If A is less than B, print from A to B
//     while (userInputA <= userInputB) {
//         // 1 , 5
//         console.log(userInputA);
//         userInputA++;
//     }
// } else {
//     // If B is less than or equal to A, print from A to B
//     while (userInputB <= userInputA) {
//         console.log(userInputB);
//         userInputB++;
//     }
// // }

// console.log("________PAGE27________");
// // let userInput = Number(prompt("Enter your number here:")) // 7
// // let index = 0 
// // console.log(userInput); // 7
// // userInput++; // 8
// // console.log(userInput); // 8
// // while(index >= userInput){

// //     }
    
// let userInput = Number(prompt("Enter your number here:")) // 5
// let count = 0;

// while (count <= userInput) {

//    if (count % 2 === 0) {
//     // even numbers
//     console.log(count);
//     count = count + 1;
// } else {
//     // odd numbers here
//     count = count + 1;
//    }
// }


// //page 27 (7)
// let userInput = Number(prompt("Enter your number here:"))
// let index = 0;
// while(userInput > 0){
//     console.log(userInput);
//     userInput = Number(prompt("Enter your number here:"))
//     index = index + 1
// }
// console.log(userInput);

// //page 27 (10)
// let userInput = +prompt("Enter your number:")
// console.log("the rightMost number for your input is " +userInput.toString().charAt(0));

// // //page 28-(13)
// let x = +prompt("Enter your choice:")
// let y = +prompt("Enter your choice:")
// let numberOfX = 0
// let numberOfY = 0

// while(x >= 0){
//     let rightDigit = x % 10;
//     if (rightDigit === y){
//         console.log("rightDigit" + "(" +rightDigit+")" + "===" + "d" + "(" + d + ")");
//          numberOfX++;
//     }
//     console.log(x);
//     x = parseInt(x / 10)
// }
//     console.log("your choice is " + x);
//     console.log("the number of appearance is " + y);


let totaltemp2000 = 0 
let numOfDays = 3
let numOfDaysAvg = numOfDays

while(numOfDays > 0 ){
    let currenttemp = +prompt("Enter july 2000 temp " + numOfDays )
    totaltemo2000 = totaltemp2000 + currenttemp
    numOfDays--; 
}

let avgTemp = parseInt(totaltemp2000 / numOfDays)
console.log(avgTemp);