let n = 60;

let sumOfNumDivFour = []
let sumOfNumDivSeven = [] 

for (let i = 0; i <= n; i++){
    if (i % 4 === 0){
        sumOfNumDivFour.push(i);
       }else if(i % 7 === 0){
        sumOfNumDivSeven.push(i)
       } 
       else{

       }
    }
console.log(sumOfNumDivFour);
console.log(sumOfNumDivSeven);

