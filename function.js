//function
//Arrow function (can save result in a variable)//short work

// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => {
//     // console.log(a + b);
//     return a + b;
// };

// let arr = arrowSum(3, 4);
// console.log(arr);

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;

//         }

//     }
//     console.log(count);

// }


// const countVowels = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;

//         }

//     }
//     console.log(count);

// }

// countVowels("abcdef");

//Callback function.
let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(function printval(value) { //value at each index

//     console.log(value);

// })

//Callback value (parameter=> value, optional=> index, array)
//forEach only for array (Not form new array)
//forEach higher order function/methods (takes function parameter, return function as a value)
// arr.forEach((value, index, arr) => {
//     console.log(value, index, arr);

// });

// let calcSqure = (num) => {
//     console.log(num * num);
// }

// arr.forEach(calcSqure);

//Map Method (new array return) (parameter, value, index, array)

// let newArr = arr.map((value) => {
//     return value * 2;
// });
// console.log(newArr);

//Filter method, creates new array of elements that give true for a condition
// let filterArray = arr.filter((value) => {
//     return value % 2 == 0;
// });

// console.log(filterArray);

//Reduce method ..Reduces the array to a single value based on some operation, return that single value

// const output = arr.reduce((prevRes, currRes) => {

// return prevRes + currRes;
//     return prevRes > currRes ? prevRes : currRes;
// })
// console.log(output);

// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// r1.question('Enter your number: ', (input) => {
//     let parseInput = parseInt(input, 10);
//     let a = [];

//     for (let i = 1; i <= parseInput; i++) {
//         a[i - 1] = i;

//     }
//     console.log(a);

//     r1.close();
// });


