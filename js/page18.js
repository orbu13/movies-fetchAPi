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


//page 27 (7)
let userInput = Number(prompt("Enter your number here:"))
while(userInput > 0){
    console.log(userInput);
    userInput = Number(prompt("Enter your number here:"))
}
console.log(userInput);