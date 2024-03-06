let myName = "Orel"
let myLastName = "Butbul"
let myAge = 28 

const myInfo = "hey my name is " + myName + " my last name is " + myLastName +  " and im " + myAge + " years old."

console.log(myInfo);


// var/let/const

// text - "text" / 'text' / `text` => they are all strings
// number - 1,2,3.4, 
// boolean - true/false 
// null/undefined/object

// var => let/const

var userName = "adi.s@gmail.com";
var age = 25;
var isSmoking = true;


console.log("the user name:" + userName + "age is: " + age + " smoking :" + isSmoking)

//Gal task: num4
var num = 150;
var asarot = parseInt(num / 60) // parseInt(2) => 2 , parseInt(2.1) => 2 , parseInt(2.5) => 2 
var ahadot = num % 60 ;
var newNum = (ahadot + 60) + asarot
console.log("the new movie is " + asarot + ":" +  ahadot + " hours. which are one hundred and fifty minutes. " )


// My task num5
let myNum = 12345
let myNewNum = myNum.toString().charAt(4)

console.log("at this school task we were required to get the rightmost number as a string of digits. and the number is: " + myNewNum);