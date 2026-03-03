/* 
   Global Array to Hold numbers for exercises listed below...
*/

const numbers = [4, 7, 10, 13, 18, 21, 24, 29];

/* 
  Part 1 - Filter Event Numbers - evenNumbers

*/

const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);


/* 
  Part 2 - Double the Numbers
*/

const doubledNumbers = numbers.map((val) => val * 2);
// console.log(doubledNumbers);


/*
  Part 3 - Square ONLY the Odd Numbers
*/

const squaredOdds = numbers.filter((num) => num % 2 === 1).map(num => num ** 2);
// console.log(squaredOdds);

/*
  Part 4 - Numbers Greater Than 15, Minus 5
*/

const adjustedNumbers = numbers.filter((num) => num > 15).map(num => num - 5);

// console.log(adjustedNumbers);


console.log(`----OutPut from Above Functions on Numbers Array------\n`);
console.log(`Even Numbers:  ${evenNumbers}`);
console.log(`Doubled Numbers:  ${doubledNumbers}`);
console.log(`Squared Odds:  ${squaredOdds}`);
console.log(`Adjusted Numbers:  ${adjustedNumbers}`);
console.log(`\n----End of OutPut from Above Functions on Numbers Array------`);





